import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './page/full-screen-page/full-screen-page.component';
import { ZoomRagePageComponent } from './page/zoom-rage-page/zoom-rage-page.component';
import { MarkersPageComponent } from './page/markers-page/markers-page.component';
import { PropertiesPageComponent } from './page/properties-page/properties-page.component';

const routes: Routes = [
  {
    path:'',
    component:MapsLayoutComponent,
    children:[
      {path:'fullscreen',component:FullScreenPageComponent},
      {path:'zoom-rage',component:ZoomRagePageComponent},
      {path:'markers',component:MarkersPageComponent},
      {path:'properties',component:PropertiesPageComponent},
      {path:'**',redirectTo:'fullscreen'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
