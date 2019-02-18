import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacilityMapListComponent } from './facility-map-list/facility-map-list.component';
import { FacilityMapUserListComponent } from './facility-map-user-list/facility-map-user-list.component';
import { FacilityUserMappingComponent } from './facility-user-mapping/facility-user-mapping.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: FacilityMapListComponent,
  },
  {
    path: 'user-list',
    component: FacilityMapUserListComponent,
  },
  {
    path: 'user-mapping',
    component: FacilityUserMappingComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FacilityMappingRoutingModule { }
