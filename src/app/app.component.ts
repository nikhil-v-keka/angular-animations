import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, ViewEncapsulation } from '@angular/core';
import { dissolveAnimation } from './animations/dissolve';
import { slideAnimation } from './animations/slide';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 encapsulation: ViewEncapsulation.None,
 animations:[
   trigger('routerAnimations',[
     transition('* => home',useAnimation(dissolveAnimation)),
     transition('* => *', useAnimation(slideAnimation))
   ])
 ]

})
export class AppComponent {
  title = 'animations';
  prepareRouteTransition(outlet:any) {
    const animation = outlet.activatedRouteData['animation'] || {};
    return animation['value'] || null;
}
}
