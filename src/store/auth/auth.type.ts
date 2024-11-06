import { AxiosResponse } from 'axios';

export interface FormAddressType {
  fullName: string;
  email: string;
  nationalId: string;
  phoneNumber: string;
  city: string;
  district: string;
  wards: string;
  street: string;
  zipCode: string;
  state?: string;
}

export interface ProfileAccountModel {
  firstName: string;
  lastName: string;
  avatar?: string;
  national?: {
    id: string;
    zipCode: string;
    name: string;
  };
  phoneNumber: string;
}

export interface GetAddressUserResponse {
  id: string;
  fullName: string;
  nationalId: string;
  city: string;
  district: string;
  wards: string;
  street: string;
  phoneNumber: string;
  zipCode: string;
  isDefault?: boolean;
  state?: string;
  email?: string;
}

export interface PostAddressUserResponse extends Omit<GetAddressUserResponse, 'id'> {}

export type ParamLogin = {
  email: string;
  password: string;
  type?: string;
};

export type ParamRegister = {
  gender: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  languageCode: string;
};

export type LoginResponse = AxiosResponse<{
  data: {
    token: {
      expiresIn: number;
      accessToken: string;
      refreshToken: string;
    };
    user: {
      id: string;
      createdAt: string;
      updatedAt: string;
      deletedAt: string | null;
      role: string;
      email: string;
      firstName: string | null;
      lastName: string | null;
      avatar: string;
      phoneNumber: string;
    };
  };
  error?: string;
}>;

export interface AuthState {
  user: {
    id: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    role: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    avatar: string;
    phoneNumber: string;
    permission: {
      id: string;
      createdAt: string;
      updatedAt: string;
      deletedAt: string;
      groupName: string;
      permission: string[];
      users: string[];
    };
  };
  token: {
    expiresIn: number;
    accessToken: string;
    refreshToken: string;
  };
  error: string;
  loading: boolean;
  isModalAuthVisible: boolean;
  myAddress: {
    loading: boolean;
    data: GetAddressUserResponse[];
  };
  myDetailAddress: {
    loading: boolean;
    data: GetAddressUserResponse;
  };
  infoOrderPayment: {
    infoAddress: FormAddressType;
    infoShipping: any;
  };
  typeLogin: string;
}

export interface ResetPasswordModel {
  email: string;
  newPassword: string;
  oldPassword: string;
  languageCode: string;
}

export type TokenPayloadAction = { expiresIn: number; accessToken: string; refreshToken: string };

export type UserPayloadAction = {
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  role: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  avatar: string;
  phoneNumber: string;
  permission: {
    id: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
    groupName: string;
    permission: string[];
    users: string[];
  };
};

export interface ResetPasswordWithToken {
  newPassword: string;
  token: string;
  languageCode: string;
}

export interface UpdateProfile {
  address?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  avatar?: string;
  phoneNumber?: string | null;
  provinces?: string;
  districts?: string;
  ward?: string;
}

export interface ParamLoginWithSocial {
  gender: string;
  socialToken: string;
  fullName: string;
  email: string;
  avatar: string;
}
