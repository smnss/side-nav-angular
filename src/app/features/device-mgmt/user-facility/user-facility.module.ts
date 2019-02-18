import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DeviceViewComponent } from './device-view/device-view.component';
import { UserFacilityRoutingModule } from './user-facility-routing.module';

@NgModule({
  declarations: [DeviceViewComponent],
  imports: [
    CommonModule,
    UserFacilityRoutingModule
  ]
})
export class UserFacilityModule { }
