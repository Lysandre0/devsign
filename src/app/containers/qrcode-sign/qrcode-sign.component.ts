import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qrcode-sign',
  templateUrl: './qrcode-sign.component.html',
  styleUrls: ['./qrcode-sign.component.css']
})
export class QrcodeSignComponent implements OnInit {

  public myAngularxQrCode: string ;
  constructor () {
    // assign a value
    this.myAngularxQrCode = 'Your QR code data string';
  }

  ngOnInit(): void {
  }

}
