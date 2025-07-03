import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { MoreDetailsComponent } from './components/more-details/more-details.component';
import { PersonalAreaComponent } from './components/personal-area/personal-area.component';


export const routes: Routes = [
    
    {
        path: 'home', component: HomePageComponent
    },
    {
        path: 'login', component: LogInComponent
    },
    {
        path: 'register', component: RegisterComponent
    },
    {
        path: 'addrecipe', component: AddRecipeComponent
    },
    {
        path: 'more', component: MoreDetailsComponent
    },
    {
        path: 'personalarea', component: PersonalAreaComponent
    },
    {
        path: '**', component: HomePageComponent
    }
];
