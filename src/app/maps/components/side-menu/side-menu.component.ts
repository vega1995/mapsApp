import { Component } from '@angular/core';
interface MenuItem{
  name:string;
  route:string;
}
@Component({
  selector: 'map-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
  public menuItems:MenuItem[]=[
    {route:'/maps/fullscreen',name:'Full Screen'},
    {route:'/maps/zoom-rage',name:'Zoom Range'},
    {route:'/maps/markers',name:'Markers'},
    {route:'/maps/properties',name:'Houses'},

  ]

}
