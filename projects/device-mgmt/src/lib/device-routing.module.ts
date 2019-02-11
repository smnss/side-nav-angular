import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DeviceMgmtComponent } from './device-mgmt.component';

const routes: Routes = [
  {
    path: 'device',
    component: DeviceMgmtComponent,
    children: [{path: '', component: HomeComponent}]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DeviceRoutingModule {}
