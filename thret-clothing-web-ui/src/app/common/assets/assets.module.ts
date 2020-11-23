import { NgModule } from '@angular/core';
import { AssetsPipe } from './pipes/assets.pipe';

@NgModule({
  declarations: [AssetsPipe],
  exports: [AssetsPipe]
})
export class AssetsModule {
}
