import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forRoot([{
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./pages/landing/landing-page.module').then(m => m.LandingPageModule)
    }, {
        path: '**',
        redirectTo: ''
    }], {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
