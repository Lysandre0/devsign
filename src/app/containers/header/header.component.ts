import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router
  ) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.onLogin = this.loginUrls.includes(val.urlAfterRedirects);
      }
    });
  }

  public items: MenuItem[] = [
    {
      label:'Dashboard',
      icon:'pi pi-fw pi-microsoft',
      command: () => {
        this.navigate('dashboard');
      },
    },
  ];

  public title: string = "Devsign";

  public loginUrls: string[] = ['/', '/login']
  public onLogin: boolean = true;

  ngOnInit(): void {
  }

  public navigate(url: string): void {
    this.router.navigate([url]);
  }
}
