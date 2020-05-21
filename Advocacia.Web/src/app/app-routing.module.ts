import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministrativoComponent } from './administrativo/administrativo.component';
import { VaraComponent } from './administrativo/vara/vara.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [

  { path:'administrativo', component: AdministrativoComponent,
    children:[
    { path:'vara', component: VaraComponent}
  ]},

  { path:'home', component: HomeComponent},
  { path:'', redirectTo: 'home', pathMatch:'full'},
  { path:'**', redirectTo:'home', pathMatch:'full'}
   
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
