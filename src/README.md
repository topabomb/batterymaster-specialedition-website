---
home: true
icon: house
title: Home
bgImage: /assets/bg/4-light.svg
bgImageDark: /assets/bg/4-dark.svg
heroText: BatteryMaster(电池大师)
tagline: Free and open-source Windows battery management software, supporting the display of key battery information such as battery health, charging power, discharging power, battery voltage, and more; allows manual adjustment of processor power limits.
actions:
    

  - text: Download
    icon: download
    link: ./download/  
    type: primary
  
  - text: Source
    icon: octicon:mark-github
    link: https://github.com/topabomb/BatteryMaster
  
  - text: 中文介绍
    icon: language
    link: /zh/

  - text: 💡MarkText中文版
    link: https://marktext.weero.net/


highlights:
  - header: New Features
    image: /assets/image/box.svg
    bgImage: /assets/bg/1-light.svg
    bgImageDark: /assets/bg/1-dark.svg
    features:
      - title: System Tray Display
        icon: material-symbols:award-star-rounded
        details: Display charging and discharging power and duration in different colors during charging and discharging, and show CPU usage when fully charged.

      - title: Battery Health / Degradation
        icon: material-symbols:battery-unknown
        details: View battery health/degradation in real-time

      - title: Charging and discharging power
        icon: material-symbols:award-star-rounded
        details: Real-time monitoring of battery charging and discharging power

      - title: Battery Information
        icon: material-symbols:award-star-rounded
        details: Key information such as battery voltage, charging power, discharging power, design capacity, full charge capacity, battery lifespan/degradation

      - title: AMD Processor Support
        icon: material-symbols:award-star-rounded
        details: View and set processor power limits; the power limit can be locked to prevent modification by other processes; this feature uses RyzenAdj code and is only supported by certain CPUs.
        link: https://github.com/FlyGoat/RyzenAdj

      - title: Continuous Updates
        icon: material-symbols:award-star-rounded
        details: This project will receive long-term updates, gradually adding more features and support for additional processors.

  - header: Project Origin
    description: I spent a long time searching for battery information monitoring software available for Windows. While HWiNFO and LibreHardwareMonitor can monitor a large amount of hardware, neither can consistently lock to the taskbar in the front. BatteryinfoView doesn't show up on the taskbar at all. I'm not criticizing these tools, as my knowledge of them only goes up to February 23, 2025, and these issues may have been resolved in newer versions. Additionally, in order to extend battery life when using my laptop, I wanted to set processor power limits to reduce battery consumption. So, I decided to develop the software myself. To practice Rust development, I forced myself to use Rust + Tauri for this project, and it needs to have at least the following features->
    image: /assets/image/box.svg
    bgImage: /assets/bg/3-light.svg
    bgImageDark: /assets/bg/3-dark.svg
    highlights:
      - title: Display charging/discharging power or CPU usage on the taskbar. The reason for not displaying the battery percentage is that it is already provided by Windows by default.
      - title: Ability to view battery health; ability to record various battery information history for tracking usage habits.
      - title: For my AMD HX370 (Asus TUF Air14) laptop, the ability to view power limits, and ideally, to modify them myself.



footer: <a href="https://github.com/topabomb"target="_blank">Topabomb</a> use <a href="https://theme-hope.vuejs.press/zh/" target="_blank">VuePress Theme Hope</a> Build this website
---

## Screenshot

- Windows tray
![screenshot](/assets/screenshot/tray.png "Windows tray" =200x)
- Battery monitor
![screenshot](/assets/screenshot/monitor.png "Battery monitor" =500x)
- Cpu power limit
![screenshot](/assets/screenshot/power.png "Cpu power limit" =500x)
- 软件设置
![Setting](/assets/screenshot/setting.png "Setting" =500x)
