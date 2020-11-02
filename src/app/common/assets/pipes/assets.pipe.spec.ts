import { AssetsPipe } from './assets.pipe';

describe('AssetsPipe', () => {

  let assetsPipe: AssetsPipe;

  beforeEach(() =>
    assetsPipe = new AssetsPipe());

  describe('when only supplied an asset name', () =>
    it('should return the appropriate location for that asset', () =>
      expect(assetsPipe.transform('assetPipe.txt')).toEqual('assets/assetPipe.txt')));

  describe('when supplied an asset name and an array of depths', () =>
    it('should return the appropriate location for that asset', () =>
      expect(assetsPipe.transform('assetPipe.txt', 'text', 'depths')).toEqual('assets/text/depths/assetPipe.txt')));

});
