import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CocktailRoutingModule } from './cocktail-routing.module';
import { CIndexComponent } from './cindex/cindex.component';
import { CEditComponent } from './cedit/cedit.component';
import { CAddComponent } from './cadd/cadd.component';
import { CDeleteComponent } from './cdelete/cdelete.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CIndexComponent,
    CEditComponent,
    CAddComponent,
    CDeleteComponent
  ],
  imports: [
    CommonModule,
    CocktailRoutingModule,
    FormsModule
  ]
})
export class CocktailModule { }
