import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ViewChild, ElementRef, Input} from "@angular/core";
import {fromEvent} from "rxjs";
import {switchMap, takeUntil, pairwise} from "rxjs";

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

  @ViewChild('canvas') public canvas: ElementRef;

  @Input() public width = 0.400;
  @Input() public height = 0.200;

  @Output() public canvasClickedChange: EventEmitter<void> = new EventEmitter<void>();

  private cx: CanvasRenderingContext2D | null;

  ngOnInit() {
  }

  public ngAfterViewInit() {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.cx = canvasEl.getContext('2d');
    canvasEl.width = window.innerWidth * this.width;
    canvasEl.height = window.innerHeight * this.height;
    if (this.cx) {
      this.cx.lineWidth = 3;
      this.cx.lineCap = 'round';
      this.cx.strokeStyle = '#000';
      this.captureEvents(canvasEl);
    }
  }

  private captureEvents(canvasEl: HTMLCanvasElement) {
    if (this.cx) {
      fromEvent(canvasEl, 'mousedown')
        .pipe(
          switchMap((e) => {
            return fromEvent(canvasEl, 'mousemove')
              .pipe(
                takeUntil(fromEvent(canvasEl, 'mouseup')),
                takeUntil(fromEvent(canvasEl, 'mouseleave')),
                pairwise()
              )
          })
        )
        .subscribe((res: any) => {
          const rect = canvasEl.getBoundingClientRect();
          const prevPos = {
            x: res[0].clientX - rect.left,
            y: res[0].clientY - rect.top
          };

          const currentPos = {
            x: res[1].clientX - rect.left,
            y: res[1].clientY - rect.top
          };
          this.drawOnCanvas(prevPos, currentPos);
        });
    }
  }

  private drawOnCanvas(
    prevPos: { x: number, y: number },
    currentPos: { x: number, y: number }
  ) {
    if (!this.cx) { return; }
    this.cx.beginPath();
    if (prevPos) {
      this.cx.moveTo(prevPos.x, prevPos.y); // from
      this.cx.lineTo(currentPos.x, currentPos.y);
      this.cx.stroke();
      this.canvasClickedChange.next()
    }
  }
}
