import axios from 'axios';
import { DistrictType, ParamSearch, ProvinceType, WardType } from './province.type';

const baseURL = 'https://province.pnlsoftware.com.vn/api/';
const axiosProvince = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const province = {
  getAllProvince(): Promise<ProvinceType[]> {
    return axiosProvince.get(`/provinces`);
  },
  getDistrictsById(params: ParamSearch): Promise<DistrictType> {
    return axiosProvince.get(`/provinces/districts/${params.code}/city`);
  },
  getWardsById(params: ParamSearch): Promise<WardType> {
    return axiosProvince.get(`/provinces/streets/${params.code}/districts`);
  },
};
export default province;
