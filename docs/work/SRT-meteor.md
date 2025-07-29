---
changelog: false
title: SRT 项目「流星监测」(持续更新)
tags:
  - work
  - SRT
  - meteor
createTime: 2025/07/19 14:47:23
permalink: /posts/dyzf1tgp/
sticky: 80
---

::: tip

「置顶」这是我的 SRT 项目「流星监测」的一些记录，估计会长期更新.

:::

我的 SRT 项目主要做的是流星监测有关内容，利用分布在各地的监控拍到的流星图像 / 视频，通过软件 UFOAnalyzer 进行定轨，以及通过安装在监控内的光栅做光谱分析 (成分监测).

## 硬件准备

### 摄像头改装

摄像头使用的是 Hikvision 的产品，大致如下图：

::: demo-wrapper img no-padding

![](https://vip.123pan.cn/1845440081/yk6baz03t0l000d7w33fgtgs9j4apbtrDIYxAIFxDda1DGxPDwUzAa==.png)

:::

另外还有一台上一代的产品，没有下面的补光灯.

由于我们是要拍摄星空，所以需要改装摄像头，先把补光灯拆掉，再在镜头前装上光栅. 过程较为简单，就是拧掉螺丝然后拆线，把光栅对齐放在镜头前固定.

需要注意的几个要点：

* 接线的方向不能错；

* 拆补光灯时要小心拔线，最好从接口处下手，防止线被扯断；

* 光栅需要用胶带固定一下，否则容易偏，虽然对结果并不产生特别大的影响，但是最好还是放正一点.

### 数据接入

用下面这样一台路机连接电脑和摄像头：

::: demo-wrapper img no-padding

![](https://vip.123pan.cn/1845440081/yk6baz03t0l000d7w33fgtnwsy4idoyxDIYxAIFxDda1DGxPDwUzAa==.jpg)

:::

其中右下那个口连接电源，POE 口连接监控、电脑，LAN 口可以不接线.

之后在电脑上配置 IP 地址，要求和监控摄像头的 IP 前三位一致：

> Windows 11 电脑，
>
> ```mermaid
> flowchart LR
>   A[设置] --> B[网络和 Internet]
>   B --> C[高级网络设置]
> ```
> 
> 在「网络适配器」中选择连接路机的网口，点击「更多适配器选项」右边的「编辑」，双击「Internet 协议版本 4 (TCP/IPV4)」.
>
> (如图所示)
>
> ::: center
> 
> ![](https://vip.123pan.cn/1845440081/ymjew503t0m000d7w32xrwx0lpjambuzDIYxAIFxDda1DGxPDwUzAa==.png){width="60%"}
>
> ::: 
>
> 之后选择「使用下面的 IP 地址」，输入和监控摄像头 IP 前三位相同的一个地址即可.
>
> (如图所示)
>
> ::: center
>
> ![](https://vip.123pan.cn/1845440081/ymjew503t0l000d7w32x9s0vk03oalh8DIYxAIFxDda1DGxPDwUzAa==.png){width="60%"}
>
> :::

进行完上面的配置，应该可以直接从 IP 地址在浏览器中访问监控的控制界面.

## 软件准备

下载软件：[IVMS](https://partners.hikvision.com/support/hikTools/detail?toolType=iVms4200&id=680371184935768064&q=ivms&pageNum=1&position=1&hiksearch=true) 和 [SADP](https://www.hikvision.com/en/support/tools/hitools/clea8b3e4ea7da90a9/).

