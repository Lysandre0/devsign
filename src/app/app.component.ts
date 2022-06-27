import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: MenuItem[];
  ngOnInit() {
    this.items = [
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
  }
  title = 'Devsign';
}
