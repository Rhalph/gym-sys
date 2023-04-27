import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRegistrComponent } from './create-registr/create-registr.component';
import { RegistrListComponent } from './registr-list/registr-list.component';

const routes: Routes = [
  {path:'', redirectTo:'register', pathMatch:'full'},
  {path:'register', component:CreateRegistrComponent},
  {path:'reg-list', component:RegistrListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
