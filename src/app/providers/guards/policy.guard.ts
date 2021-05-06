import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from '@angular/router';
import { RouteClimberService } from '../services/route-climber.service';
import { isSupportedPolicy } from '../../pages/policies/interfaces/policy';

@Injectable()
export class PolicyGuard implements CanActivate {

  constructor(private _router: Router,
              private _routeClimberService: RouteClimberService) {
  }

  canActivate(route: ActivatedRouteSnapshot): boolean | UrlTree {
    return isSupportedPolicy(this._routeClimberService.findParam(route, 'policy')) || this._router.parseUrl('/');
  }
}
