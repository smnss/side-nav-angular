import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacilityListComponent } from './facility-list/facility-list.component';
import { FacilityManageComponent } from './facility-manage/facility-manage.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: FacilityListComponent,
  },
  {
    path: 'manage',
    component: FacilityManageComponent,
  }];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FacilityRoutingModule { }
