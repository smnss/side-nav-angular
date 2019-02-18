import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceManageComponent } from './device-manage/device-manage.component';

const routes: Routes = [
  {
    path: 'device',
    component: DeviceComponent,
    children: [{path: 'home', component: HomeComponent}]
  }
];

@NgModule({
  declarations: [DeviceListComponent, DeviceManageComponent],
  imports: [
    CommonModule
  ]
})
export class DeviceModule { }
