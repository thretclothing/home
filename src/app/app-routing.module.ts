import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PolicyGuard } from './providers/guards/policy.guard';
import { PolicyResolver } from './pages/policies/providers/policy.resolver';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./pages/landing/landing-page.module').then(m => m.LandingPageModule)
      }, {
        path: 'policies/:policy',
        pathMatch: 'full',
        canActivate: [PolicyGuard],
        resolve: {
          policy: PolicyResolver
        },
        loadChildren: () => import('./pages/policies/policy-page.module').then(m => m.PolicyPageModule)
      }, {
        path: '**',
        redirectTo: ''
      }
    ], {
      initialNavigation: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
