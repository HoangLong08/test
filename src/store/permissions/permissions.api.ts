import { instanceAxios } from '@/config/axios';
import { ParameterGet } from '@/config/constant';
import { cleanAndSerializeQueryParams } from '@/utils/cleanAndSerializeQueryParams';
import omit from 'lodash/omit';
import {
  GetPermissionsResponse,
  ParameterPostPermissions,
  ParameterPutPermissions,
} from './permissions.type';

const permissions = {
  getPermissions(params: ParameterGet): Promise<GetPermissionsResponse> {
    const newParams = cleanAndSerializeQueryParams(params);
    const url = `/app-permissions?${newParams}`;
    return instanceAxios.get(url);
  },

  postGroupPermissions(params: ParameterPostPermissions): Promise<GetPermissionsResponse> {
    const url = `/app-permissions`;
    return instanceAxios.post(url, params);
  },

  getPermissionById(id: string): Promise<any> {
    const url = `/app-permissions/${id}`;
    return instanceAxios.get(url);
  },

  putGroupPermissions(params: ParameterPutPermissions): Promise<GetPermissionsResponse> {
    const url = `/app-permissions/${params.id}`;
    return instanceAxios.put(url, omit(params, 'id'));
  },

  deleteGroupPermissions(id: string): Promise<any> {
    const url = `/app-permissions/${id}`;
    return instanceAxios.delete(url);
  },
};

export default permissions;
