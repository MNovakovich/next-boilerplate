const AntdScssThemePlugin = require('antd-scss-theme-plugin');

const webpackConfig = {
 
  plugins: [
    new AntdScssThemePlugin('./theme.scss'),
  ],
};