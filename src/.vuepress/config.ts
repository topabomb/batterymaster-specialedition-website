import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  description:"Free and open-source Windows battery management software, supporting the display of key battery information such as battery health, charging power, discharging power, battery voltage, and more; allows manual adjustment of processor power limits./免费且开源的Windows电池管理软件，支持电池健康度、充电功率、放电功率、电池电压等等关键电池信息监控；手工调节处理器功率限制；",
  locales: {
    "/": {
      lang: "en-US",
      title: "BatteryMaster",
      description: "Free and open-source Windows battery management software, supporting the display of key battery information such as battery health, charging power, discharging power, battery voltage, and more; allows manual adjustment of processor power limits.",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "电池大师",
      description: "免费且开源的Windows电池管理软件，支持电池健康度、充电功率、放电功率、电池电压等等关键电池信息监控；手工调节处理器功率限制；",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
