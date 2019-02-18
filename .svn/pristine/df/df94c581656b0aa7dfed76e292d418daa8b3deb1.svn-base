import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'device',
    pathMatch: 'full',
  },
  {
    path: 'device',
    children: [
      {
        path: '',
        loadChildren:
          './device/device.module#DeviceModule',
      },
    ]
  },
  {
    path: 'device-type',
    children: [
      {
        path: '',
        loadChildren:
          './device-type/device-type.module#DeviceTypeModule',
      },
    ]
  },
  {
    path: 'facility',
    children: [
      {
        path: '',
        loadChildren:
          './facility/facility.module#FacilityModule',
      },
    ]
  },
  {
    path: 'facility-mapping',
    children: [
      {
        path: '',
        loadChildren:
          './facility-mapping/facility-mapping.module#FacilityMappingModule',
      },
    ]
  },
  {
    path: 'user-facility',
    children: [
      {
        path: '',
        loadChildren:
          './user-facility/user-facility.module#UserFacilityModule',
      },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
  ]
})
export class DeviceRoutingModule { }
