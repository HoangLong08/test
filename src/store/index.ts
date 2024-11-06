import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import authSlice from './auth/auth.reducer';
import uploadSlice from './upload/upload.reducer';
import customerSlice from './customer/customer.reducer';
import notificationSlice from './notification/notification.reducer';
import settingAppSlice from './setting-app/setting-app.reducer';
import { AuthState } from './auth/auth.type';
import orderSlice from './order/order.reducer';
import { OrderState } from './order/order.type';
import faqsSlice from './faqs/faqs.reducer';
import aboutUsStoreLocationSlice from './about-us-store-location/about-us-store-location.reducer';
import businessInfoSlice from './business-info/business-info.reducer';
import catalogsSlice from './catalogs/catalogs.reducer';
import sizesSlice from './sizes/sizes.reducer';
import fabricsSlice from './fabrics/fabrics.reducer';
import tagsSlice from './tags/tags.reducer';
import productsSlice from './products/products.reducer';
import productReviewSlice from './product-review/product-review.reducer';
import logisticsSlice from './logistics/logistics.reducer';
import contactUsSlice from './contact-us/contact-us.reducer';
import { BusinessInfoState } from './business-info/business-info.type';
import favoritesSlice from './favorites/favorites.reducer';
import provinceSlice from './province/province.reducer';
import subscriptionsSlice from './subscriptions/subscriptions.reducer';
import userSlice from './users/users.reducer';
import madeToMeasuresSlice from './made-to-measures/made-to-measures.reducer';
import dashboardSlice from './dashboard/dashboard.reducer';
import reportSlice from './report/report.reducer';
import appMailerSlice from './app-mailer/app-mailer.reducer';
import permissionsSlice from './permissions/permissions.reducer';
import socketSlice from './socket/socket.reducer';
import couponSlice from './coupon/coupon.reducer';
import socialLinksSlice from './social-links/social-links.reducer';

export function createPersistStore() {
  const isServer = typeof window === 'undefined';
  if (isServer) {
    return {
      getItem() {
        return Promise.resolve(null);
      },
      setItem() {
        return Promise.resolve();
      },
      removeItem() {
        return Promise.resolve();
      },
    };
  }
  return createWebStorage('local');
}

const storage = typeof window !== 'undefined' ? createWebStorage('local') : createPersistStore();

const authPersistConfig = {
  key: 'auth-yaly',
  storage,
  whitelist: ['token', 'user', 'typeLogin'],
};

const shoppingCartSlicePersistConfig = {
  key: 'shopping-cart-yaly',
  storage,
  whitelist: ['shoppingCart'],
};

const businessInfoSlicePersistConfig = {
  key: 'promotion-yaly',
  storage,
  whitelist: ['promotion'],
};

export const store = configureStore({
  reducer: {
    authSlice: persistReducer<AuthState>(authPersistConfig, authSlice),
    orderSlice: persistReducer<OrderState>(shoppingCartSlicePersistConfig, orderSlice),
    businessInfoSlice: persistReducer<BusinessInfoState>(
      businessInfoSlicePersistConfig,
      businessInfoSlice
    ),
    settingAppSlice,
    customerSlice,
    uploadSlice,
    notificationSlice,
    faqsSlice,
    aboutUsStoreLocationSlice,
    catalogsSlice,
    fabricsSlice,
    sizesSlice,
    tagsSlice,
    productsSlice,
    productReviewSlice,
    logisticsSlice,
    contactUsSlice,
    favoritesSlice,
    provinceSlice,
    subscriptionsSlice,
    userSlice,
    madeToMeasuresSlice,
    dashboardSlice,
    reportSlice,
    appMailerSlice,
    permissionsSlice,
    socketSlice,
    couponSlice,
    socialLinksSlice,
  },
  devTools: process.env.NEXT_PUBLIC_NODE_ENV === 'development',
  middleware: (gDM) =>
    gDM({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
