import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContentComponent } from './components/content/content.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'content', component: ContentComponent,
    children: [
      {
        path: 'psychiatric',
        component: ContentComponent
      },
      {
        path: 'counselling',
        component: ContentComponent
      },
      {
        path: 'sports',
        component: ContentComponent
      },
      {
        path: 'yoga',
        component: ContentComponent
      },
      {
        path: 'meditation',
        component: ContentComponent
      }
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: '**', redirectTo: '/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
