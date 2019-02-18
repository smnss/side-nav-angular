import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceTypeListComponent } from './device-type-list/device-type-list.component';
import { DeviceTypeManageComponent } from './device-type-manage/device-type-manage.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: DeviceTypeListComponent,
  },
  {
    path: 'manage',
    component: DeviceTypeManageComponent,
  }];

@NgModule({
  declarations: [
    DeviceTypeListComponent,
    DeviceTypeManageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DeviceTypeRoutingModule { }
