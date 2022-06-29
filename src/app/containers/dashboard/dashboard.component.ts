import { Component, OnInit } from '@angular/core';
import {Module} from "../../shared/models/module.model";
import {modules} from "../../data/module.data";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', '../../app.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  public modules: Module[] = modules;
  public displayPlanning: boolean = false;

  ngOnInit(): void {
  }

  public switchDisplay(): void {
    this.displayPlanning = !this.displayPlanning;
  }

}
