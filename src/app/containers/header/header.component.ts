import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  public items: MenuItem[] = [
    {
      label:'Dashboard',
      icon:'pi pi-fw pi-microsoft',
    },
    {
      label:'Module',
      icon:'pi pi-fw pi-bars',
    },
    {
      label:'Calendrier',
      icon:'pi pi-fw pi-calendar',
    },
  ];

  public title: string = "Devsign";

  ngOnInit(): void {
  }

}
