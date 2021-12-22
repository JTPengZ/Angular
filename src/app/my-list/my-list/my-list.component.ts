import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ListService } from 'src/app/services/global.service';
import { MyListPokemonInterface } from '../my-list.model';
@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss']
})
export class MyListComponent implements OnInit, AfterViewChecked {
  newPokemon:FormGroup;
  pokemonList: MyListPokemonInterface[] = [];
  buttontype:string = "";
  idUpdate?:number;
  update: boolean = false;

  sts = [
    { label: "hp"},
    { label: "attack"},
    { label: "defense"},
    { label: "special-attack"},
    { label: "special-defense"},
    { label: "speed"}
    ];

  listTypes = ["Acero", "Agua", "Bicho", "Dragón", "Eléctrico", "Fantasma",
  "Fuego", "Hada", "Hielo", "Lucha", "Normal", "Planta", "Psíquico", "Roca",
  "Siniestro", "Tierra", "Veneno", "Volador"];
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private ser:ListService, private readonly changeDetectorRef: ChangeDetectorRef) { 
    this.newPokemon = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(20)]],
      image: ['', [Validators.required]],
      abilities: this.formBuilder.array([
      ], Validators.required),
      types: [null, Validators.required],
      stats: this.formBuilder.array([

      ], Validators.required),
      moves: this.formBuilder.array([
      ], Validators.required),
    })
  }

  ngOnInit(): void {
    this.addStats();
    this.getPokemonList();
  }

  ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
  }

  getPokemonList() {
    this.ser.getMyList().subscribe((data) => this.pokemonList = data);
  }

  onSubmit(buttontype: string) {
    this.submitted = true;
			// Si el formulario es valido
	  if (this.newPokemon.valid) {
      if(buttontype === "create")
        this.ser.submitPokemon(this.newPokemon.value).subscribe((pokemon:MyListPokemonInterface) => this.getPokemonList());
      if(buttontype === "update"){
        if(this.idUpdate)
          this.ser.updatePokemon(this.newPokemon.value, this.idUpdate).subscribe(data => this.getPokemonList());
      }
      this.update = false;
      this.newPokemon.reset();
	    this.submitted = false;
    }
  }

  onDelete(item: MyListPokemonInterface){
    this.ser.deletePokemon(item.id).subscribe(data => this.getPokemonList());
  }

  updatePokemon(item: MyListPokemonInterface){
    this.update = true;
    this.idUpdate = item.id;
    this.newPokemon.controls['name'].setValue(item.name);
    this.newPokemon.controls['image'].setValue(item.image);
    while (this.abilities.length !== 0) {
      this.abilities.removeAt(0);
    }
    for(let a of item.abilities){
      this.abilities.push(this.formBuilder.control(a))
    }
    this.newPokemon.controls['types'].setValue(item.types);
    while (this.moves.length !== 0) {
      this.moves.removeAt(0);
    }
    for(let m of item.moves){
      this.moves.push(this.formBuilder.control(m))
    }
    this.newPokemon.controls['stats'].setValue(item.stats);
  }

  addStats(){
    for (let s of this.sts) {
      this.addNewFormControl();
    }
  }

  addNewFormControl(){
    const control = <FormArray>this.newPokemon.controls['stats'];
    control.push(this.formBuilder.control(''));
  }

  get abilities() {
    return this.newPokemon.controls["abilities"] as FormArray;
  }

  addAbility() {
    this.abilities.push(this.formBuilder.control(''));
  }

  deleteAbility(abilityIndex: number) {
    this.abilities.removeAt(abilityIndex);
  }

  get moves() {
    return this.newPokemon.controls["moves"] as FormArray;
  }

  addMove() {
    this.moves.push(this.formBuilder.control(''));
  }

  deleteMove(i: number) {
    this.moves.removeAt(i);
  }

}
