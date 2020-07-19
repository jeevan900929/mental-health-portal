import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PsychiatricComponent } from './components/content/psychiatric/psychiatric.component';
import { CounsellingComponent } from './components/content/counselling/counselling.component';
import { SportsComponent } from './components/content/sports/sports.component';
import { YogaComponent } from './components/content/yoga/yoga.component';
import { MeditationComponent } from './components/content/meditation/meditation.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'content', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'content',
    children: [
      {
        path: 'psychiatric',
        component: PsychiatricComponent
      },
      {
        path: 'counselling',
        component: CounsellingComponent
      },
      {
        path: 'sports',
        component: SportsComponent
      },
      {
        path: 'yoga',
        component: YogaComponent
      },
      {
        path: 'meditation',
        component: MeditationComponent
      }
    ]
  },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
