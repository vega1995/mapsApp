import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { LngLat, Map } from 'mapbox-gl';
@Component({
  templateUrl: './zoom-rage-page.component.html',
  styleUrls: ['./zoom-rage-page.component.css']
})
export class ZoomRagePageComponent implements AfterViewInit ,OnDestroy {


  @ViewChild('map') divMap?:ElementRef;
  public zoom:number = 13;
  public map?:Map;
  public currentLocation:LngLat= new LngLat(-88.0258091,15.5877877);

  ngAfterViewInit(): void {

    if(!this.divMap?.nativeElement) throw 'El elemento no existe';

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLocation, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });

    this.mapListener();
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }


  mapListener() {

    if(!this.map) throw 'Mapa no inicializado';

    this.map.on('zoom', (ev)=>{
      this.zoom = this.map!.getZoom();
    })

    this.map.on('zoomend', (ev)=>{
      if(this.map!.getZoom()>18){
        this.map!.zoomTo(18);
      }
    })

    this.map.on('move',()=>{

      this.currentLocation = this.map!.getCenter();
      const {lng,lat} = this.currentLocation;

    })

  }

  zoomIn(){

    if(!this.map) throw 'Mapa no inicializado';
    this.map.zoomIn();
  }

  zoomOut(){
    if(!this.map) throw 'Mapa no inicializado';
    this.map.zoomOut();
  }
  zoomChange(value:string){
    if(!this.map) throw 'Mapa no inicializado';
    this.zoom=Number(value);
    this.map.zoomTo(this.zoom);
  }

}
