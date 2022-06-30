import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UAddComponent } from './uadd/uadd.component';
import { UDeleteComponent } from './udelete/udelete.component';
import { UEditComponent } from './uedit/uedit.component';
import { UIndexComponent } from './uindex/uindex.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  {
    path: 'index', component: UIndexComponent
  },
  {
    path: 'edit/:uid', component: UEditComponent
  },
  {
    path: 'add/:uid', component: UAddComponent
  },
  {
    path: 'delete/:uid', component: UDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
