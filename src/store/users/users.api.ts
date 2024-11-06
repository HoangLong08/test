import { instanceAxios } from '@/config/axios';
import { cleanAndSerializeQueryParams } from '@/utils/cleanAndSerializeQueryParams';
import {
  GetDetailUsersResponse,
  GetUsersResponse,
  ParameterGetUser,
  ParameterPost,
} from './users.type';

const baseURL = '/users';
const users = {
  getUsers(params: ParameterGetUser): Promise<GetUsersResponse> {
    const newParams = cleanAndSerializeQueryParams(params);
    return instanceAxios.get(`${baseURL}?${newParams}`);
  },

  getDetailUserById(id: string): Promise<any> {
    return instanceAxios.get(`${baseURL}/${id}`);
  },

  postUserForSale(params: ParameterPost): Promise<GetDetailUsersResponse> {
    return instanceAxios.post(baseURL, params);
  },

  getAllPermission(): Promise<string[]> {
    return instanceAxios.get(`${baseURL}/permission`);
  },

  getPermissionByUserId(id: string): Promise<GetDetailUsersResponse> {
    const url = `${baseURL}/${id}/permission`;
    return instanceAxios.get(url);
  },

  updatePermissionByUserId(params: {
    id: string;
    permission: string[];
  }): Promise<GetDetailUsersResponse> {
    const url = `${baseURL}/${params.id}/permission`;
    return instanceAxios.put(url, { permission: params.permission });
  },

  resetPasswordByUserId(params: { id: string; newPassword: string }): Promise<any> {
    const url = `${baseURL}/${params.id}/reset-password`;
    return instanceAxios.put(url, { newPassword: params.newPassword });
  },

  deleteUsers(id: string): Promise<any> {
    const url = `${baseURL}/${id}`;
    return instanceAxios.delete(url);
  },
};

export default users;
