import { instanceAxios } from '@/config/axios';
import { ParameterGet } from '@/config/constant';
import { cleanAndSerializeQueryParams } from '@/utils/cleanAndSerializeQueryParams';
import omit from 'lodash/omit';
import {
  GetDetailSubscriptionsResponse,
  GetSubscriptionsResponse,
  ParameterPost,
} from './subscriptions.type';

const baseURL = '/subscriptions';

const subscriptions = {
  getSubscriptions(params: ParameterGet): Promise<GetSubscriptionsResponse> {
    const url = `${baseURL}?${cleanAndSerializeQueryParams(params)}`;
    return instanceAxios.get(url);
  },

  postSubscriptions(params: ParameterPost): Promise<GetSubscriptionsResponse> {
    const url = `${baseURL}/${params.languageCode}/language-code`;
    return instanceAxios.post(url, omit(params, 'languageCode'));
  },

  getDetailSubscriptionsById(id: string): Promise<GetDetailSubscriptionsResponse> {
    const url = `${baseURL}/${id}`;
    return instanceAxios.get(url);
  },

  deleteSubscriptions(id: string): Promise<any> {
    const url = `${baseURL}/${id}`;
    return instanceAxios.delete(url);
  },

  patchMultiDelete(ids: string[]): Promise<any> {
    const url = `${baseURL}/multiple-delete`;
    return instanceAxios.patch(url, { subscriptionIds: ids });
  },

  deleteUnSubscriptionsByEmail({
    email,
    languageCode,
  }: {
    email: string;
    languageCode: string;
  }): Promise<any> {
    const url = `${baseURL}/${languageCode}/language-code/${email}/un-subscription`;
    return instanceAxios.delete(url);
  },
};

export default subscriptions;
