---
home: true
icon: house
title: 主页
bgImage: https://theme-hope-assets.vuejs.press/bg/4-light.svg
bgImageDark: https://theme-hope-assets.vuejs.press/bg/4-dark.svg
heroText: 电池大师(BatteryMaster)
tagline: 免费且开源的Windows电池管理软件，支持电池健康度、充电功率、放电功率、电池电压等等关键电池信息展示；手工调节处理器功率限制；
actions:
  - text: 下载
    icon: download
    link: ./download/  
    type: primary
  
  - text: 源码
    icon: octicon:mark-github
    link: https://github.com/topabomb/BatteryMaster

highlights:
  - header: 新功能
    image: /assets/image/box.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/1-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/1-dark.svg
    features:
      - title: 系统托盘显示
        icon: material-symbols:award-star-rounded
        details: 充放电时以不同颜色显示充放电功率和时长，满电时显示cpu占用;

      - title: 电池的健康度/损耗
        icon: material-symbols:battery-unknown
        details: 实时查看电池的健康度/损耗

      - title: 充放电功率
        icon: material-symbols:award-star-rounded
        details: 实时查看电池的充放电功率

      - title: 电池信息
        icon: material-symbols:award-star-rounded
        details: 电池电压、充电功率、放电功率、设计容量、充满容量、电池寿命/损耗等关键信息

      - title: AMD处理器支持
        icon: material-symbols:award-star-rounded
        details: 查看和设置处理器的功率限制；并可以锁定功率限制，避免被其他进程修改；该功能采用RyzenAdj的代码，仅有部分CPU支持
        link: https://github.com/FlyGoat/RyzenAdj

      - title: 持续更新
        icon: material-symbols:award-star-rounded
        details: 该项目将长期更新，逐步增加更多功能，并增加其他处理器的支持；

  - header: 项目起源
    description: 我花了很长时间寻找Windows下可用的电池信息监控软件，HWiNFO跟LibreHardwareMonitor可以监控大量的硬件，但都不能稳定的任务栏锁定在前端显示；BatteryinfoView完全不能在任务栏显示；我不是批评他们的意思，对它们的了解仅仅截止到2025-2-23，有可能在新版本已经解决了这些问题；另外，为了延长笔记本使用电池时的时长，我也希望能设置处理器功耗来降低电池的消耗；所以，我决定自己开发，为了练习Rust的开发，我强迫自己使用Rust+tauri来开发这款软件，它至少需要以下的功能：
    image: /assets/image/box.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/3-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/3-dark.svg
    highlights:
      - title: 任务栏显示充电放电功率或cpu占用，之所以不显示电量是因为windows自带；
      - title: 能查看电池的健康度；能记录各种电池信息的历史，用于回溯使用习惯；
      - title: 对于我的AMD HX370（华硕天选Air14）笔记本，可以查看功率限制，最好可以自行修改它；



footer: <a href="https://github.com/topabomb"target="_blank">Topabomb</a> 使用 <a href="https://theme-hope.vuejs.press/zh/" target="_blank">VuePress Theme Hope</a> 建设此网站
---

## 软件截图
- 系统托盘
![screenshot](/assets/screenshot/tray.png "Windows tray" =200x)
- 电池监控
![screenshot](/assets/screenshot/monitor.png "Battery monitor" =500x)
- 功率设置
![screenshot](/assets/screenshot/power.png "Cpu power limit" =500x)
- 软件设置
![screenshot](/assets/screenshot/setting.png "Setting" =500x)
