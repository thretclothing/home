import { NgModule } from '@angular/core';
import { PolicyPageRoutingModule } from './policy-page-routing.module';
import { PolicyPageComponent } from './components/policy-page.component';
import { PolicyResolver } from './providers/policy.resolver';
import { CommonModule } from '@angular/common';
import { AssetsModule } from '../../common/assets/assets.module';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    PolicyPageRoutingModule,
    CommonModule,
    AssetsModule,
    MarkdownModule.forRoot({loader: HttpClient})
  ],
  exports: [],
  declarations: [PolicyPageComponent],
  providers: [PolicyResolver],
})
export class PolicyPageModule {
}
