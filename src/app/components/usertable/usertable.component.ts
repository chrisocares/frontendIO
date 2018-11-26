import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';
import { User } from '../../models/user.model';

@Component({
  selector: 'usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {
  dataSource = new UserDataSource(this.userService);
  dataSource2 = new UserDataSource(this.userService);
  displayedColumns = ['FILA','LP1M1','LP1M2','LP1M3','LP2M1','LP2M2','LP2M3','LP3M1','LP3M2','LP3M3','OBJETIVO'/*,
  'LP1M1','CP1M2','CP1M3','CP2M1','CP2M2','CP2M3','CP3M1','CP3M2','CP3M3',
  'CAP1M1','CAP1M2','CAP1M3','CAP2M1','CAP2M2','CAP2M3','CAP3M1','CAP3M2','CAP3M3',
  'L2AP1M1','L2AP1M2','L2AP1M3','L2AP2M1','L2AP2M2','L2AP2M3','L2AP3M1','L2AP3M2','L2AP3M3'*/

];

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}

export class UserDataSource extends DataSource<any> {

  constructor(private userService: UserService) {
    super();
  }

  connect(): Observable<User[]> {
    return this.userService.getUser();
  }

  disconnect() {}
}
