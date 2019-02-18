import { NgModule } from '@angular/core';
import { DeviceRoutingModule } from './device-routing.module';
import { DeviceComponent } from './device.component';
import { HomeComponent } from './home/home.component';
// import { HttpService } from 'src/http/http.service';

@NgModule({
  declarations: [DeviceComponent, HomeComponent],
  imports: [
    DeviceRoutingModule
  ],
  exports: [DeviceComponent]
})
export class DeviceModule { }
