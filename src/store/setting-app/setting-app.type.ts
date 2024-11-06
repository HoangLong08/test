import { MetaPagination } from '@/config/constant';
import { AxiosResponse } from 'axios';

export type ItemHistoryActivity = {
  id: string;
  createdAt: string;
  updatedAt: string;
  actionType: string;
  image: string;
  message: string;
  content: string;
  byUserId: string;
};

export type GetListHistoryActivityResponse = AxiosResponse<{
  statusCode: number;
  data: ItemHistoryActivity[];
  meta: MetaPagination;
}>;

export type ItemTheme = {
  id: string;
  createdAt: string;
  updatedAt: string;
  backgroundColor: string;
  textColor: string;
};

export type SettingAppState = {
  isFullScreenEditor: boolean;
  isCollapsedSidebarAdmin: boolean;
  listHistoryActivity: {
    data: ItemHistoryActivity[];
    meta: MetaPagination;
    load: boolean;
    error: string;
  };
  vietcombank: {
    load: boolean;
    data: number;
    error: string;
  };

  theme: {
    load: boolean;
    data: ItemTheme;
    error: string;
  };
};
