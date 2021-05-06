import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Policy, toPolicy } from '../interfaces/policy';

@Injectable()
export class PolicyResolver implements Resolve<Policy> {

  resolve(route: ActivatedRouteSnapshot): Policy {
    return toPolicy(route.paramMap.get('policy')!);
  }
}
