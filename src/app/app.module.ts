import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PsychiatricComponent } from './components/content/psychiatric/psychiatric.component';
import { CounsellingComponent } from './components/content/counselling/counselling.component';
import { SportsComponent } from './components/content/sports/sports.component';
import { YogaComponent } from './components/content/yoga/yoga.component';
import { MeditationComponent } from './components/content/meditation/meditation.component';

import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    PsychiatricComponent,
    CounsellingComponent,
    SportsComponent,
    YogaComponent,
    MeditationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenubarModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
