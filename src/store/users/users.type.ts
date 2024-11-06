import { MetaPagination, ParameterGet } from '@/config/constant';
import { AxiosResponse } from 'axios';

// eslint-disable-next-line no-shadow
export enum Roles {
  USER = 'USER',
  STAFF = 'STAFF',
  ADMIN = 'ADMIN',
}

// eslint-disable-next-line no-shadow
export enum Permissions {
  'READ_PRODUCT',
  'EDIT_PRODUCT',
  'DELETE_PRODUCT',
  'READ_ABOUT_US',
  'EDIT_ABOUT_US',
  'DELETE_ABOUT_US',
  'READ_FAQs',
  'EDIT_FAQs',
  'DELETE_FAQs',
}

export type ItemUser = {
  id: string;
  createdAt: string;
  role: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
  gender: string;
  staffCode?: string;
};

export type GetUsersResponse = AxiosResponse<{
  statusCode: number;
  data: ItemUser[];
  meta: MetaPagination;
}>;

export type GetDetailUsersResponse = AxiosResponse<{
  data: ItemUser;
}>;

export interface ParameterGetUser extends ParameterGet {
  role?: Roles;
}
export interface ParameterPost {
  gender: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  staffCode: string;
}

export type UsersStateReducer = {
  listUsers: {
    data: ItemUser[];
    meta: MetaPagination;
    load: boolean;
    error: string;
  };

  detailUser: {
    data: ItemUser;
    load: boolean;
    error: string;
  };

  listPermission: {
    data: string[];
    load: boolean;
    error: string;
  };

  detailPermissionUser: {
    data: ItemUser;
    load: boolean;
    error: string;
  };
};
