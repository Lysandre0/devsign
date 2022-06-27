import { Component, OnInit } from '@angular/core';
import {Module} from "../../shared/models/module.model";
import {modules} from "../../data/module.data";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  public modules: Module[] = modules;

  ngOnInit(): void {
  }

}
