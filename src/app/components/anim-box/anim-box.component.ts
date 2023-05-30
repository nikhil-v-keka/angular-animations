import { animate, group, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-anim-box',
  templateUrl: './anim-box.component.html',
  styleUrls: ['./anim-box.component.css'],
  animations:[
    trigger('changeState',[
      state('original',style({
        backgroundColor: "#47748f",
        transform:'scale(1)'
      })),
      state('basic',style({
        backgroundColor: "#440000",
        transform:'scale(2)'
      })),
      state('ease',style({
        backgroundColor:'#fff',
        transform:'scale(1.6)'
      })),
      state('delay',style({
        backgroundColor:'#03fc73',
        transform:'scale(1.8)'
      })),
      state('stepped',style({
        backgroundColor:'#40a86f',
        transition:'scale(1)'
      })),
      state('parallel',style({
        backgroundColor:'#79a840',
        transform:'scale(1)'
      })),
      transition('* => basic',animate('800ms')),
      transition('* => original',animate('200ms')),
      transition('* => delay',animate('800ms 1200ms ease-out')),
      transition('* => ease',animate('800ms ease-in-out')),
      transition('* => stepped',animate('3000ms',keyframes([
        style({backgroundColor: '#dd9344', transform: 'scale(1.4)', offset: 0.2}),
        style({backgroundColor: '#5c2346', transform: 'scale(0.8)', offset: 0.4}),
        style({backgroundColor: '#1b1b1b', transform: 'scale(1.2)', offset: 0.7}),
        style({backgroundColor: '#549a76', transform: 'scale(1)', offset: 0.9})
      ]))),
      transition('* => parallel',[
        group([
          animate('1000ms ease-out',style({
            backgroundColor:'#8440a8',
          })),
          animate('2000ms ease-out',style({
            transform:'scale(1.4)'
          }))
        ])
      ])
    ])
  ]
})
export class AnimBoxComponent {
  @Input() currentState!: string;  
  msg:string = '';
  startAnimation(e: any){
    this.msg = e.phaseName + ": "+ e.fromState + " to "+ e.toState  + " [ "+ e.totalTime+" ]";
    
  }

  endAnimation(e: any){
    this.msg = e.phaseName + ": "+ e.fromState + " to "+ e.toState  + " [ "+ e.totalTime+" ]";
    setTimeout(()=>{
      this.msg=""
    },3000);
    
  }
}


