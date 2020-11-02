import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AssetsModule } from '../assets/assets.module';
import { EmojiModule } from '../emoji/emoji.module';

@NgModule({
  imports: [CommonModule, FontAwesomeModule, AssetsModule, EmojiModule],
  declarations: [FooterComponent],
  exports: [FooterComponent]
})
export class FooterModule {
}
