import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './components/landing-page.component';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { FooterModule } from '../../common/footer/footer.module';
import { AssetsModule } from '../../common/assets/assets.module';
import { EmojiModule } from '../../common/emoji/emoji.module';

@NgModule({
  imports: [CommonModule, LandingPageRoutingModule, FooterModule, AssetsModule, EmojiModule],
  declarations: [LandingPageComponent],
})
export class LandingPageModule {
}
