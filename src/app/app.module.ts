import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {DataTableModule} from "angular-6-datatable";


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { PmComponent } from './pm/pm.component';

import {AuthInterceptor, httpInterceptorProviders} from './auth/auth-interceptor';
import { IngredientsComponent } from './ingredients/ingredients.component';
import {IngrédientsService} from './services/ingrédients.service'
import { RecipeComponent } from './recipe/recipe.component';
import {RecipeService} from  './services/recipe.service';
import  {PictureService} from  './services/picture.service';
import  {PictureRecipeService} from './services/picture-recipe.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { FrigoComponent } from './frigo/frigo.component';
import {FrigoService} from  './services/frigo.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    PmComponent,
    IngredientsComponent,
    RecipeComponent,
    RecipeDetailComponent,
    FrigoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataTableModule

  ],
  providers: [ httpInterceptorProviders,IngrédientsService,PictureService,PictureRecipeService,FrigoService ,RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
