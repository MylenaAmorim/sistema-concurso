import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormApplicationComponent } from './features/components/form-application/form-application.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'concurso', component: FormApplicationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
