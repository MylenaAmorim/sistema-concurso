import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { FormApplicationComponent } from './features/components/form-application/form-application.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContestService } from './core/services/contest.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderMenuComponent } from './features/components/header-menu/header-menu.component';
import { ListContestsComponent } from './features/components/list-contests/list-contests.component';
import { HomeComponent } from './features/components/home/home.component';
import { HelpListInfosComponent } from './shared/helpers/help-list-infos/help-list-infos.component';


@NgModule({
  declarations: [
    AppComponent,
    FormApplicationComponent,
    HeaderMenuComponent,
    ListContestsComponent,
    HomeComponent,
    HelpListInfosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    ContestService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
