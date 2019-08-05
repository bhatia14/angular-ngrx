import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IUser } from '../../models/user.interface';
import { GetUsers } from 'src/app/store/actions/user.actions';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input()
  users: IUser[];
  @Output()
  userSelected: EventEmitter<number> = new EventEmitter();

  constructor(private _store: Store<IAppState>, private _router: Router) {}

  ngOnInit() {
    this._store.dispatch(new GetUsers());
  }

  navigateToUser(id: number) {
    //this.userSelected.emit(id);
    this._router.navigate(['user', id]);
  }
}
