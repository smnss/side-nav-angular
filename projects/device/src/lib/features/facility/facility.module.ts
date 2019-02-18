import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacilityListComponent } from './facility-list/facility-list.component';
import { FacilityManageComponent } from './facility-manage/facility-manage.component';

@NgModule({
  declarations: [FacilityListComponent, FacilityManageComponent],
  imports: [
    CommonModule
  ]
})
export class FacilityModule { }
