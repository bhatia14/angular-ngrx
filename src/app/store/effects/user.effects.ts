import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { GetUser, GetUserSuccess, EUserActions, GetUsersSuccess } from '../actions/user.actions';
import { UserService } from 'src/app/services/user.service';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { IUserHttp } from 'src/app/models/http-models/user-http.interface';
import { selectUserList } from '../selectors/user.selectors';

@Injectable()
export class UserEffects {
  @Effect()
  getUser$ = this._actions$.pipe(
    ofType<GetUser>(EUserActions.GetUser),
    map(action => action.payload),
    withLatestFrom(this._store.pipe(select(selectUserList))),
    switchMap(([id, users]) => {
      const selectedUser = users.filter(user => user.id === +id)[0];
      return of(new GetUserSuccess(selectedUser));
    })
  );

  getUsers$ = this._actions$.pipe(
   ofType<GetUser>(EUserActions.GetUser),
   switchMap(() => this._userService.getUsers()),
   switchMap((userHttp: IUserHttp) => of(new GetUsersSuccess(userHttp.users)))
  );

  constructor(
    private _userService: UserService, 
    private _actions$: Actions, 
    private _store: Store<IAppState>
    ){}
}