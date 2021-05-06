import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PolicyGuard } from './providers/guards/policy.guard';
import { PolicyResolver } from './pages/policies/providers/policy.resolver';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [PolicyGuard, PolicyResolver],
  bootstrap: [AppComponent]
})
export class AppModule {
}
