import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AlayoutComponent } from './alayout/alayout.component';
import { AheaderComponent } from './aheader/aheader.component';
import { AsidemenuComponent } from './asidemenu/asidemenu.component';



@NgModule({
  declarations: [
    DashboardComponent,
    AlayoutComponent,
    AheaderComponent,
    AsidemenuComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
