import { ThemeConfig } from 'antd';
import { adminFont, font } from './font';

export const themeAntdClient: ThemeConfig = {
  token: {
    // colorPrimary: '#ffffff',
    fontFamily: font.style.fontFamily,
  },
  components: {
    Button: {
      colorPrimary: '#52b25e',
      colorPrimaryHover: '#52b25e',
      colorPrimaryActive: '#52b25e',

      colorLinkHover: '#52b25e',
      colorLinkActive: '#52b25e',
      colorInfoTextActive: '#52b25e',
    },
    FloatButton: {
      colorPrimary: '#52b25e',
      colorPrimaryHover: '#52b25e',
    },
    Input: {
      activeBorderColor: '#52b25e',
      hoverBorderColor: '#52b25e',
      activeShadow: '#52b25e',
    },
    Pagination: {
      itemActiveBg: '#000000',
      colorPrimary: '#ffffff',
      colorPrimaryHover: '#ffffff',
    },
    Tabs: {
      itemHoverColor: '#52b25e',
      itemSelectedColor: '#52b25e',
      itemActiveColor: '#52b25e',
      inkBarColor: '#52b25e',
    },
    Spin: {
      colorPrimary: '#52b25e',
    },
  },

  hashed: false,
};

export const themeAntdAdmin: ThemeConfig = {
  token: {
    // colorPrimary: '#ffffff',
    fontFamily: adminFont.style.fontFamily,
  },
  components: {
    Button: {
      colorPrimary: '#F58634',
      colorPrimaryHover: '#F58634',
      colorPrimaryActive: '#F58634',

      colorLinkHover: '#F58634',
      colorLinkActive: '#F58634',
      colorInfoTextActive: '#F58634',
    },
    FloatButton: {
      colorPrimary: '#F58634',
      colorPrimaryHover: '#F58634',
    },
    Input: {
      activeBorderColor: '#F58634',
      hoverBorderColor: '#F58634',
    },
    Tabs: {
      itemHoverColor: '#F58634',
      itemSelectedColor: '#F58634',
      itemActiveColor: '#F58634',
      inkBarColor: '#F58634',
    },
    Spin: {
      colorPrimary: '#F58634',
    },
    Table: {
      cellPaddingInline: 8,
    },
  },

  hashed: false,
};
