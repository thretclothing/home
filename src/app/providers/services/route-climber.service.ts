import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({providedIn: 'root'})
export class RouteClimberService {

  findData<T>(route: ActivatedRouteSnapshot | ActivatedRoute, dataKey: string): T;
  findData<T>(route: ActivatedRouteSnapshot | ActivatedRoute, dataKey: string, optional?: true): T | undefined {
    const data = this.recursivelyFindData<T>(this.getActivatedRoute(route), dataKey);
    if (data !== undefined || optional) {
      return data;
    }
    throw new Error(`Expected data key: ${dataKey} to be present, but none was found in the route`);
  }

  findParam(route: ActivatedRouteSnapshot | ActivatedRoute, paramKey: string): string;
  findParam(route: ActivatedRouteSnapshot | ActivatedRoute, paramKey: string, optional?: true): string | undefined {
    const param = this.recursivelyFindParam(this.getActivatedRoute(route), paramKey);
    if (param !== undefined || optional) {
      return param;
    }
    throw new Error(`Expected param key: ${paramKey} to be present, but none was found in the route`);
  }

  private recursivelyFindParam(route: ActivatedRouteSnapshot | null, paramKey: string): string | undefined {
    if (route === null) {
      return undefined;
    }
    return route.params[paramKey] || this.recursivelyFindParam(route.parent, paramKey);
  }

  private recursivelyFindData<T>(route: ActivatedRouteSnapshot | null, dataKey: string): T | undefined {
    if (route === null) {
      return undefined;
    }
    return route.data[dataKey] || this.recursivelyFindData<T>(route.parent, dataKey);
  }

  private getActivatedRoute(route: ActivatedRouteSnapshot | ActivatedRoute): ActivatedRouteSnapshot {
    return route instanceof ActivatedRouteSnapshot ? route : route.snapshot;
  }
}
