import { Component, OnInit } from '@angular/core';
import {Module} from "../../shared/models/module.model";
import {modules} from "../../data/module.data";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  public modules: Module[] = modules;

  ngOnInit(): void {
  }

}
