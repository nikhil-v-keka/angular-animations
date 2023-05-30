import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mouse',
  templateUrl: './mouse.component.html',
  styleUrls: ['./mouse.component.css'],
  animations:[
    trigger('changeState',[
      state('rest',style({
        transform:'scale(1)'
      })),
      state('hover',style({
        transform:'scale(1.2)'
      })),
      state('press',style({
        transform:'scale(1.2)',
        backgroundColor:'#4064a8'
      })),
      
      transition('rest => hover',animate('400ms ease-in')),
      transition('hover => rest',animate('200ms ease-out')),
      transition('hover => press',animate('400ms ease-in')),
      transition('press => rest',animate('200ms ease-out')),
    ])
  ]
})
export class MouseComponent {

  cuurentState:string='reset';
  setState(state:string){
    this.cuurentState = state;
  }
}
