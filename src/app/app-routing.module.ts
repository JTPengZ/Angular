import { NgModule } from '@angular/core';
import { 
  RouterModule, Routes,
} from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: "list",
    loadChildren: () => import('./list/list.module').then(m => m.ListModule)
  },
  {
    path: "myList",
    loadChildren: () => import('./my-list/my-list.module').then(m => m.MyListModule)
  },
  {
    path: "about",
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'home',
    redirectTo: "/home", pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
