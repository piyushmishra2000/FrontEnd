import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DasboardComponent } from './components/dasboard/dasboard.component';


const routes: Routes = [{path:'login',component:LoginComponent},{path:'register',component:RegisterComponent},{path:'home',component:DasboardComponent},
{path:'', redirectTo:'login',pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
