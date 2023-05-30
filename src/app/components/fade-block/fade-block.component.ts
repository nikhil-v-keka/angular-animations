import { animate, state, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { fadeAnimation } from 'src/app/animations/fade';

@Component({
  selector: 'app-fade-block',
  templateUrl: './fade-block.component.html',
  styleUrls: ['./fade-block.component.css'],
  styles: [],
  animations:[
    trigger('changeState', [
      transition('void => *', [
          // useAnimation(fadeAnimation, {
          //     params: {
          //         delay: '100ms',
          //         from: 1,
          //         to: 0,
          //         time: '800ms'
          //     }
          // })
          style({
            opacity:'1',    
          }),
          animate('1s ease-in-out',style({
            opacity:'0',
            backgroundColor:'#fff'
          }))
      ])
  ])
  ]
})
export class FadeBlockComponent {
  currentState:string='';
}
