import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceManageComponent } from './device-manage/device-manage.component';
import { DeviceRoutingModule } from './device-routing.module';

@NgModule({
  declarations: [DeviceListComponent, DeviceManageComponent],
  imports: [
    CommonModule,
    DeviceRoutingModule
  ]
})
export class DeviceModule { }
