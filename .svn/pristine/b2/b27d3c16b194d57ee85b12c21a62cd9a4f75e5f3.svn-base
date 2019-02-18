import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DeviceComponent } from './device.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: 'device',
    component: HomeComponent,
    children: [{path: 'home', component: HomeComponent}]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class DeviceRoutingModule { }
