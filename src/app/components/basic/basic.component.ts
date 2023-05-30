import { Component } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styles: [
  ]
})
export class BasicComponent {
  switchState: string = 'original';
  setState(state: string){
    this.switchState = state;
    console.log(state);
  }
}
