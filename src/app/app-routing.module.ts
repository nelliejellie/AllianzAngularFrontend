import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingscreenComponent } from './landingscreen/landingscreen.component';
import { HomescreenComponent } from './homescreen/homescreen.component';

const routes: Routes = [
  {path:'', redirectTo:'landingscreen', pathMatch:'full'},
  {path:"landingscreen", component: LandingscreenComponent},
  {path:"homescreen", component: HomescreenComponent},
  {path:'**', component: LandingscreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
