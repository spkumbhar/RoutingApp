import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NfComponent } from './nf/nf.component';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { DashComponent } from './dash/dash.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'dash/:usId', component: DashComponent},
  {path:  'dash', redirectTo: 'dash/234', pathMatch: 'full'},
  {path: 'error', component: ErrorComponent},
  {path: '**', component: NfComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
