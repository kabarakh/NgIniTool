import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './Organisms/Main/main.component';
import { GroupListComponent } from './Molecules/group-list/group-list.component';
import { EncounterListComponent } from './Molecules/encounter-list/encounter-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    GroupListComponent,
    EncounterListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
