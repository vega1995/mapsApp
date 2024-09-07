import { Component, Input, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Map,Marker } from 'mapbox-gl';
@Component({
  selector: 'app-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrls: ['./mini-map.component.css']
})
export class MiniMapComponent implements AfterViewInit {

  @Input()lngLat?:[number,number];

  @ViewChild('map') divMap?:ElementRef;

  ngAfterViewInit(): void {

    if(!this.divMap?.nativeElement) throw 'El elemento no existe';
    if(!this.lngLat) throw 'LngLat no existe';

    const map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: 15, // starting zoom
      interactive:false
    });

    new Marker()
    .setLngLat(this.lngLat)
    .addTo(map)


  }



}
