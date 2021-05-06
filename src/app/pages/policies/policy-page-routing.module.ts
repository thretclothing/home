import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PolicyPageComponent } from './components/policy-page.component';

@NgModule({
  imports: [RouterModule.forChild([{
    path: '',
    component: PolicyPageComponent
  }])],
  exports: [RouterModule]
})
export class PolicyPageRoutingModule {
}
