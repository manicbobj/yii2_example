import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomePage} from "./pages/home/home.page";
import {SharedModule} from "../../shared/shared.module";
import {LoginPage} from "./pages/login/login.page";
import {RegisterPage} from "./pages/register/register.page";
import {FormsModule} from "@angular/forms";


const routes: Routes = [
  { path: '',   component: HomePage },
  { path: 'login',   component: LoginPage },
  { path: 'register',   component: RegisterPage },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
        routes,
        // { enableTracing: true } // <-- debugging purposes only
    ),
    SharedModule,
    FormsModule
  ],
  declarations: [HomePage, LoginPage, RegisterPage]
})
export class HomeModule { }
