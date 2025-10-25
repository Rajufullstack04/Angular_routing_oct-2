import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CoutmorsComponent } from './coutmors/coutmors.component';
import { CoustmorsDitaliesComponent } from './coutmors/coustmors-ditalies/coustmors-ditalies.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { authGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { exitGuard } from './exit.guard';


const routes:Routes =[
   {
    path:'',
    redirectTo : 'home',
    pathMatch : 'full'
  },
  {
    path:'home',
    component : HomeComponent,
  },
   {
    path:'aboutus',
    component : AboutusComponent,
  },
   {
    path:'Coustmars',
    component : CoutmorsComponent,
  },
   {
    path:'login',
    component : LoginComponent,
  },
  // handal  based on the params ----------------------------------
 
  {
    path:'costmor-list/:coustmorId',      
    component : CoustmorsDitaliesComponent,
    canActivate:[authGuard],
    canDeactivate:[exitGuard]

  },
  // handal  based on the quearyparams ------- handal  based on the fragment also-------------
//  {
//     path:'costmor-list',      
//     component : CoustmorsDitaliesComponent,

//   },

   {
    path:'**',
    component : NotfoundComponent,
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    CoutmorsComponent,
    CoustmorsDitaliesComponent,
    NotfoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,FormsModule, RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
