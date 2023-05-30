import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule}  from '@angular/platform-browser/animations'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AdvancedComponent, BasicComponent, ContainedComponent, HomeComponent, PageNotFoundComponent, AnimBoxComponent, MouseComponent, FadeBlockComponent } from './components';

const animationRoutes:Routes =[
  { 
    path: 'animation-home',
    component:HomeComponent,
    data: {
      animation: {
        value: 'home'
      }
    }
  },
  { 
    path: 'animation-basic',
    component:BasicComponent,
    data: {
      animation: {
        value: 'basic'
      }
    }
  },
  { 
    path: 'animation-advanced',
    component:AdvancedComponent,
    data: {
      animation: {
        value: 'advanced'
      }
    }
  },
  { 
    path: 'animation-contained',
    component:ContainedComponent,
    data: {
      animation: {
        value: 'contained'
      }
    }
  },
  { 
    path: '**',
    redirectTo:'animation-home',
    pathMatch:'full',
    data: {
      animation: {
        value: 'home'
      }
    }
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContainedComponent,
    AdvancedComponent,
    BasicComponent,
    PageNotFoundComponent,
    AnimBoxComponent,
    MouseComponent,
    FadeBlockComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(animationRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
