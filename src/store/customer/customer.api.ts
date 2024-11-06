import { cleanAndSerializeQueryParams } from '@/utils/cleanAndSerializeQueryParams';
import { instanceAxios } from '@/config/axios';
import {
  ParamGetCustomer,
  GetCustomerResponse,
  ParamPostCustomer,
  PostCustomerResponse,
  ParamPutCustomer,
  PutCustomerResponse,
  GetDetailCustomerResponse,
  DeleteCustomerResponse,
} from './customer.type';

const customer = {
  postCustomer({ name, image, description }: ParamPostCustomer): Promise<PostCustomerResponse> {
    const url = '/customers';
    return instanceAxios.post(url, {
      name,
      image,
      description,
    });
  },

  putCustomer({ name, image, description, id }: ParamPutCustomer): Promise<PutCustomerResponse> {
    const url = `/customers/${id}`;
    return instanceAxios.put(url, {
      name,
      image,
      description,
    });
  },

  getCustomer(params: ParamGetCustomer): Promise<GetCustomerResponse> {
    const newParams = cleanAndSerializeQueryParams(params);
    const url = '/customers?';
    return instanceAxios.get(url + newParams);
  },

  getDetailCustomer(id: string): Promise<GetDetailCustomerResponse> {
    const url = `/customers/${id}`;
    return instanceAxios.get(url);
  },

  deleteCustomer(id: string): Promise<DeleteCustomerResponse> {
    const url = `/customers/${id}`;
    return instanceAxios.delete(url);
  },
};

export default customer;
