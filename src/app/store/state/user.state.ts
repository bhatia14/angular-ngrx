import { IUser } from 'src/app/models/user.interface';

export interface IUserState {
    user: IUser[];
    selectedUser: IUser;
}

export const initialUserState: IUserState ={
    user: null,
    selectedUser: null
}