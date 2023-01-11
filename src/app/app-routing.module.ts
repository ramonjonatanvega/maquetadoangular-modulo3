import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { IndexComponent } from './index/index.component';
import { ModalLoginComponent } from './modales/modal-login/modal-login.component';
import { GuardGuard } from './servicios/guard.guard';


const routes: Routes = [
  {path: 'index',component:IndexComponent},
 //{path:'modal-login',component:ModalLoginComponent},
  //{path:'',redirectTo:'modal-login',pathMatch:'full'},
  {path: '',component:IndexComponent},
  //{path: 'dashboard',component:DashboardComponent},
  {path: 'dashboard',component:DashboardComponent, canActivate:[GuardGuard]},
  
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
