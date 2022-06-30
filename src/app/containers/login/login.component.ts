import { Component, OnInit } from '@angular/core';
import {Module} from "../../shared/models/module.model";
import {modules} from "../../data/module.data";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  public modules: Module[] = modules;

  public email: string;
  public password: string;

  ngOnInit(): void {
  }

  public onSubmit() {
    this.email && this.password && (this.router.navigate(["dashboard"]));
  }

}
