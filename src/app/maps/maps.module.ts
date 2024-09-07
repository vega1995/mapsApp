import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as mapboxgl from 'mapbox-gl';

(mapboxgl as any).accessToken = 'pk.eyJ1Ijoia3ZlZ2E5NSIsImEiOiJjbHprdHUzMmUwNDhqMmpvbGV1M3IxNmw5In0.GfsI8J-cSeYzWaqbkTbOBA';


import { MapsRoutingModule } from './maps-routing.module';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MarkersPageComponent } from './page/markers-page/markers-page.component';
import { PropertiesPageComponent } from './page/properties-page/properties-page.component';
import { ZoomRagePageComponent } from './page/zoom-rage-page/zoom-rage-page.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';


@NgModule({
  declarations: [
    MiniMapComponent,
    SideMenuComponent,
    MarkersPageComponent,
    PropertiesPageComponent,
    ZoomRagePageComponent,
    MapsLayoutComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule
  ]
})
export class MapsModule { }
