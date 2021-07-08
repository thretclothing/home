import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer.component';
import { AssetsModule } from '../assets/assets.module';

@NgModule({
  imports: [CommonModule, AssetsModule],
  declarations: [FooterComponent],
  exports: [FooterComponent]
})
export class FooterModule {
}
