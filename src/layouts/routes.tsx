import React from 'react';
import {
  AreaChartOutlined,
  ContactsOutlined,
  ShopOutlined,
  FileDoneOutlined,
  UsergroupAddOutlined,
  HistoryOutlined,
  IdcardOutlined,
  QuestionCircleOutlined,
  InfoCircleOutlined,
  BarChartOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { ADMIN_PATH } from '@/config/constant';

type MenuItem = {
  id?: string;
  key: string;
  title?: string;
  icon?: React.ReactNode | React.JSX.Element | string;
  label: React.ReactNode | React.JSX.Element | string;
  type?: 'group';
  permissions?: {
    title: string;
    isChecked: boolean;
  }[];
  children?: MenuItem[];
};

// isChecked chỉ dùng trong phần phân quyền
const routes: MenuItem[] = [
  {
    label: <span>Thống kê</span>,
    key: ADMIN_PATH.dashboard.root,
    icon: <AreaChartOutlined />,
    id: 'DASHBOARD',
    title: 'Thống kê',
    permissions: [
      {
        title: 'DASHBOARD_view',
        isChecked: false,
      },
    ],
  },
  {
    label: <span>Sản phẩm</span>,
    key: '/admin/quan-ly-san-pham',
    icon: <ShopOutlined />,
    children: [
      {
        key: 'sizes',
        label: 'Quản lý size',
        id: 'SIZE',
        title: 'Quản lý size',
        permissions: [
          {
            title: 'SIZE_view',
            isChecked: false,
          },
          {
            title: 'SIZE_create',
            isChecked: false,
          },
          {
            title: 'SIZE_edit',
            isChecked: false,
          },
          {
            title: 'SIZE_delete',
            isChecked: false,
          },
        ],
      },
      {
        key: 'sizes-guide',
        label: 'Hướng dẫn chọn size',
        id: 'SIZE_GUIDE',
        title: 'Hướng dẫn chọn size',
        permissions: [
          {
            title: 'SIZE_GUIDE_view',
            isChecked: false,
          },
          {
            title: 'SIZE_GUIDE_create',
            isChecked: false,
          },
          {
            title: 'SIZE_GUIDE_edit',
            isChecked: false,
          },
          {
            title: 'SIZE_GUIDE_delete',
            isChecked: false,
          },
        ],
      },
      {
        key: 'fabrics',
        label: 'Quản lý vải',
        id: 'FABRICS',
        title: 'Quản lý vải',
        permissions: [
          {
            title: 'FABRICS_view',
            isChecked: false,
          },
          {
            title: 'FABRICS_create',
            isChecked: false,
          },
          {
            title: 'FABRICS_edit',
            isChecked: false,
          },
          {
            title: 'FABRICS_delete',
            isChecked: false,
          },
        ],
      },
      {
        key: 'tags',
        label: 'Quản lý ribbon',
        id: 'RIBBON',
        title: 'Quản lý ribbon',
        permissions: [
          {
            title: 'RIBBON_view',
            isChecked: false,
          },
          {
            title: 'RIBBON_create',
            isChecked: false,
          },
          {
            title: 'RIBBON_edit',
            isChecked: false,
          },
          {
            title: 'RIBBON_delete',
            isChecked: false,
          },
        ],
      },
      {
        key: 'coupon',
        label: 'Quản lý phiếu giảm giá',
        id: 'COUPON',
        title: 'Quản lý phiếu giảm giá',
        permissions: [
          {
            title: 'COUPON_view',
            isChecked: false,
          },
          {
            title: 'COUPON_create',
            isChecked: false,
          },
          {
            title: 'COUPON_edit',
            isChecked: false,
          },
          {
            title: 'COUPON_delete',
            isChecked: false,
          },
        ],
      },
      {
        key: 'catalogs',
        label: 'Quản lý loại sản phẩm',
        id: 'CATALOG',
        title: 'Quản lý loại sản phẩm',
        permissions: [
          {
            title: 'CATALOG_view',
            isChecked: false,
          },
          {
            title: 'CATALOG_create',
            isChecked: false,
          },
          {
            title: 'CATALOG_edit',
            isChecked: false,
          },
          {
            title: 'CATALOG_delete',
            isChecked: false,
          },
        ],
      },
      {
        key: 'products',
        label: 'Quản lý sản phẩm',
        id: 'PRODUCT',
        title: 'Quản lý sản phẩm',
        permissions: [
          {
            title: 'PRODUCT_view',
            isChecked: false,
          },
          {
            title: 'PRODUCT_create',
            isChecked: false,
          },
          {
            title: 'PRODUCT_edit',
            isChecked: false,
          },
          {
            title: 'PRODUCT_delete',
            isChecked: false,
          },
        ],
      },
    ].map((item) => ({
      key: item.key,
      label: item.label,
      permissions: item.permissions,
      id: item.id,
      title: item.title,
    })),
  },
  {
    label: <span>Quản lý đơn hàng</span>,
    key: '/admin/quan-ly-don-hang',
    icon: <FileDoneOutlined />,
    children: [
      {
        key: 'order',
        label: 'Đơn đặt hàng',
        id: 'ORDER',
        title: 'Quản lý đơn đặt hàng',
        permissions: [
          {
            title: 'ORDER_view',
            isChecked: false,
          },
          {
            title: 'ORDER_edit',
            isChecked: false,
          },
          {
            title: 'ORDER_delete',
            isChecked: false,
          },
        ],
      },
      {
        key: 'quan-ly-van-chuyen',
        label: 'Quản lý vận chuyển',
        id: 'SHIPPING',
        title: 'Quản lý vận chuyển',
        permissions: [
          {
            title: 'SHIPPING_view',
            isChecked: false,
          },
          {
            title: 'SHIPPING_create',
            isChecked: false,
          },
          {
            title: 'SHIPPING_edit',
            isChecked: false,
          },
          {
            title: 'SHIPPING_delete',
            isChecked: false,
          },
        ],
      },
      {
        key: 'quan-ly-danh-gia',
        label: 'Quản lý đánh giá',
        id: 'REVIEW',
        title: 'Quản lý đánh giá',
        permissions: [
          {
            title: 'REVIEW_view',
            isChecked: false,
          },
          {
            title: 'REVIEW_delete',
            isChecked: false,
          },
        ],
      },
      {
        key: 'thiet-lap-cau-hoi',
        label: 'Thiết lập câu hỏi',
        id: 'SETUP_REVIEW_QUESTION',
        title: 'Thiết lập câu hỏi',
        permissions: [
          {
            title: 'SETUP_REVIEW_QUESTION_view',
            isChecked: false,
          },
          {
            title: 'SETUP_REVIEW_QUESTION_create',
            isChecked: false,
          },
          {
            title: 'SETUP_REVIEW_QUESTION_edit',
            isChecked: false,
          },
          {
            title: 'SETUP_REVIEW_QUESTION_delete',
            isChecked: false,
          },
        ],
      },
    ].map((item) => ({
      key: item.key,
      label: item.label,
      permissions: item.permissions,
      id: item.id,
      title: item.title,
    })),
  },
  {
    label: <span>Quản lý tài khoản</span>,
    key: '/admin/quan-ly-tai-khoan',
    icon: <UsergroupAddOutlined />,
    children: [
      {
        key: 'khach-hang',
        label: 'Khách hàng',
        id: 'USER_ACCOUNT',
        title: 'Quản lý khách hàng',
        permissions: [
          {
            title: 'USER_ACCOUNT_view',
            isChecked: false,
          },
          {
            title: 'USER_ACCOUNT_delete',
            isChecked: false,
          },
        ],
      },
      {
        key: 'nhan-vien',
        label: 'Nhân viên',
        id: 'STAFF_ACCOUNT',
        title: 'Quản lý nhân viên',
        permissions: [
          {
            title: 'STAFF_ACCOUNT_view',
            isChecked: false,
          },
          {
            title: 'STAFF_ACCOUNT_create',
            isChecked: false,
          },
          {
            title: 'STAFF_ACCOUNT_edit',
            isChecked: false,
          },
          {
            title: 'STAFF_ACCOUNT_delete',
            isChecked: false,
          },
        ],
      },
      {
        key: 'phan-quyen',
        label: 'Phân quyền',
        id: 'PERMISSION',
        title: 'Quản lý phân quyền',
        permissions: [
          {
            title: 'PERMISSION_view',
            isChecked: false,
          },
          {
            title: 'PERMISSION_create',
            isChecked: false,
          },
          {
            title: 'PERMISSION_edit',
            isChecked: false,
          },
          {
            title: 'PERMISSION_delete',
            isChecked: false,
          },
        ],
      },
    ].map((item) => ({
      key: item.key,
      label: item.label,
      permissions: item.permissions,
      id: item.id,
      title: item.title,
    })),
  },
  {
    label: <span>Quản lý liên hệ</span>,
    key: '/admin/quan-ly-lien-he',
    icon: <IdcardOutlined />,
    children: [
      {
        key: 'dang-ky-email',
        label: 'Đăng ký email',
        id: 'SUBSCRIPTION_EMAIL',
        title: 'Quản lý đăng ký email',
        permissions: [
          {
            title: 'SUBSCRIPTION_EMAIL_view',
            isChecked: false,
          },
          {
            title: 'SUBSCRIPTION_EMAIL_delete',
            isChecked: false,
          },
        ],
      },
      {
        key: 'lien-he',
        label: 'Liên hệ',
        id: 'CONTACT',
        title: 'Quản lý liên hệ',
        permissions: [
          {
            title: 'CONTACT_view',
            isChecked: false,
          },
          {
            title: 'CONTACT_create',
            isChecked: false,
          },
          {
            title: 'CONTACT_edit',
            isChecked: false,
          },
          {
            title: 'CONTACT_delete',
            isChecked: false,
          },
        ],
      },
    ].map((item) => ({
      key: item.key,
      label: item.label,
      permissions: item.permissions,
      id: item.id,
      title: item.title,
    })),
  },
  {
    label: <span>Quản lý FAQS</span>,
    key: '/admin/quan-ly-faqs',
    icon: <QuestionCircleOutlined />,
    id: 'FAQS',
    title: 'Quản lý faqs',
    permissions: [
      {
        title: 'FAQS_view',
        isChecked: false,
      },
      {
        title: 'FAQS_create',
        isChecked: false,
      },
      {
        title: 'FAQS_edit',
        isChecked: false,
      },
      {
        title: 'FAQS_delete',
        isChecked: false,
      },
    ],
  },
  {
    label: <span>Thiết lập email</span>,
    key: '/admin/email-template',
    icon: <MailOutlined />,
    id: 'EMAIL_TEMPLATE',
    title: 'Thiết lập email',
    permissions: [
      {
        title: 'EMAIL_TEMPLATE_view',
        isChecked: false,
      },
      {
        title: 'EMAIL_TEMPLATE_edit',
        isChecked: false,
      },
    ],
  },
  {
    label: <span>Made to measure</span>,
    key: '/admin/made-to-measure',
    icon: <QuestionCircleOutlined />,
    children: [
      {
        key: 'popup',
        label: 'Popup may đo',
        id: 'POPUP_MADE_TO_MEASURE',
        title: 'Popup may đo',
        permissions: [
          {
            title: 'POPUP_MADE_TO_MEASURE_view',
            isChecked: false,
          },
          {
            title: 'POPUP_MADE_TO_MEASURE_edit',
            isChecked: false,
          },
        ],
      },
      {
        key: 'huong-dan',
        label: 'Trang hướng dẫn may đo',
        id: 'MADE_TO_MEASURE_GUIDE',
        title: 'Trang hướng dẫn may đo',
        permissions: [
          {
            title: 'MADE_TO_MEASURE_GUIDE_view',
            isChecked: false,
          },
          {
            title: 'MADE_TO_MEASURE_GUIDE_edit',
            isChecked: false,
          },
        ],
      },
      {
        key: 'form ',
        label: 'Form submit may đo',
        id: 'MADE_TO_MEASURE_FORM',
        title: 'Form submit may đo',
        permissions: [
          {
            title: 'MADE_TO_MEASURE_FORM_view',
            isChecked: false,
          },
          {
            title: 'MADE_TO_MEASURE_FORM_edit',
            isChecked: false,
          },
        ],
      },
    ].map((item) => ({
      key: item.key,
      label: item.label,
      permissions: item.permissions,
      id: item.id,
      title: item.title,
    })),
  },
  {
    label: <span>Chiến dịch marketing</span>,
    key: '/admin/quan-ly-website',
    icon: <ContactsOutlined />,
    children: [
      {
        key: 'banner',
        label: 'Banner website',
        id: 'MARKETING_CAMPAIGN_BANNER',
        title: 'Chiến dịch maketing banner website',
        permissions: [
          {
            title: 'MARKETING_CAMPAIGN_BANNER_view',
            isChecked: false,
          },
          {
            title: 'MARKETING_CAMPAIGN_BANNER_create',
            isChecked: false,
          },
          {
            title: 'MARKETING_CAMPAIGN_BANNER_edit',
            isChecked: false,
          },
          {
            title: 'MARKETING_CAMPAIGN_BANNER_delete',
            isChecked: false,
          },
        ],
      },
      {
        key: 'thanh-thong-bao',
        label: 'Thanh thông báo',
        id: 'MARKETING_CAMPAIGN_NOTIFY_BAR',
        title: 'Chiến dịch maketing thanh thông báo',
        permissions: [
          {
            title: 'MARKETING_CAMPAIGN_NOTIFY_BAR_view',
            isChecked: false,
          },
          {
            title: 'MARKETING_CAMPAIGN_NOTIFY_BAR_create',
            isChecked: false,
          },
          {
            title: 'MARKETING_CAMPAIGN_NOTIFY_BAR_edit',
            isChecked: false,
          },
        ],
      },
      {
        key: 'popup',
        label: 'Popup thông báo',
        id: 'MARKETING_CAMPAIGN_NOTIFY_POPUP',
        title: 'Chiến dịch maketing popup thông báo',
        permissions: [
          {
            title: 'MARKETING_CAMPAIGN_NOTIFY_POPUP_view',
            isChecked: false,
          },
          {
            title: 'MARKETING_CAMPAIGN_NOTIFY_POPUP_create',
            isChecked: false,
          },
          {
            title: 'MARKETING_CAMPAIGN_NOTIFY_POPUP_edit',
            isChecked: false,
          },
        ],
      },
      {
        key: 'theme',
        label: 'Cài đặt theme',
        id: 'MARKETING_CAMPAIGN_APP_THEME',
        title: 'Chiến dịch maketing theme website',
        permissions: [
          {
            title: 'MARKETING_CAMPAIGN_APP_THEME_view',
            isChecked: false,
          },
          {
            title: 'MARKETING_CAMPAIGN_APP_THEME_edit',
            isChecked: false,
          },
        ],
      },
    ].map((item) => ({
      key: item.key,
      label: item.label,
      permissions: item.permissions,
      id: item.id,
      title: item.title,
    })),
  },
  {
    label: <span>Thông tin về Yaly</span>,
    key: '/admin/thong-tin-yaly',
    icon: <InfoCircleOutlined />,
    children: [
      {
        key: 've-chung-toi',
        label: 'Về chúng tôi',
        id: 'ABOUT_US',
        title: 'Quản lý thông tin về chúng tôi',
        permissions: [
          {
            title: 'ABOUT_US_view',
            isChecked: false,
          },
          {
            title: 'ABOUT_US_create',
            isChecked: false,
          },
          {
            title: 'ABOUT_US_edit',
            isChecked: false,
          },
          {
            title: 'ABOUT_US_delete',
            isChecked: false,
          },
        ],
      },
      {
        key: 'dia-chi-cua-hang',
        label: 'Địa chỉ cửa hàng',
        id: 'STORE_ADDRESS',
        title: 'Quản lý địa chỉ cửa hàng',
        permissions: [
          {
            title: 'STORE_ADDRESS_view',
            isChecked: false,
          },
          {
            title: 'STORE_ADDRESS_create',
            isChecked: false,
          },
          {
            title: 'STORE_ADDRESS_edit',
            isChecked: false,
          },
          {
            title: 'STORE_ADDRESS_delete',
            isChecked: false,
          },
        ],
      },
      // phụ lục cũ
      // {
      //   key: 'lien-ket',
      //   label: 'Liên kết',
      //   id: 'BUSINESS_SOCIAL_LINK',
      //   title: 'Quản lý liên kết',
      //   permissions: [
      //     {
      //       title: 'BUSINESS_SOCIAL_LINK_view',
      //       isChecked: false,
      //     },
      //     {
      //       title: 'BUSINESS_SOCIAL_LINK_edit',
      //       isChecked: false,
      //     },
      //   ],
      // },

      // phụ lục mới
      {
        key: 'mang-xa-hoi',
        label: 'Liên kết mạng xã hội',
        id: 'BUSINESS_SOCIAL_LINK',
        title: 'Liên kết mạng xã hội',
        permissions: [
          {
            title: 'BUSINESS_SOCIAL_LINK_view',
            isChecked: false,
          },
          {
            title: 'BUSINESS_SOCIAL_LINK_create',
            isChecked: false,
          },
          {
            title: 'BUSINESS_SOCIAL_LINK_edit',
            isChecked: false,
          },
          {
            title: 'BUSINESS_SOCIAL_LINK_delete',
            isChecked: false,
          },
        ],
      },
      {
        key: 'quan-ly-tin-tuc',
        label: <span>Quản lý tin tức</span>,
        id: 'NEWS',
        title: 'Quản lý tin tức',
        permissions: [
          {
            title: 'NEWS_view',
            isChecked: false,
          },
          {
            title: 'NEWS_create',
            isChecked: false,
          },
          {
            title: 'NEWS_edit',
            isChecked: false,
          },
          {
            title: 'NEWS_delete',
            isChecked: false,
          },
        ],
      },
      {
        key: 'logo',
        label: 'Quản lý logo',
        id: 'LOGO',
        title: 'Quản lý logo',
        permissions: [
          {
            title: 'LOGO_view',
            isChecked: false,
          },
          {
            title: 'LOGO_edit',
            isChecked: false,
          },
        ],
      },
      {
        key: 'seo',
        label: 'Seo trang chủ',
        id: 'SEO_HOME_PAGE',
        title: 'Quản lý SEO trang chủ',
        permissions: [
          {
            title: 'SEO_HOME_PAGE_view',
            isChecked: false,
          },
          {
            title: 'SEO_HOME_PAGE_edit',
            isChecked: false,
          },
        ],
      },
    ].map((item) => ({
      key: item.key,
      label: item.label,
      permissions: item.permissions,
      id: item.id,
      title: item.title,
    })),
  },
  {
    label: <span>Nhật ký hoạt động</span>,
    key: '/admin/nhat-ky-hoat-dong',
    icon: <HistoryOutlined />,
    id: 'TRACKING',
    title: 'Nhật ký hoạt động',
    permissions: [
      {
        title: 'TRACKING_view',
        isChecked: false,
      },
    ],
  },
  {
    label: <span>Báo cáo</span>,
    key: '/admin/bao-cao',
    icon: <BarChartOutlined />,
    id: 'REPORT',
    title: 'Báo cáo',
    permissions: [
      {
        title: 'REPORT_view',
        isChecked: false,
      },
    ],
    children: [
      {
        key: 'don-hang',
        label: 'Báo cáo đơn hàng',
        permissions: [
          {
            title: 'REPORT_view',
            isChecked: false,
          },
        ],
      },
      {
        key: 'tien-van-chuyen',
        label: 'Báo cáo tiền vận chuyển các nước',
        permissions: [
          {
            title: 'REPORT_view',
            isChecked: false,
          },
        ],
      },
      {
        key: 'doanh-thu',
        label: 'Báo cáo doanh thu bán hàng',
        permissions: [
          {
            title: 'REPORT_view',
            isChecked: false,
          },
        ],
      },
    ].map((item) => ({
      key: item.key,
      label: item.label,
      permissions: item.permissions,
      // id: item.id,
      // title: item.title,
    })),
  },
];

export default routes;
