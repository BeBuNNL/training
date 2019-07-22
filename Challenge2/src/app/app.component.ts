import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Challenge2';

  @ViewChild('canvas', {static:true}) canvas:ElementRef<HTMLCanvasElement>;
  public ctx: CanvasRenderingContext2D;
  public bubble: bubbles[] = [];
  public count: number;

  ngOnInit(): void{
    this.ctx = this.canvas.nativeElement.getContext("2d");
    this.count = 0;

    for( let i = 0; i < 10; i++ ){
      let xr = Math.random();
      let xy = Math.random();
      this.bubble[i] = {
        posx: Math.floor(xr*1080),
        posy: Math.floor(xy*600),
        size: Math.floor(Math.random()*100),
        color: Math.round(Math.random()*100)/10,
        rnod: Math.floor(xr*360),
        cnod: Math.floor(xy*30)
      }
    }
  }

  drawbub(x: bubbles){
    if (x.color > 7.5){
      this.ctx.fillStyle = 'green';
    } else if (x.color < 3.5){
      this.ctx.fillStyle = 'red';
    } else {
      this.ctx.fillStyle = 'yellow';
    }
    this.ctx.fill();
    this.ctx.beginPath();
    this.ctx.arc(x.posx, x.posy, x.size, 0, 2*Math.PI);
    this.ctx.stroke();
  }
}

export interface bubbles{
  posx: any;
  posy: any;
  size: any;
  color: any;
  rnod: any;
  cnod: any;
}
