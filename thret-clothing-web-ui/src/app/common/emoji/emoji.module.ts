import { NgModule } from '@angular/core';
import { EmojiDirective } from './directives/emoji.directive';

@NgModule({
  declarations: [EmojiDirective],
  exports: [EmojiDirective]
})
export class EmojiModule {
}
