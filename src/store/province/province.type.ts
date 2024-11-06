export interface ProvinceType {
  name?: string
  code?: number
  division_type?: string
  codename?: string
  phone_code?: number
  districts?: any[]
}
export interface DistrictType {
  name?: string
  code?: number
  division_type?: string
  codename?: string
  province_code?: number
  wards?: any[]
}

export interface WardType {
  name?: string,
  code?: number,
  division_type?: string,
  codename?: string,
  district_code?: number
}

export interface ParamSearch {
  code: number;
}

