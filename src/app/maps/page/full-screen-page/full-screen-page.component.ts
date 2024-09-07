import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Map } from 'mapbox-gl';



@Component({
  templateUrl: './full-screen-page.component.html',
  styleUrls: ['./full-screen-page.component.css']
})
export class FullScreenPageComponent implements AfterViewInit {

  @ViewChild('map') divMap?:ElementRef;

  ngAfterViewInit(): void {

    if(!this.divMap?.nativeElement) throw 'El elemento no existe';

    const map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-88.0258091,15.5877877 ], // starting position [lng, lat]
      zoom: 12, // starting zoom
    });
  }


}
