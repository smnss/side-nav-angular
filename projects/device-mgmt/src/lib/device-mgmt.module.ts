import { NgModule } from '@angular/core';
import { DeviceMgmtComponent } from './device-mgmt.component';
import { HomeComponent } from './home/home.component';
import { DeviceRoutingModule } from './device-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DeviceMgmtComponent, HomeComponent],
  imports: [
    DeviceRoutingModule
  ],
  exports: [DeviceMgmtComponent]
})
export class DeviceMgmtModule { }
