import { Component, OnInit } from '@angular/core';
import { RouteClimberService } from '../../../providers/services/route-climber.service';
import { Policy } from '../interfaces/policy';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'thret-policy-page',
  templateUrl: 'policy-page.component.html',
  styleUrls: ['policy-page.component.scss']
})
export class PolicyPageComponent implements OnInit {

  policy!: Policy;
  loaded = false;

  constructor(private _activatedRoute: ActivatedRoute,
              private _routeClimberService: RouteClimberService) {
  }

  ngOnInit(): void {
    this.policy = this._routeClimberService.findData(this._activatedRoute, 'policy');
  }

  onPolicyLoad(): void {
    this.loaded = true;
  }

  onPolicyLoadError(): void {
  }
}
