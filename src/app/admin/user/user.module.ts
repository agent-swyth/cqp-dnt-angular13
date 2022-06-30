import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UAddComponent } from './uadd/uadd.component';
import { UDeleteComponent } from './udelete/udelete.component';
import { UIndexComponent } from './uindex/uindex.component';
import { UEditComponent } from './uedit/uedit.component';

@NgModule({
  declarations: [
    UEditComponent,
    UAddComponent,
    UDeleteComponent,
    UIndexComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
