import { FooterComponent } from './footer.component';
import { DateService } from '../../../providers/services/date.service';

describe('FooterComponent', () => {

  let mockDateService: jasmine.SpyObj<DateService>;

  let footerComponent: FooterComponent;

  beforeEach(() => {
    mockDateService = jasmine.createSpyObj('DateService', ['getCurrentYear']);
    mockDateService.getCurrentYear.and.returnValue(2020);
    footerComponent = new FooterComponent(mockDateService);
  });

  describe('when asked to get the copyright year', () =>
    it('should ask the DateService to provide the current year', () =>
      expect(footerComponent.getCopyrightYear()).toEqual(2020)));

});
