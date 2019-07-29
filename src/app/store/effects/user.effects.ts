import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { IAppState } from '../state/app.state';
import { Store } from '@ngrx/store';
import { UserService } from 'src/app/services/user.service';

@Injectable()
export class UserEffects {
    @Effect()
    getUser$ = this._actions$.pipe(

    )

    constructor(private _userService: UserService, private _action$: Actions, private _store: Store<IAppState>){}
}