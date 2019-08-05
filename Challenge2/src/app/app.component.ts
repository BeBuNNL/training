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
  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent){
    //console.log(event);
    setTimeout(() => {
      if (event.keyCode === KEY.ALT_CODE){
        this.altState = true;
        return this.altState;
      }
    }, 2000);
  }
  public altState: boolean = false;
  public bubbles: bubble[] = [];
  public count: number;
  public width: number;
  public height: number;
  public score: number = 0;
  public initBubble(){
    let bub: bubble;
    bub = {
      size: Math.floor(Math.random()*100),
      health: Math.round(Math.random()*100)/10,
      rnod: Math.floor(Math.random()*360),
      cnod: Math.floor(Math.random()*30),
      d: ''
    }
    bub.d = 'M ' + ((360 - bub.rnod)*this.width)/360 + ',' + bub.cnod/30*this.height + ' a ' 
    + bub.size + ',' + bub.size + ' 0 1,0 ' + bub.size*2 + ',0' 
    + ' a ' + bub.size + ',' + bub.size + ' 0 1,0 ' + -bub.size*2 + ',0'; 
    console.log(bub.rnod + ' ' + bub.cnod + ' ' + bub.size);
    return bub;
  };

  ngOnInit(): void{
    this.height = this.innerHeight.nativeElement.clientHeight;
    this.width = this.innerWidth.nativeElement.clientWidth;
    this.count = 0;
    for (let i=0; i<10;i++){
      let elem = this.initBubble();
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

  getrnod(x: bubble){
    return x.rnod;
  }

  tick(){
    const time = setInterval(() => {
      if (this.bubbles.length != 0 && this.count < 120){
        this.count++;
        for (let i = 0; i < this.bubbles.length; i++){
          if (this.bubbles[i].cnod > 30){
            this.bubbles.splice(i,1);
          }
          if(this.bubbles[i].rnod < 0){
            if (this.bubbles[i].health < 3.5){
              this.bubbles.splice(i,1);
            }
            this.bubbles.splice(i,1);
          }
          this.bubbles[i] = {
            size: this.bubbles[i].size,
            health: this.bubbles[i].health - Math.floor(Math.random()*2),
            rnod: this.bubbles[i].rnod - 1,
            cnod: this.bubbles[i].cnod + 1,
            d: ''
          }
          if (this.bubbles[i].health >= 10){
            this.bubbles[i].health = 10;
          }
          // this.bubbles[i].d = 'M ' + (this.getrnod(this.bubbles[i])*this.width/360 + this.count*(this.width/360)*2)
          this.bubbles[i].d = 'M ' + ((360 - this.bubbles[i].rnod)*this.width)/360
            + ',' + (this.bubbles[i].cnod*this.height/30)
            + ' a ' + this.bubbles[i].size + ',' + this.bubbles[i].size 
            + ' 0 1,0 ' + this.bubbles[i].size*2 + ',0' + ' a ' + this.bubbles[i].size 
            + ',' + this.bubbles[i].size + ' 0 1,0 ' + -this.bubbles[i].size*2 + ',0';
          this.score += this.bubbles[i].size;
          //console.log(this.count);
          //console.log((this.getrnod(this.bubbles[i])+this.count*2)*this.width/360 + this.width/360);
          console.log(this.bubbles[i]);
        }
      } else {
        clearInterval(time);
      }
    }, 2000/6);
  }

  svgClick(x: bubble){
    x.cnod = 0;
    if (this.altState === true){
      this.altState = false;
      x.health += 3;
      setTimeout(() => {
        for (let i = 0; i < this.bubbles.length; i++){
          this.bubbles[i].health += Math.floor(Math.random()*5);
        }
      }, 1000);
    }
  }

  refresh(): void{
    window.location.reload();
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