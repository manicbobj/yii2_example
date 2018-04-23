import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CollapseModule } from 'ngx-bootstrap';
import { IsotopeModule } from 'ngx-isotope';

import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { RestAPIService } from "./shared/service/RestAPI/restapi.service";

import { ErrorPage } from "./shared/pages/error/error.page";
import { StorageService } from "./shared/service/storage/storage.service";
import { Ng2Webstorage } from "ngx-webstorage";


const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home',   loadChildren: './modules/home/home.module#HomeModule'},
    { path: 'skills',   loadChildren: './modules/skills/skills.module#SkillsModule', },
    { path: 'error/:error_code',   component: ErrorPage, pathMatch: 'full'},
    { path: '**',   redirectTo: 'error/404'},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ErrorPage
  ],
  imports: [
    BrowserModule,
    CollapseModule,
    HttpClientModule,
    IsotopeModule,
    Ng2Webstorage,
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
    )
 
  ],
  providers: [RestAPIService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
