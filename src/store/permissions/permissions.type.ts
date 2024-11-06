import { MetaPagination } from '@/config/constant';
import { AxiosResponse } from 'axios';
import { Roles } from '../users/users.type';

export type ItemPermissions = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  groupName: string;
  permission: string[];
  users?: {
    avatar: string;
    email: string;
    firstName: string;
    id: string;
    lastName: string;
    phoneNumber: string;
    role: Roles;
  }[];
};

export type GetPermissionsResponse = AxiosResponse<{
  statusCode: number;
  data: ItemPermissions[];
  meta: MetaPagination;
}>;

export type GetDetailPermissionsResponse = AxiosResponse<{
  data: ItemPermissions[];
}>;

export type GetPermissionsStateReducer = {
  statusCode: number;
  data: ItemPermissions[];
  meta: MetaPagination;
};

export interface ParameterPostPermissions {
  groupName: string;
  permission: string[];
  userId: string[];
}
export interface ParameterPutPermissions extends Omit<ParameterPostPermissions, 'id'> {
  id: string;
}

export type PermissionsStateReducer = {
  listPermissions: {
    data: ItemPermissions[];
    meta: MetaPagination;
    load: boolean;
    error: string;
  };

  detailPermissions: {
    data: ItemPermissions;
    load: boolean;
    error: string;
  };
};
