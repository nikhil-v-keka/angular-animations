import { animate, animation, style } from "@angular/animations";

export var dissolveAnimation = animation([
    style({
        opacity:0,
    }),
    animate('2s ease-out',style({
        opacity:1,
    }))
])