import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceManageComponent } from './device-manage/device-manage.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'device-list',
    pathMatch: 'full',
  },
  {
    path: 'device-list',
    component: DeviceListComponent,
  },
  {
    path: 'device-manage',
    component: DeviceManageComponent,
  }];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DeviceRoutingModule { }
