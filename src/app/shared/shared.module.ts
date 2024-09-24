import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [SideMenuComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    //este es para trabajar los router
    RouterModule
  ],
  exports:[SideMenuComponent]
})
export class SharedModule { }
