import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ValidatepageComponent } from './validatepage/validatepage.component';

const routes: Routes = [
  {
    path: 'listDetails',
    component: ListComponent,
  },
  {
    path:'validate',
    component:ValidatepageComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
