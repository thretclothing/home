import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'assets'})
export class AssetsPipe implements PipeTransform {

  transform(assetName: string, ...depth: string[]): string {
    return 'assets' + this.getAssetLocator(depth) + assetName;
  }

  private getAssetLocator(depth: string[]): string {
    return depth.length > 0 ? '/' + depth.join('/') + '/' : '/';
  }
}
