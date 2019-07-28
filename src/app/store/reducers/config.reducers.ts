import { initialConfigState, IConfigState } from '../state/config.state';
import { ConfigActions, EConfigActions } from '../actions/config.actions';
import { State } from '@ngrx/store';
import { config } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';

export const configReducers = (
    state = initialConfigState,
    action: ConfigActions
): IConfigState => {
    switch(action.type) {
        case EConfigActions.GetConfigSuccess: {
            return {
                ...state, 
                config: action.payload
            }
        }
        default:
            return state;
    }
    
};