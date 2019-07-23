import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { FormComponent } from './form/form.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'view', component:ViewComponent},
  {path:'form', component:FormComponent},
  {path:'update/:id', component:UpdateComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
