import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FacilityMapListComponent } from './facility-map-list/facility-map-list.component';
import { FacilityMapUserListComponent } from './facility-map-user-list/facility-map-user-list.component';
import { FacilityMappingRoutingModule } from './facility-mapping-routing.module';
import { FacilityUserMappingComponent } from './facility-user-mapping/facility-user-mapping.component';

@NgModule({
  declarations: [FacilityMapListComponent, FacilityMapUserListComponent, FacilityUserMappingComponent],
  imports: [
    CommonModule,
    FacilityMappingRoutingModule
  ]
})
export class FacilityMappingModule { }
