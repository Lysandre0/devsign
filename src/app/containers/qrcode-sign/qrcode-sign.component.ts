import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {modules} from "../../data/module.data";
import {Module} from "../../shared/models/module.model";

@Component({
  selector: 'app-qrcode-sign',
  templateUrl: './qrcode-sign.component.html',
  styleUrls: ['./qrcode-sign.component.css']
})
export class QrcodeSignComponent implements OnInit {

  public myAngularxQrCode: string;
  public module: Module | undefined;

  constructor (
    public route: ActivatedRoute,
    public router: Router,
  ) {
    this.myAngularxQrCode = 'https://www.form-dev.fr';
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.module = modules.find((mod: Module) => mod.id === parseInt(params['id']));
      if (!this.module) {
        this.router.navigate(['dashboard']);
      }
    });
  }

}
