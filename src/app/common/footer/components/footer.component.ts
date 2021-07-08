import { Component } from '@angular/core';
import { FooterSocialLink } from '../interfaces/footer-social-link';
import { DateService } from '../../../providers/date.service';

@Component({
  selector: 'thret-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.scss']
})
export class FooterComponent {

  readonly SOCIAL_LINKS: FooterSocialLink[] = [{
    location: 'https://instagram.com/thretclothing',
    serviceName: 'Instagram'
  }, {
    location: 'https://github.com/thretclothing',
    serviceName: 'GitHub'
  }, {
    location: 'https://facebook.com/thretclothing',
    serviceName: 'Facebook'
  }, {
    location: 'https://twitter.com/thretclothing',
    serviceName: 'Twitter'
  }];

  constructor(private _dateService: DateService) {
  }

  getCopyrightYear(): number {
    return this._dateService.getCurrentYear();
  }
}
