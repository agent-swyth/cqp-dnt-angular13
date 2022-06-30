import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CAddComponent } from './cadd/cadd.component';
import { CDeleteComponent } from './cdelete/cdelete.component';
import { CEditComponent } from './cedit/cedit.component';
import { CIndexComponent } from './cindex/cindex.component';

const routes: Routes = [
  { path: '', component: CIndexComponent },
  {
    path: 'add', component: CAddComponent
  },
  {
    path: 'edit/:cid', component: CEditComponent
  },
  {
    path: 'delete/:cid', component: CDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CocktailRoutingModule { }
