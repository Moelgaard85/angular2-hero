import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { HeroMasterComponent } from './heroes/hero-master/hero-master.component';

import { HeroService } from './heroes/hero.service';

@NgModule({
  imports: [
  BrowserModule,
  FormsModule,
  HttpModule
  ],
  declarations: [
  AppComponent,
  HeroDetailComponent,
  HeroMasterComponent
  ],
  providers: [
  HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
