import { ItemNational } from '@/store/logistics/logistics.type';

export const filterNationalById = (id: string, arr: ItemNational[]) =>
  arr.find((item) => item.id === id);
