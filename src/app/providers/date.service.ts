import { Injectable } from '@angular/core';
import { DateTime } from 'luxon';

@Injectable({providedIn: 'root'})
export class DateService {

  getCurrentYear(): number {
    return DateTime.local().year;
  }
}
