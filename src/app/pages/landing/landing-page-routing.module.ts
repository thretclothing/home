import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page.component';

@NgModule({
  imports: [RouterModule.forChild([{
    path: '',
    component: LandingPageComponent
  }])],
  exports: [RouterModule]
})
export class LandingPageRoutingModule {
}
