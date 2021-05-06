import { Component } from '@angular/core';
import { FooterSocialLink } from '../interfaces/footer-social-link';
import { faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { DateService } from '../../../providers/services/date.service';

@Component({
  selector: 'thret-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.scss']
})
export class FooterComponent {

  readonly SOCIAL_LINKS: FooterSocialLink[] = [{
    handle: '@thretclothing',
    icon: faInstagram,
    location: 'https://instagram.com/thretclothing',
    serviceName: 'Instagram'
  }, {
    handle: '/thretclothing',
    icon: faGithub,
    location: 'https://github.com/thretclothing',
    serviceName: 'GitHub'
  }, {
    handle: '/thretclothing',
    icon: faFacebook,
    location: 'https://facebook.com/thretclothing',
    serviceName: 'Facebook'
  }, {
    handle: '@thretclothing',
    icon: faTwitter,
    location: 'https://twitter.com/thretclothing',
    serviceName: 'Twitter'
  }];

  constructor(private _dateService: DateService) {
  }

  getCopyrightYear(): number {
    return this._dateService.getCurrentYear();
  }
}
