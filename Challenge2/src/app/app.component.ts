import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Challenge2';

  public bubble: bubbles[] = [];
  public count: number;
  public initBubble(){
    let bub: bubbles;
    let xr = Math.random();
    let xy = Math.random();
    bub = {
      posx: Math.floor(xr*1080),
      posy: Math.floor(xy*600),
      size: Math.floor(Math.random()*100),
      color: Math.round(Math.random()*100)/10,
      rnod: Math.floor(xr*360),
      cnod: Math.floor(xy*30),
      d: ''
    }
    if (bub.color > 7.5){
      bub.color = 'green';
    } else if (bub.color < 3.5){
      bub.color = 'red';
    } else {
      bub.color = 'yellow';
    }
    bub.d = 'M ' + bub.posx + ' ' + bub.posy + 'a ' + bub.size + ',' + bub.size + ' 0 1,0 ' + bub.size*2 + ', 0' + ' a ' + bub.size + ',' + bub.size + ' 0 1,0 ' + -bub.size*2 + ', 0'; 
    return bub;
  };
  
  ngOnInit(): void{
    this.count = 0;
    var elem = this.initBubble();
    var elem1 = this.initBubble();
    var elem2 = this.initBubble();
    var elem3 = this.initBubble();
    var elem4 = this.initBubble();
    var elem5 = this.initBubble();
    var elem6 = this.initBubble();
    var elem7 = this.initBubble();
    var elem8 = this.initBubble();
    var elem9 = this.initBubble();

    this.bubble.push(elem, elem1, elem2, elem3, elem4, elem5, elem6, elem7, elem8, elem9);
    console.log(this.bubble);
  }

  tick(){
    const time = setInterval(() => {
      if (this.count < 120){
        this.count++;

        for (let i = 0; i < 10; i++){
          if (this.bubble[i].posx > 1080){
            this.bubble[i].posx = 0;
            this.bubble[i].rnod = 360;
          }
          if (this.bubble[i].posy > 600){
            this.bubble.splice(i,1);
          }
          this.bubble[i] = {
            posx: this.bubble[i].posx + 3,
            posy: this.bubble[i].posy + 20,
            size: this.bubble[i].size,
            color: this.bubble[i].color,
            rnod: this.bubble[i].rnod - 1,
            cnod: this.bubble[i].cnod + 1,
            d: 'M ' + this.bubble[i].posx + ' ' + this.bubble[i].posy + 'a ' + this.bubble[i].size + ',' + this.bubble[i].size + ' 0 1,0 ' + this.bubble[i].size*2 + ', 0' + ' a ' + this.bubble[i].size + ',' + this.bubble[i].size + ' 0 1,0 ' + -this.bubble[i].size*2 + ', 0'
          }
        }
      } else {
        clearInterval(time);
      }
    }, 1000/6);
  }

  svgClick(x: bubbles){
    x.cnod = 0;
    x.posy = 0;
  }
}

export interface bubbles{
  posx: any;
  posy: any;
  size: any;
  color: any;
  rnod: any;
  cnod: any;
  d: any;
}
