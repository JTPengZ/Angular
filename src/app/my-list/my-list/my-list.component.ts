import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ListService } from 'src/app/services/global.service';
import { MyListPokemonInterface } from '../my-list.model';
@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss']
})
export class MyListComponent implements OnInit {
  newPokemon:FormGroup;
  pokemonList: MyListPokemonInterface[] = [];

  sts = [
    { label: "hp"},
    { label: "attack"},
    { label: "defense"},
    { label: "special-attack"},
    { label: "special-defense"},
    { label: "speed"}
  ];

  constructor(private formBuilder: FormBuilder, private ser:ListService) { 
    this.newPokemon = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(20)]],
      image: ['', [Validators.required, Validators.maxLength(50)]],
      abilities: this.formBuilder.array([
        this.formBuilder.control('')
      ], Validators.required),
      types: this.formBuilder.array([
        this.formBuilder.control('')
      ], Validators.required),
      stats: this.formBuilder.array([

      ], Validators.required),
      moves: this.formBuilder.array([
        this.formBuilder.control('')
      ], Validators.required),
    })
  }

  ngOnInit(): void {
    this.addStats();
  }

  onSubmit() {
    this.pokemonList.push(this.newPokemon.value);
    this.ser.submitPokemon(this.newPokemon.value).subscribe((pokemon:MyListPokemonInterface | any) => this.pokemonList.push(pokemon));
  }

  addStats(){
    for (let s of this.sts) {
      this.addNewFormControl(s);
    }
  }

  addNewFormControl(status: { label?: string }){
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

  get types() {
    return this.newPokemon.controls["types"] as FormArray;
  }

  addType() {
      this.types.push(this.formBuilder.control(''));
  }

  deleteType(i: number) {
    this.types.removeAt(i);
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
