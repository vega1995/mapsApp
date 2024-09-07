import { Component, ElementRef, ViewChild } from '@angular/core';

import { Map,LngLat, Marker } from 'mapbox-gl';

interface MarkerColor{
  color:string,
  marker:Marker
}

interface plainMarker{
  color:string,
  lngLat:number[]
}

@Component({
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.css']
})
export class MarkersPageComponent {
  @ViewChild('map') divMap?:ElementRef;
  public zoom:number = 10;
  public map?:Map;
  public currentLocation:LngLat= new LngLat(-88.0258091,15.5877877);

  public markers:MarkerColor[]=[];


  ngAfterViewInit(): void {

    if(!this.divMap?.nativeElement) throw 'El elemento no existe';

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLocation, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });

      this.readFromLocalStorage();

    // const markerHtlml = document.createElement('div');
    // markerHtlml.innerHTML= 'Nazi';
    // const marker=new Marker({
    //   element: markerHtlml
    // })
    // .setLngLat(this.currentLocation)
    // .addTo(this.map)

    // const marker=new Marker({
    //   color: '#FF0000'
    // })
    // .setLngLat(this.currentLocation)
    // .addTo(this.map)

  }

  createMarker(){

    if(!this.map) return;
    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const LngLat = this.map.getCenter();

    this.addMarker(LngLat,color);

  }


  addMarker(LngLat:LngLat,color:string){
    if(!this.map) return;

    const marker=new Marker({
      color: color,
      draggable:true
    })
    .setLngLat(LngLat)
    .addTo(this.map);

    this.markers.push({color,marker});
    this.saveToLocalStorage();

    marker.on('dragend',()=>{

      this.saveToLocalStorage();
    })

  }

  deleteMarker(index:number){
    this.markers[index].marker.remove();
    this.markers.splice(index,1);
  }

  flyTo(marker:Marker){
    this.map?.flyTo({
      zoom:14,
      center:marker.getLngLat()
    })

  }

  saveToLocalStorage(){

    const plainMarkerArr:plainMarker[]=this.markers.map(({color,marker})=>{
      return {
        color,
        lngLat:marker.getLngLat().toArray()
      }
    });

    localStorage.setItem('plainMarkers',JSON.stringify(plainMarkerArr));

  }

  readFromLocalStorage(){

    if(!localStorage.getItem('plainMarkers')) return;

    const plainMarkerArr:plainMarker[] = JSON.parse(localStorage.getItem('plainMarkers')??'[]');
    plainMarkerArr.forEach(({color,lngLat})=>{
      const  [lng,lat]=lngLat;
      const coord=new LngLat(lng,lat);
      this.addMarker(coord,color);
    })
  }

}
