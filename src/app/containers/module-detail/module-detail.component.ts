import { Component, OnInit } from '@angular/core';
import {Module} from "../../shared/models/module.model";
import {modules} from "../../data/module.data";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-module-detail',
  templateUrl: './module-detail.component.html',
  styleUrls: ['./module-detail.component.css']
})
export class ModuleDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  public module: Module | undefined;

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.module = modules.find((mod: Module) => mod.id === parseInt(params['id']));
    });
  }

}
