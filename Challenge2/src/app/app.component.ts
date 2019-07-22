import { Component, ViewChild, ElementRef, OnInit, HostListener, Host } from '@angular/core';
import { viewClassName } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'Challenge2';
  @ViewChild('classParent', {static: true}) innerHeight: ElementRef<HTMLDivElement>
  @ViewChild('classParent', {static: true}) innerWidth: ElementRef<HTMLDivElement>
  @HostListener('window:keypress',['$event'])
  keyEvent(event: KeyboardEvent){
    console.log(event);
    setTimeout(() => {
      if (event.keyCode === KEY.ALT_CODE){
        this.score += 2;
        return true;
      }
    }, 2000);
  }
  public bubbles: bubble[] = [];
  public count: number;
  public width: number;
  public height: number;
  public rand: number;
  public score: number = 0;
  public initBubble(){
    let bub: bubble;
    this.rand = Math.random();
    bub = {
      size: Math.floor(Math.random()*100),
      health: Math.round(Math.random()*100)/10,
      rnod: Math.floor(this.rand*360),
      cnod: Math.floor(Math.random()*30),
      d: ''
    }
    bub.d = 'M ' + bub.rnod/360*this.width + ' ' + bub.cnod/30*this.height + 'a ' 
    + bub.size + ',' + bub.size + ' 0 1,0 ' + bub.size*2 + ', 0' 
    + ' a ' + bub.size + ',' + bub.size + ' 0 1,0 ' + -bub.size*2 + ', 0'; 
    return bub;
  };

  ngOnInit(): void{
    this.height = this.innerHeight.nativeElement.clientHeight;
    this.width = this.innerWidth.nativeElement.clientWidth;
    this.count = 0;
    for (let i=0; i<10;i++){
      var elem = this.initBubble();
      this.bubbles.push(elem);
    }
  }

  getColor(x: bubble){
    if(x.health > 7.5){
      return 'green';
    }
    else if (x.health < 3.5){
      return 'red';
    }else{
      return 'yellow';
    }
  }

  tick(){
    const time = setInterval(() => {
      if (this.bubbles.length != 0 && this.count < 120){
        this.count++;
        //console.log(this.count);
        //console.log(this.bubbles.length);
        for (let i = 0; i < this.bubbles.length; i++){
          if (this.bubbles[i].cnod > 30 || this.bubbles[i].rnod < 0){
            this.bubbles.splice(i,1);
          }
          if (this.bubbles[i].rnod < 0 && this.bubbles[i].health < 3.5){
            this.bubbles.splice(i,1);   
          }
          this.bubbles[i] = {
            size: this.bubbles[i].size,
            health: this.bubbles[i].health - Math.floor(Math.random()*2),
            rnod: this.bubbles[i].rnod - 1,
            cnod: this.bubbles[i].cnod + 1,
            d: this.bubbles[i].d
          }
          this.bubbles[i].d = 'M ' + ((this.bubbles[i].rnod+this.count*2)/360*this.width) 
            + ' ' + this.bubbles[i].cnod/30*this.height 
            + 'a ' + this.bubbles[i].size + ',' + this.bubbles[i].size 
            + ' 0 1,0 ' + this.bubbles[i].size*2 + ', 0' + ' a ' + this.bubbles[i].size 
            + ',' + this.bubbles[i].size + ' 0 1,0 ' + -this.bubbles[i].size*2 + ', 0';
          if (this.bubbles[i].health > 10){
            this.bubbles[i].health = 10;
          }
          this.score += this.bubbles.length;
          console.log(this.bubbles[i]);
        }
      } else {
        clearInterval(time);
      }
    }, 1000/6);
  }

  svgClick(x: bubble){
    if (this.onAltdown(event)){
      x.cnod = 0;
      x.health += 3;
      this.score += 3;
      setTimeout(() => {
        for (let i = 0; i < this.bubbles.length; i++){
          this.bubbles[i].health += Math.floor(Math.random()*5);
        }
      }, 1000);
    }
  }

  onAltdown(event){
    //console.log(event);
    return true;
  }
}

export interface bubble{
  size: any;
  health: any;
  rnod: any;
  cnod: any;
  d: any;
}

export enum KEY{
  ALT_CODE = 18
}