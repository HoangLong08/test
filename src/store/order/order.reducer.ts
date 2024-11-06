import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { MetaPagination } from '@/config/constant';
import {
  HistoryOrders,
  OrderState,
  ShoppingCartItemDetail,
  ShoppingCartType,
  TrackingOrder,
} from './order.type';
import {
  getAllOrderByAdminAction,
  getDetailOrderByAdminAction,
  getHistoryOrderAction,
  getOrderMyBagAction,
  getOrdersAction,
  getTrackingOrderAction,
  postOrderMyBagAddItemAction,
  postOrderMyBagAddItemsAction,
  postSynchronizeWithMyBagAction,
} from './order.action';

const initialState: OrderState = {
  shoppingCart: {
    data: {} as ShoppingCartType,
    type: '', // add thì mới hiển thị notifications popover  còn lại thì k hiển thị
    amountCart: {},
    weight: {
      // trọng lượng bao gồm những sản phẩm có giá và không có giá (là vải đặc biệt)
      price: 0,
      noPrice: 0,
    },
    coupon: {
      code: '',
      title: {},
      description: {},
      discountPresent: 0,
      isDiscountPresent: false,
      startDate: '',
      endDate: '',
      activationLimit: 0,
    },
  },

  listHistoryOrder: {
    data: [] as HistoryOrders[],
    meta: {} as MetaPagination,
    load: false,
    error: '',
  },

  listTrackingOrder: {
    data: [] as HistoryOrders[],
    meta: {} as MetaPagination,
    load: false,
    error: '',
  },

  listOrderByAdmin: {
    data: [] as HistoryOrders[],
    meta: {} as MetaPagination,
    load: false,
    error: '',
  },

  trackingOrder: {
    data: {} as TrackingOrder,
    load: false,
    error: '',
  },

  getDetailOrderByAdmin: {
    data: {} as HistoryOrders,
    error: '',
    load: false,
  },

  detailOrder: {
    data: {} as HistoryOrders,
    error: '',
    load: false,
  },

  commentOrder: '',
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addShoppingCart: (state, action) => {
      let updatedItems: ShoppingCartItemDetail[] = [];
      // sản phẩm có giá
      if (action.payload.amount && action.payload.tien) {
        const existingItems = state.shoppingCart.data.payInAdvance?.detail || [];

        if (existingItems.length === 0) {
          updatedItems = [...existingItems, action.payload];
        } else {
          const existingItemIndex = existingItems.findIndex(
            (item) =>
              item.productId === action.payload.productId &&
              item.size === action.payload.size &&
              item.fabricCode === action.payload.fabricCode
          );

          if (existingItemIndex === -1) {
            updatedItems = [...existingItems, action.payload];
          } else {
            updatedItems = existingItems.map((item) => {
              if (
                item.productId === action.payload.productId &&
                item.size === action.payload.size &&
                item.fabricCode === action.payload.fabricCode
              ) {
                return {
                  ...item,
                  quantity: item.quantity + action.payload.quantity,
                };
              }
              return item;
            });
          }
        }
        // eslint-disable-next-line no-param-reassign
        state.shoppingCart.data = {
          ...state.shoppingCart.data,
          payInAdvance: {
            ...state.shoppingCart.data.payInAdvance,
            detail: updatedItems,
          },
        };
      } else {
        const existingItems = state.shoppingCart.data.payingLater?.detail || [];

        if (existingItems.length === 0) {
          updatedItems = [...existingItems, action.payload];
        } else {
          const existingItemIndex = existingItems.findIndex(
            (item) =>
              item.productId === action.payload.productId &&
              item.size === action.payload.size &&
              item.fabricCode === action.payload.fabricCode
          );

          if (existingItemIndex === -1) {
            updatedItems = [...existingItems, action.payload];
          } else {
            updatedItems = existingItems.map((item) => {
              if (
                item.productId === action.payload.productId &&
                item.size === action.payload.size &&
                item.fabricCode === action.payload.fabricCode
              ) {
                return {
                  ...item,
                  quantity: item.quantity + action.payload.quantity,
                };
              }
              return item;
            });
          }
        }
        // eslint-disable-next-line no-param-reassign
        state.shoppingCart.data = {
          ...state.shoppingCart.data,
          payingLater: {
            ...state.shoppingCart.data.payingLater,
            detail: updatedItems,
          },
        };
      }
    },

    incrementShoppingCart: (state, action) => ({
      ...state,
      shoppingCart: {
        ...state.shoppingCart,
        data: {
          payInAdvance: {
            ...state.shoppingCart.data?.payInAdvance,
            detail: state.shoppingCart.data?.payInAdvance?.detail?.map((item) => {
              if (item.id === action.payload) {
                return {
                  ...item,
                  quantity: (item.quantity as number) + 1,
                };
              }
              return item;
            }),
          },
          payingLater: {
            ...state.shoppingCart.data?.payingLater,
            detail: state.shoppingCart.data?.payingLater?.detail?.map((item) => {
              if (item.id === action.payload) {
                return {
                  ...item,
                  quantity: (item.quantity as number) + 1,
                };
              }
              return item;
            }),
          },
        },
      },
    }),

    decrementShoppingCart: (state, action) => ({
      ...state,
      shoppingCart: {
        ...state.shoppingCart,
        data: {
          payInAdvance: {
            ...state.shoppingCart.data?.payInAdvance,
            detail: state.shoppingCart.data?.payInAdvance?.detail?.map((item) => {
              if (item.id === action.payload) {
                return {
                  ...item,
                  quantity: (item.quantity as number) - 1,
                };
              }
              return item;
            }),
          },
          payingLater: {
            ...state.shoppingCart.data?.payingLater,
            detail: state.shoppingCart.data?.payingLater?.detail?.map((item) => {
              if (item.id === action.payload) {
                return {
                  ...item,
                  quantity: (item.quantity as number) - 1,
                };
              }
              return item;
            }),
          },
        },
      },
    }),

    removeShoppingCart: (state, action) => ({
      ...state,
      shoppingCart: {
        ...state.shoppingCart,
        data: {
          payInAdvance: {
            ...state.shoppingCart.data?.payInAdvance,
            detail: state.shoppingCart.data?.payInAdvance?.detail?.filter(
              (item) => item.id !== action.payload
            ),
          },
          payingLater: {
            ...state.shoppingCart.data?.payingLater,
            detail: state.shoppingCart.data?.payingLater?.detail?.filter(
              (item) => item.id !== action.payload
            ),
          },
        },
      },
    }),

    clearShoppingCart: (state) => ({
      ...state,
      shoppingCart: {
        data: {} as ShoppingCartType,
        type: '',
        amountCart: {},
        weight: {
          price: 0,
          noPrice: 0,
        },
        coupon: {
          code: '',
          title: {},
          description: {},
          discountPresent: 0,
          isDiscountPresent: false,
          startDate: '',
          endDate: '',
          activationLimit: 0,
        },
      },
    }),

    setTypeToCartNotification: (state, action) => ({
      ...state,
      shoppingCart: {
        ...state.shoppingCart,
        type: action.payload,
      },
    }),

    setAmountCartAndWeight: (state, action) => ({
      ...state,
      shoppingCart: {
        ...state.shoppingCart,
        amountCart: action.payload.price,
        weight: action.payload.weight,
      },
    }),

    setDiscountPercent: (state, action) => ({
      ...state,
      shoppingCart: {
        ...state.shoppingCart,
        coupon: {
          discountPercent: action.payload.discountPercent,
          code: action.payload.code,
          title: action.payload.title,
          description: action.payload.description,
          discountPresent: action.payload.discountPresent,
          isDiscountPresent: action.payload.isDiscountPresent,
          startDate: action.payload.startDate,
          endDate: action.payload.endDate,
          activationLimit: action.payload.activationLimit,
        },
      },
    }),

    setEmptyDiscountPercent: (state) => ({
      ...state,
      shoppingCart: {
        ...state.shoppingCart,
        coupon: {
          code: '',
          title: {},
          description: {},
          discountPresent: 0,
          isDiscountPresent: false,
          startDate: '',
          endDate: '',
          activationLimit: 0,
        },
      },
    }),

    setPayInAdvanceShoppingCart: (state) => ({
      ...state,
      shoppingCart: {
        ...state.shoppingCart,
        data: {
          ...state.shoppingCart.data,
          payInAdvance: {
            ...state.shoppingCart.data?.payInAdvance,
            detail: [],
          },
        },
      },
    }),

    setPayLaterShoppingCart: (state) => ({
      ...state,
      shoppingCart: {
        ...state.shoppingCart,
        data: {
          ...state.shoppingCart.data,
          payingLater: {
            ...state.shoppingCart.data?.payingLater,
            detail: [],
          },
        },
      },
    }),

    setCommentOrder: (state, action) => ({
      ...state,
      commentOrder: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(getOrderMyBagAction.pending, (state: OrderState) => ({
      ...state,
      shoppingCart: {
        ...state.shoppingCart,
      },
    }));
    builder.addCase(
      getOrderMyBagAction.fulfilled,
      (state: OrderState, action: PayloadAction<any>) => ({
        ...state,
        shoppingCart: {
          ...state.shoppingCart,
          data: action.payload.data,
        },
      })
    );
    builder.addCase(getOrderMyBagAction.rejected, (state: OrderState) => ({
      ...state,
      shoppingCart: {
        ...state.shoppingCart,
        data: {} as ShoppingCartType,
      },
    }));

    // ---------------------
    builder.addCase(getHistoryOrderAction.pending, (state: OrderState) => ({
      ...state,
      listHistoryOrder: {
        ...state.listHistoryOrder,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getHistoryOrderAction.fulfilled,
      (state: OrderState, action: PayloadAction<any>) => ({
        ...state,
        listHistoryOrder: {
          ...state.listHistoryOrder,
          data: action.payload.data,
          meta: action.payload.meta,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getHistoryOrderAction.rejected, (state: OrderState) => ({
      ...state,
      listHistoryOrder: {
        ...state.listHistoryOrder,
        load: false,
        error: '',
      },
    }));

    // ---------------------
    builder.addCase(getAllOrderByAdminAction.pending, (state: OrderState) => ({
      ...state,
      listOrderByAdmin: {
        ...state.listOrderByAdmin,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getAllOrderByAdminAction.fulfilled,
      (state: OrderState, action: PayloadAction<any>) => ({
        ...state,
        listOrderByAdmin: {
          ...state.listOrderByAdmin,
          data: action.payload.data,
          meta: action.payload.meta,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getAllOrderByAdminAction.rejected, (state: OrderState) => ({
      ...state,
      listOrderByAdmin: {
        ...state.listOrderByAdmin,
        load: false,
        error: '',
      },
    }));

    // -----------
    builder.addCase(postOrderMyBagAddItemAction.pending, (state: OrderState) => ({
      ...state,
      shoppingCart: {
        ...state.shoppingCart,
      },
    }));
    builder.addCase(
      postOrderMyBagAddItemAction.fulfilled,
      (state: OrderState, action: PayloadAction<any>) => ({
        ...state,
        shoppingCart: {
          ...state.shoppingCart,
          data: action.payload.data,
        },
      })
    );
    builder.addCase(postOrderMyBagAddItemAction.rejected, (state: OrderState) => ({
      ...state,
      shoppingCart: {
        ...state.shoppingCart,
      },
    }));

    // ---------------------
    builder.addCase(getTrackingOrderAction.pending, (state: OrderState) => ({
      ...state,
      listTrackingOrder: {
        ...state.listTrackingOrder,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getTrackingOrderAction.fulfilled,
      (state: OrderState, action: PayloadAction<any>) => ({
        ...state,
        listTrackingOrder: {
          ...state.listTrackingOrder,
          data: action.payload.data,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(
      getTrackingOrderAction.rejected,
      (state: OrderState, action: PayloadAction<any>) => ({
        ...state,
        listTrackingOrder: {
          ...state.listTrackingOrder,
          load: false,
          error: action.payload.error,
        },
      })
    );

    // ---------------------
    builder.addCase(getDetailOrderByAdminAction.pending, (state: OrderState) => ({
      ...state,
      getDetailOrderByAdmin: {
        ...state.getDetailOrderByAdmin,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getDetailOrderByAdminAction.fulfilled,
      (state: OrderState, action: PayloadAction<any>) => ({
        ...state,
        getDetailOrderByAdmin: {
          ...state.listOrderByAdmin,
          data: action.payload.data,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getDetailOrderByAdminAction.rejected, (state: OrderState) => ({
      ...state,
      getDetailOrderByAdmin: {
        ...state.getDetailOrderByAdmin,
        load: false,
        error: '',
      },
    }));

    // -----------
    builder.addCase(postOrderMyBagAddItemsAction.pending, (state: OrderState) => ({
      ...state,
      shoppingCart: {
        ...state.shoppingCart,
      },
    }));
    builder.addCase(
      postOrderMyBagAddItemsAction.fulfilled,
      (state: OrderState, action: PayloadAction<any>) => ({
        ...state,
        shoppingCart: {
          ...state.shoppingCart,
          data: action.payload.data,
        },
      })
    );
    builder.addCase(postOrderMyBagAddItemsAction.rejected, (state: OrderState) => ({
      ...state,
      shoppingCart: {
        ...state.shoppingCart,
      },
    }));

    // -----------
    builder.addCase(postSynchronizeWithMyBagAction.pending, (state: OrderState) => ({
      ...state,
      shoppingCart: {
        ...state.shoppingCart,
      },
    }));
    builder.addCase(
      postSynchronizeWithMyBagAction.fulfilled,
      (state: OrderState, action: PayloadAction<any>) => ({
        ...state,
        shoppingCart: {
          ...state.shoppingCart,
          data: action.payload.data,
        },
      })
    );
    builder.addCase(postSynchronizeWithMyBagAction.rejected, (state: OrderState) => ({
      ...state,
      shoppingCart: {
        ...state.shoppingCart,
      },
    }));

    // -----------
    builder.addCase(getOrdersAction.pending, (state: OrderState) => ({
      ...state,
      detailOrder: {
        ...state.detailOrder,
      },
    }));
    builder.addCase(getOrdersAction.fulfilled, (state: OrderState, action: PayloadAction<any>) => ({
      ...state,
      detailOrder: {
        ...state.detailOrder,
        data: action.payload.data,
      },
    }));
    builder.addCase(getOrdersAction.rejected, (state: OrderState) => ({
      ...state,
      detailOrder: {
        ...state.detailOrder,
      },
    }));
  },
});

export const {
  addShoppingCart,
  removeShoppingCart,
  incrementShoppingCart,
  decrementShoppingCart,
  clearShoppingCart,
  setTypeToCartNotification,
  setAmountCartAndWeight,
  setCommentOrder,
  setPayInAdvanceShoppingCart,
  setEmptyDiscountPercent,
  setPayLaterShoppingCart,
  setDiscountPercent,
} = orderSlice.actions;
export default orderSlice.reducer;
