import { Component, OnInit } from '@angular/core';
import {Module} from "../../shared/models/module.model";
import {modules} from "../../data/module.data";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Person} from "../../shared/models/person.model";

@Component({
  selector: 'app-module-detail',
  templateUrl: './module-detail.component.html',
  styleUrls: ['./module-detail.component.css']
})
export class ModuleDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  public module: Module | undefined;

  public onCloture: boolean = false;
  public canvasClicked: boolean = false;
  public displayModal: boolean = false;

  public changeSignStudent: Person;
  public displayModalSign: boolean = false;

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.module = modules.find((mod: Module) => mod.id === parseInt(params['id']));
      if (!this.module) {
        this.router.navigate(['dashboard']);
      }
    });
  }

  public startCloture(): void {
    this.onCloture = true;
  }

  public onCanvasClick(): void {
    this.canvasClicked = true;
  }

  public showModal(): void {
    this.displayModal = true;
  }

  public endCloture(): void {
    this.displayModal = false;
    this.onCloture = false;
    this.module && (this.module.status = "Clôturé");
  }

  public displayChangeStatusSign(student: Person): void {
    this.displayModalSign = true;
    this.changeSignStudent = student;
  }

  public changeStatusSign(typeSign: string): void {
    this.changeSignStudent.statusSign = typeSign;
    this.displayModalSign = false;
  }
}
