---
changelog: false
title: 简单深空摄影图像处理入门
createTime: 2026/06/18 05:36:32
tags:
  - Keep-Learning
  - astronomy
permalink: /blog/pf301x8q/
---
最近观测天文学课的其中一个大作业是选择一个深空天体作为目标，写观测计划，并最终拿到数据之后做一个比较艺术性的摄影图片出来. 感觉这件事情其实是比较有意思的，虽然实际拍摄的过程是天文协会的学长们用远程台完成，但是后续的图像处理比较有门道，因此想写下来记录一下. 当然，我没有用到 PS (PhotoShop)，因为并不是很会使用这种比较偏向摄影的软件，同时不太想在电脑上下载一个 Adobe 全家桶，毕竟是学校的花钱买的版本，如果离开学校就无法使用，比较难受.

下面的内容大多数都是用这些软件完成的：[AstroImageJ](https://astroimagej.com/)，[Siril](https://siril.org/) 以及 [PixInsight](https://pixinsight.com/).

> 这里有必要简单说一下各个软件的定位.
>
> 首先 AstroImageJ 是一个偏向学术上分析数据的软件，它有很多图像叠加、处理的功能，但是主要都是为了科研上的数据处理而服务，也就是说，它并不偏向于图片的编辑和美化 (或者说根本就没有这方面功能)，只是简单地把图片里面的数据整合好，能够做下一步的数据处理；另外它自己已经有很多数据整理的功能，我看到官网上面甚至写了可以用它画一个 exoplanet transit 的光变曲线出来. 它的使用比较简单，我们课堂上是用这个软件来演示如何做 RGB 滤镜的三色合成，以及更早的做星点对齐、叠加平场、暗场的基础操作.
>
> Siril 是一个「astronomical image processing tool」，它包含了 AstroImageJ 对于图像处理的大多数功能，但是数据处理的能力稍微弱一点. 我自己体验下来发现，Siril 的星点对齐算法应该是比 AstroImageJ 先进一点，因为后者使用的是某个网站的 API，速度慢尚且不说，精度也就那样，不然服务器和数据传输的压力实在是有点大. 这个软件的一大优点在于，相比 PixInsight，它是免费的.
>
> PixInsight (下称 PI) 可以说是深空摄影领域的集大成者，拥有非常强大的功能、高度自定义化的界面以及先进的算法. 缺点是极其昂贵，但是我们学校天文协会的学长给了我他的 License，因此我可以骗过官方的审查，姑且是免费地用着这个高贵的软件.
>
> ::: warning
>
> 说起这个，我校天文系曾经在大服务器上运行某个盗版软件供全系师生使用，但是某一位外国留学生非常看不下去这种「罪恶」的行径，遂向官方举报我们系的操作，导致我们系只能全款购买该软件的正版.
>
> 我想说的是，大家别举报我.
>
> :::
>
> 回到 PI，这东西另一个缺点是学习曲线极为陡峭，甚至初学根本无从下手. 如果有系统学习 PI 的需要，可以看看这个：[PixInsight 入门到精通 | 星空 π 对](https://pi.bestxtech.com/)，这应该是中文材料里面最权威的一个教程；另外我遇到一些问题也会去 PI 的官方论坛去看看有没有比较好的解答，这也是入门的一个比较好的参考资料. 不过鉴于我是在完成一项作业，在这种情境下可能用 AI 反而是最快的，因此我直接让我的 codex CLI 阅读我的 `.fits` 文件，告诉我使用 PI 修改的建议.

## 拍摄流程

首先肯定是要积累足够的数据. 要拍的内容有：平场、暗场、bias 和普通的各滤镜图像，其中只有 bias 是不需要和滤镜相关的，其他的图片要分通道拍摄. 当然，这里用是 CCD 的场合，如果用彩色 CMOS 应该是没这么多麻烦的事情，因为不用分通道 —— 但是用 CCD 一般来说会得到更好的数据.

下面是一个典型的文件结构：

```text:no-line-numbers
.
├── biases
│   ├── 2026-04-17_14-06-16_LIGHT_S_1x1_8.80_gain56_0.00s_0037.fits
│   ├── ...
│   └── 2026-04-17_14-06-33_LIGHT_S_1x1_8.80_gain56_0.00s_0039.fits
├── darks
│   ├── _2025-06-10_04-52-52_DARK_H_-9.90_gain56_600.00s_0053.fits
│   ├── ...
│   └── _2025-06-10_05-12-55_DARK_H_-10.00_gain56_600.00s_0055.fits
├── flats
│   ├── FlatWizard-L_2026-04-22_20-30-34_FLAT_H_3.20_gain56_6.25s_0000.fits
│   ├── ...
│   └── FlatWizard-L_2026-04-22_20-30-51_FLAT_H_2.70_gain56_6.25s_0002.fits
├── lights
│   ├── 2026-04-16_22-08-21_LIGHT_H_1x1_0.50_gain56_600.00s_0002.fits
│   ├── ...
│   └── 2026-04-16_22-56-24_LIGHT_H_1x1_-0.00_gain56_600.00s_0004.fits
├── masters
│   ├── bias_stacked.fit
│   ├── ...
│   └── pp_flat_stacked.fit
├── process
└── result_H_6000s.fit
```

> 这是我的 H 滤镜，也就是 $\text{H}\alpha$ 谱线滤镜的图片文件夹，仅选取部分文件. 但是其实一开始并不是这样，是为了在 Siril 里面做图像叠加修改的文件结构，这一点之后会写.

一般开始的时候是会按照 flats, lights, biases, darks 的四个文件夹分类好，因为拍摄的时候它们分别是一起拍摄的；同时 lights 文件夹中的不同通道之间的照片一般也混在一起，因为都是在拍摄一段时间某个通道之后用滤镜轮换新的一个滤镜拍摄下一张. 这时只能通过图片命名中类似 `*_R_*` 这样的字段来判定它们分别是用什么滤镜拍摄的.

## 星点对齐和单通道叠加

前面说到，课堂上我们用的是 AstroImageJ 进行演示，然而我实际完成这个操作是使用 Siril.

### AstroImageJ

::: warning

下面大多数图片来源于 Sharon 老师的课件内容. 并且，这个方法的效果确实不够优秀，详细讲解的原因仅仅是它每一步都有明显的物理含义，而不像 Siril 和 PixInsight 一样直接一个脚本跑完直接获得最终图像；后者过于黑箱，对初学者理解整个图像处理的过程并不能起到积极作用.

:::

1. 首先打开软件，选择顶栏的 `Files`，然后打开自己拍摄数据文件夹中的随机一个文件.

2. 之后选择顶栏的 `Process`，如图所示选择 `Data reduction facility`.

   ::: window img no-padding

   ![(credit: Sharon)](https://vip.123pan.cn/1845440081/yk6baz03t0n000ddy6c9w4i15anf055kDIYxAIFxDda1DGxPDwUzAa==.png)

   :::

3. 上一步做完之后会跳出好几个窗口，首先选择下图这个界面，在 SIMBAD Object ID 中填写自己拍摄的目标的名称. 下图中示例选择的是 M101，我自己拍摄的是 NGC 2903.

   ::: window img no-padding

   ![(credit: Sharon)](https://vip.123pan.cn/1845440081/yk6baz03t0n000ddy6ce11zsb0nf35cgDIYxAIFxDda1DGxPDwUzAa==.png)

   :::

   填写目标名称之后 AstroImageJ 会在数据库中搜索并且把后面的信息全部填写清楚.

4. 之后选择下图的窗口：

   ::: window img no-padding

   ![(credit: Sharon)](https://vip.123pan.cn/1845440081/ymjew503t0n000ddy5lx8cou6tj3lob9DIYxAIFxDda1DGxPDwUzAa==.png)

   :::

   这一步是最重要的构建步骤.

   1. 把所有的文件夹名称选择好，比如现在要构建 R 滤镜的各个 master image，那么就分别在 `Bias Subtraction`, `Dark Subtraction`, `Flat Division` 和 `Science Image Processing` 几处把文件夹的路径填写好，点击右边的文件夹图标可以直接在文件管理器或者 Finder 中选择. 右边第二栏是填写文件的通配名称，因为可能只要用到 R 滤镜的图片，所以在右边用含有通配符的文件名把所有 R 滤镜拍摄的图片选择出来. 这一点非常重要，因此请注意最右侧的那个数字，如果和实际 R 滤镜拍摄的图片数量不一致，那么就要检查是不是通配文件名的某些地方写法有问题.

   2. 第一个要构建的是 bias. 这时候把所有的几个功能中的 Enabled 选项都取消掉，Build 选项只留下 `Bias Subtraction` 的那一个，然后点击下面的 `START`. (当然，要 Enable 最上面的那几个文件名通配符选项，不然无法读取文件.)

   3. 构建 bias 之后，AstroImageJ 会在 bias 文件夹下输出一个 master bias 文件，这是将所有 bias 合成之后的结果. 现在取消 `Bias Subtraction`  的 Build 选项，选择 Enable，然后选择 `Dark Subtraction` 的 Build 选项，也就是利用已经构建好的 master bias 来构建 dark.

      点击 `START`.

   4. 接下来按照同样的步骤构建 flat，也就是取消选择前两个的 Build 选项，改为 Enable，并选择 `Flat Division` 的 Build 选项，点击 `START`.

      > 关于 `Image Correction` 的选项：勾选 Plate Solve 之后会自动处理 bias, dark 和 flat 的不同曝光时间，所以建议勾选让图片亮度更加正常.

   5. 最后构建这个滤镜总的图像. 也就是，点击下面 Save Calibrated Images 的 Enable 选项，并且将 master flat，master bias 和 master dark 全部 Enable，之后点击 `START`，这样就获得了初步处理过后的某一个滤镜对应的所有图片. 当前的情况是，每个滤镜的 light 图片都已经经过处理，可以开始下一步的对齐与合成.

5. 现在选择顶栏的 `Files - Import - Image Sequence`. 弹出下面的这个窗口：

   ::: window img no-padding

   ![(credit: Sharon)](https://vip.123pan.cn/1845440081/ymjew503t0l000ddzwyefa44lrdxwh9jDIYxAIFxDda1DGxPDwUzAa==.png)

   :::

   这里基本不用改变默认的配置，如果需要的话可以更改 Filter 后面的名字，标注一下这是哪一个滤镜的图片以便后续做区分. 之后直接点击 `OK` 就能导入单个滤镜的所有图片，作为一个 image sequence.

6. 对齐 image sequence. 导入之后自动弹出一个文件预览窗口，聚焦这个窗口对图片序列进行操作. 选择顶栏的 `Process - Align Stack using WCS or apertures`，弹出下面的窗口：

   ::: window img no-padding

   ![(credit: Sharon)](https://vip.123pan.cn/1845440081/ymjew503t0n000ddzx1ji6vhltdzmtw9DIYxAIFxDda1DGxPDwUzAa==.png)

   :::

   (勾选的部分和图片一致即可.)

   配置好选项后点击 `OK`，这时候鼠标指针会变成一个十字架的形状，用鼠标在图像序列中的任意一张图片上选择几个比较亮的星点，作为对齐的基准 (大概三到十个差不多，多选的话可能跑的慢一点). 选择足够的星点之后 `Enter`，开始进行图像对齐.

   :::: tip

   这里有一个 tricky 的点，如果在拍摄某一个目标的时候发生了翻中天之类的操作，整个图像会翻转 180 度. 实际上 AstroImageJ 在设计上应该是可以自动处理这一类的问题，但是我实际使用的时候发现它做得非常差... 因此我当时采取的措施是，不自己来选星点，而是选择顶栏 `WCS - Plate solve using Astrometry.net (with options)...` 这个选项. 选完之后会弹出这个窗口：

   ::: window img no-padding

   ![(credit: physnya)](https://vip.123pan.cn/1845440081/ymjew503t0m000ddzxfozwspjie6rum0DIYxAIFxDda1DGxPDwUzAa==.png)

   :::

   (这个图是我写文章的时候临时截图的. <s>而且我想吐槽一句为什么 MacOS 自己的截图功能会导致图片周围有一圈透明部分... 虽然我知道这样看起来很高级很炫酷就是了...</s>)

   其中，那个 API key 之类的东西可以去 [nova.astrometry.net](https://nova.astrometry.net) 申请一个，似乎能通过 GitHub 账号登录之类，反正几分钟就可以弄好. 由于我并不清楚上述图片中选项的具体含义，因此我也没有改变默认设置，直接点击 `START` 开始标定. AstroImageJ 这时候会调用上述那个网站的 API，然后由它的算法自动选定点进行标定；这样做的好处是，它应该是直接把标定的内容和方向等信息写进了这个 `.fits` 格式图片的 header 里面，所以后面处理翻中天或者是某些星点的位置发生变化的时候，效果比之前手动选择要好不少；缺点也很明显，跑起来异常缓慢，可能一张比较大的文件要跑十几分钟.

   ::::

   总之这一步把整个图像序列中的所有图片全部对齐好了，下一步可以进行合成操作.

7. 选择顶栏选项 `Process - Combine stack slices into single image...`，检查一下图片数量没什么问题，选择 `Sum Slices`，点击 `OK` 开始单通道合成. 最终输出的结果就是这个滤镜的所有图像合成的结果.

   ::: warning

   这里可能出现一种异常情况：星点看起来不是一个点，而是一条线，像是被拉长了. 这种问题只有一种可能 —— 望远镜拍摄的时候导星偏了. 补救的措施是，回到上一步对齐的步骤，找找是哪一张图片偏离比较大，然后把它排除在合成的图像序列之外. 至少这是用 AstroImageJ 的一种解决方案，当然这个方案并不是很好，但是实属无奈之举. 如果用其他软件，它们的算法内会有相应的一些功能可以优化最后的图片质量.

   :::

以上是 AstroImageJ 的星点对齐和单通道叠加方法. 下面我们来看看 Siril 如何完成这些操作.

### Siril

Siril 将上面所有操作集成在一个脚本中. 但是 Siril 不人性化的地方在于，它强制要求这个脚本处理的所有图片按照自己的规定存放在特定名称的文件夹中，否则 Siril 根本无法找到对应的文件，会直接退出脚本.

> 并不知道到底是谁想出来这种逆天设计的... 但凡做个通配符呢？不过我看 Siril 似乎可以自己导入脚本，没准有时间在 codex 帮助下能够写一个更加智能的版本出来罢.

Siril 以「工作目录」作为自己工作的主线. 如果想要完成星点对齐和单通道合成这样的操作，那么文件目录应该是这样的：

```text:no-line-numbers
.
├── B
├── G
├── H
│   ├── biases
│   │   ├── 2026-04-17_14-01-34_LIGHT_S_1x1_8.30_gain56_0.00s_0000.fits
│   │   ├── ...
│   │   └── 2026-04-17_14-06-33_LIGHT_S_1x1_8.80_gain56_0.00s_0039.fits
│   ├── darks
│   │   ├── _2025-06-10_03-42-41_DARK_H_-10.00_gain56_600.00s_0046.fits
│   │   ├── ...
│   │   └── _2025-06-10_05-12-55_DARK_H_-10.00_gain56_600.00s_0055.fits
│   ├── flats
│   │   ├── FlatWizard-L_2026-04-22_20-30-34_FLAT_H_3.20_gain56_6.25s_0000.fits
│   │   ├── ...
│   │   └── FlatWizard-L_2026-04-22_20-33-00_FLAT_H_-1.30_gain56_6.25s_0019.fits
│   └── lights
│       ├── 2026-04-16_22-08-21_LIGHT_H_1x1_0.50_gain56_600.00s_0002.fits
│       ├── ...
│       └── 2026-04-17_01-17-04_LIGHT_H_1x1_-9.90_gain56_600.00s_0011.fits
├── L
└── R
```

> 上面其实写过一次了，这里重申一遍. 注意，所有和脚本有关的文件夹 (flats, lights, biases, darks) 名字都不能更改，必须严格等于当前的名字，否则脚本报错.

在 Siril 中选择左上角那个小房子的图标，这代表选择工作目录. 然后选择某一个滤镜对应的文件夹，这里以 H 为例. 选择之后，点击 `脚本 - Siril 脚本文件 - Mono_Preprocessing.ssf`. 系统会自动开始运行脚本，可以在右侧的 log 中看到脚本当前的状态.

脚本运行结束之后生成的文件就是完成单通道合成之后的结果，一般用 `result_...` 来命名.

## RGB 合成 & 基础后期处理

我并没有使用过 AstroImageJ 进行过三色合成，所以下面用 Siril 和 PixInsight 来完成三色合成的工作.

### Siril

仍然是几步点击就可以完成，当然效果实在一般. 我们在上一步已经得到每个通道的 master 文件，这里直接点击「图像处理」里面的「合成 - RGB 合成」即可，如下图：

::: window img no-padding

![(credit: Sharon)](https://vip.123pan.cn/1845440081/ymjew503t0l000ddzyacl6ydofelw0vlDIYxAIFxDda1DGxPDwUzAa==.png)

:::

在弹出的窗口界面中，为每个通道选择对应的文件：这里，luminance 对应 L 通道；如果像我一样有 H 通道的图片，可以点击 + 号添加，H 通道就是 H$\alpha$ 滤镜对应的通道.

在完成初步的合成之后就是进一步的调整了. 在 Siril 中，一般直接选择「图像处理 - 拉伸」中的直方图拉伸即可，点击弹出窗口中带齿轮的图标即可开始自动拉伸. 但是效果并不是很好，因此只能手动用鼠标调整各个通道的曲线，这一过程异常折磨且很难调出想要的结果，因此我想在这里略去它.

### PixInsight

用 PI 最好的地方就是它太全面了. 下面是 PI RGB 合成的方法 (其中很大一部分是我边修改边和 GPT 的对话形成的)：

::: collapse accordion

- 输入文件对应关系

    将五个已配准的 Siril 输出按如下方式使用：

    ```text:no-line-numbers
    r_NGC2903_00001.fit  -> 亮度 / L
    r_NGC2903_00002.fit  -> 红色 / R
    r_NGC2903_00003.fit  -> 绿色 / G
    r_NGC2903_00004.fit  -> 蓝色 / B
    r_NGC2903_00005.fit  -> H-alpha / Ha
    ```

    > 重要规则：
    >
    > - 不要把 `L` 放进 RGB 通道. 
    > - 不要用 `Ha` 替代 `R`. 
    > - 先建立干净的宽带 RGB 图像. 
    > - 后续再把 Ha 作为受控的红色发射成分加入. 
    > - 最后再加入 Luminance，用于细节和对比度. 

- 打开并重命名图像视图

    在 PixInsight 中打开全部五个 FITS 文件. 

    将图像视图重命名为：

    ```text:no-line-numbers
    L
    R
    G
    B
    Ha
    ```

    这样后续使用 PixelMath 和选择处理对象时会清楚得多. 

- 检查对齐情况

    打开：

    ```text:no-line-numbers
    Process > Animation > Blink
    ```

    依次闪烁查看：

    ```text:no-line-numbers
    L
    R
    G
    B
    Ha
    ```

    如果恒星位置能够对齐，就继续下一步. 如果有任何通道发生偏移，运行：

    ```text:no-line-numbers
    Process > ImageRegistration > StarAlignment
    ```

    建议的 StarAlignment 设置：

    ```text:no-line-numbers
    Reference image: L
    Target images:   R, G, B, Ha
    ```

    后续工作流程使用对齐后的输出图像. 

- DynamicCrop

    打开：

    ```text:no-line-numbers
    Process > Geometry > DynamicCrop
    ```

    1. 点击 `L` 图像窗口，使其成为活动窗口. 
    2. 调整裁剪矩形，去除叠加边界和有问题的边缘. 
    3. 使用绿色对勾 / apply 按钮将裁剪应用到 `L`. 
    4. 不要重置 DynamicCrop. 
    5. 将 DynamicCrop 的蓝色三角图标拖到：

    ```text:no-line-numbers
    R
    G
    B
    Ha
    ```

    这会把完全相同的裁剪应用到每个通道. 

    目标是：在 RGB、Ha 和 LRGB 合成之前，所有图像都具有完全相同的尺寸. 

- 背景提取

    对每张单色图像使用 ABE 或 DBE：

    ```text:no-line-numbers
    L
    R
    G
    B
    Ha
    ```

    推荐流程：

    ```text:no-line-numbers
    Process > BackgroundModelization > DynamicBackgroundExtraction
    ```

    建议的 DBE 设置：

    ```text:no-line-numbers
    Correction: Subtraction
    ```

    只在干净的背景天空区域放置 DBE 采样点. 

    > 避免把采样点放在：
    >
    > - NGC 2903 上
    > - 星系晕上
    > - 亮星上
    > - 尘埃带上
    > - 明显的梯度区域或坏边缘上
    >
    > 对每个通道分别运行 DBE. 不要假设某个通道的梯度模型也适用于其他滤镜. 

- 用 LinearFit 平衡 RGB

    打开：

    ```text:no-line-numbers
    Process > ColorCalibration > LinearFit
    ```

    使用绿色通道作为 RGB 参考：

    ```text:no-line-numbers
    Reference image: G
    ```

    将 LinearFit 应用到：

    ```text:no-line-numbers
    R
    B
    ```

    保持 `G` 不变. 在此阶段不要对 `L` 或 `Ha` 使用 LinearFit. 

- 创建宽带 RGB 图像

    打开：

    ```text:no-line-numbers
    Process > ChannelManagement > ChannelCombination
    ```

    使用 RGB 模式：

    ```text:no-line-numbers
    R = R
    G = G
    B = B
    ```

    应用该处理，并将生成的彩色图像重命名为：

    ```text:no-line-numbers
    RGB
    ```

    在这个阶段，`RGB` 仍应保持线性状态. 

- 创建用于背景参考的预览区域

    对于 BackgroundNeutralization 和 ColorCalibration，应从合成后的 RGB 图像中选取一个干净的天空预览区域. 

    点击 `RGB` 图像，然后创建一个预览：

    ```text:no-line-numbers
    Preview > New Preview
    ```

    在 macOS 上，快捷键是：

    ```text:no-line-numbers
    Option + N
    ```

    在干净、较暗的背景天空上画一个矩形区域. 

    > 该预览区域应满足：
    >
    > - 不包含星系
    > - 不包含亮星
    > - 不包含尘埃带
    > - 不包含明显的梯度边缘

    PixInsight 会将其命名为类似下面的形式：

    ```text:no-line-numbers
    RGB -> Preview01
    ```

- BackgroundNeutralization

    打开：

    ```text:no-line-numbers
    Process > ColorCalibration > BackgroundNeutralization
    ```

    使用：

    ```text:no-line-numbers
    Target image:          RGB
    Background reference:  RGB->Preview01
    ```

    重要说明：彩色图像的背景参考必须是彩色图像，或者来自彩色图像的预览. 不要选择 `L`、`R`、`G`、`B` 或 `Ha` 这样的单色视图作为 `RGB` 的背景参考. 

    将 BackgroundNeutralization 应用到 `RGB`. 

- 颜色校准

    如果 SpectrophotometricColorCalibration 可用并且能正常工作，它通常是最佳选择：

    ```text:no-line-numbers
    Process > ColorCalibration > SpectrophotometricColorCalibration
    ```

    如果 SPCC 失败，则使用传统的 ColorCalibration：

    ```text:no-line-numbers
    Process > ColorCalibration > ColorCalibration
    ```

    简单设置：

    ```text:no-line-numbers
    White reference:       RGB
    Background reference:  RGB->Preview01
    ```

    如果使用整个 `RGB` 图像作为白参考会得到奇怪的颜色，则创建第二个预览，其中包含几颗未饱和的视场星，并尽量少包含或不包含星系：

    ```text:no-line-numbers
    White reference:       RGB->Preview02
    Background reference:  RGB->Preview01
    ```

    颜色校准之后，可以选择进行绿色清理：

    ```text:no-line-numbers
    Process > NoiseReduction > SCNR
    Color:  Green
    Amount: 0.3 to 0.6
    ```

    除非图像明显偏绿，否则避免使用 `1.0`. 过量的 SCNR 可能会去除真实颜色. 

- 准备 H-alpha 作为红色发射成分

    Ha 图像应当用于增强发射区，而不是替代红色通道. 

    首先将 Ha 拟合到红色通道：

    ```text:no-line-numbers
    Process > ColorCalibration > LinearFit
    Reference image: R
    Target image:    Ha
    ```

    将结果重命名为：

    ```text:no-line-numbers
    Ha_fit
    ```

    使用 PixelMath 创建只包含发射成分的 Ha 图像：

    ```text:no-line-numbers
    Process > PixelMath > PixelMath
    ```

    表达式：

    ```text:no-line-numbers
    max(Ha_fit - R, 0)
    ```

    启用：

    ```text:no-line-numbers
    Create new image
    ```

    将新图像标识符设置为：

    ```text:no-line-numbers
    Ha_emission
    ```

    这个减法会去掉相当一部分宽带连续谱成分，因此 Ha 不会把整个星系和所有恒星都变红. 

- 将 H-alpha 加入红色通道

    从校准后的 `RGB` 中提取通道：

    ```text:no-line-numbers
    Process > ChannelManagement > ChannelExtraction
    ```

    这会创建类似下面的单色视图：

    ```text:no-line-numbers
    RGB_R
    RGB_G
    RGB_B
    ```

    使用 PixelMath 创建一个加入 Ha 的新红色通道：

    ```text:no-line-numbers
    min(RGB_R + 0.20*Ha_emission, 1)
    ```

    启用：

    ```text:no-line-numbers
    Create new image
    ```

    设置新图像标识符：

    ```text:no-line-numbers
    R_Ha
    ```

    推荐的 Ha 强度：

    ```text:no-line-numbers
    0.10  自然
    0.15  受控的艺术化增强
    0.20  更强，但仍然合理
    0.30  激进的红色发射增强
    ```

    对于 NGC 2903，先从下面的表达式开始：

    ```text:no-line-numbers
    min(RGB_R + 0.15*Ha_emission, 1)
    ```

    或者：

    ```text:no-line-numbers
    min(RGB_R + 0.20*Ha_emission, 1)
    ```

    然后重新合成：

    ```text:no-line-numbers
    Process > ChannelManagement > ChannelCombination
    ```

    使用：

    ```text:no-line-numbers
    R = R_Ha
    G = RGB_G
    B = RGB_B
    ```

    将结果重命名为：

    ```text:no-line-numbers
    RGB_Ha
    ```

    如果 `R_Ha` 没有出现在 ChannelCombination 的选择器中，请检查 PixelMath 是否设置为 `Create new image`，并且新图像标识符是否正好是 `R_Ha`. 

- 线性阶段降噪

    在拉伸之前，应在图像仍处于线性状态时进行降噪. 

    应用到：

    ```text:no-line-numbers
    RGB_Ha
    L
    ```

    PixInsight 原生选项：

    ```text:no-line-numbers
    Process > MultiscaleProcessing > MultiscaleLinearTransform
    ```

    如果已安装，也可以使用 NoiseXTerminator 等外部工具. 

    > 尽可能使用蒙版：
    >
    > - 保护星系核心. 
    > - 保护亮星. 
    > - 主要降低背景和暗弱外部结构中的噪声. 

- 拉伸 RGB_Ha

    ScreenTransferFunction 只是预览，直到它被转移到 HistogramTransformation 中才会成为真正的拉伸. 

    打开：

    ```text:no-line-numbers
    Process > IntensityTransformations > ScreenTransferFunction
    Process > IntensityTransformations > HistogramTransformation
    ```

    > 工作流程：
    >
    > 1. 点击 `RGB_Ha`，使其成为活动图像. 
    > 2. 在 ScreenTransferFunction 中点击 AutoStretch. 
    > 3. 将 ScreenTransferFunction 窗口左下角的小蓝色三角拖到 HistogramTransformation 下方的空白灰色区域. 
    > 4. HistogramTransformation 的曲线图应该发生变化. 
    > 5. 重置 ScreenTransferFunction，这样就不会叠加预览拉伸. 
    > 6. 将 HistogramTransformation 应用到 `RGB_Ha`. 

    如果你的目标是把拉伸转移到 HistogramTransformation，不要把 STF 的三角图标拖到图像上. 

    如果 STF 到 HT 的转移不起作用，可以在 HistogramTransformation 中进行手动初始拉伸：

    ```text:no-line-numbers
    Shadows:    0.003 to 0.008
    Midtones:   0.20 to 0.30
    Highlights: 1.000
    ```

    黑点要保守处理. 不要把黑点推得太深，压进直方图峰值. 之前的 Siril 结果失败，是因为蓝色通道被严重裁剪到了零. 

- 拉伸 Luminance

    将 `L` 与 RGB 分开拉伸. 

    可选方式：

    ```text:no-line-numbers
    Process > IntensityTransformations > HistogramTransformation
    ```

    或：

    ```text:no-line-numbers
    Process > IntensityTransformations > GeneralizedHyperbolicStretch
    ```

    亮度图像承载细节和对比度，因此通常可以承受比 RGB 图像更强的对比处理. 

    > 控制好以下问题：
    >
    > - 背景裁剪
    > - 亮星光晕
    > - 过度锐化的核心
    > - 暗弱外部星系结构的丢失

    在拉伸后的 `L` 上可以选择进行细节增强：

    ```text:no-line-numbers
    LocalHistogramEqualization
    HDRMultiscaleTransform
    MultiscaleLinearTransform
    ```

    使用蒙版，并保持效果适度. 

- 将 Luminance 与 RGB_Ha 合成

    打开：

    ```text:no-line-numbers
    Process > ChannelManagement > LRGBCombination
    ```

    正常使用时，`RGB_Ha` 是活动目标图像. 该流程会把亮度加入这个目标图像. 

    设置：

    ```text:no-line-numbers
    L = stretched L
    R = disabled
    G = disabled
    B = disabled
    ```

    点击拉伸后的 `RGB_Ha` 图像，使其成为活动图像，然后应用 LRGBCombination. 

    建议设置：

    ```text:no-line-numbers
    Luminance weight:              0.8 to 1.0
    Saturation:                    0.20 to 0.35
    Chrominance noise reduction:   enabled
    ```

    如果你的 PixInsight 版本或处理设置要求填写所有四个通道槽位，使用以下备用方法：

    1. 对拉伸后的 `RGB_Ha` 运行 ChannelExtraction. 
    2. 在 LRGBCombination 中使用提取出来的通道：

    ```text:no-line-numbers
    L = stretched L
    R = RGB_Ha_R
    G = RGB_Ha_G
    B = RGB_Ha_B
    ```

    应用后创建最终的 LRGB+Ha 图像. 

    - 最终艺术化润色

    使用：

    ```text:no-line-numbers
    Process > IntensityTransformations > CurvesTransformation
    ```

    > 典型收尾顺序：
    >
    > 1. 轻微提高饱和度. 
    > 2. 做一个柔和的对比曲线. 
    > 3. 用蒙版保护背景. 
    > 4. 避免恒星变得过饱和. 
    > 5. 避免星系核心变成平坦的纯白. 

    可选的恒星控制：

    ```text:no-line-numbers
    MorphologicalTransformation
    StarNet2
    StarXTerminator
    CurvesTransformation with a star mask
    ```

    如果加入 Ha 后恒星变得太红，降低 Ha 系数，或者使用无星 Ha 图像注入红色通道. 

    无星 Ha 的示例公式：

    ```text:no-line-numbers
    min(RGB_R + 0.20*Ha_starless, 1)
    ```

- 针对该数据集的推荐起始方案

    将以下内容作为实际处理的基线：

    ```text:no-line-numbers
    RGB source:
    R = r_NGC2903_00002.fit
    G = r_NGC2903_00003.fit
    B = r_NGC2903_00004.fit

    RGB balancing:
    LinearFit R and B to G

    Color calibration:
    BackgroundNeutralization + ColorCalibration
    Background reference = clean RGB preview

    Ha:
    LinearFit Ha to R
    Ha_emission = max(Ha_fit - R, 0)
    R_Ha = min(RGB_R + 0.15*Ha_emission, 1)

    Luminance:
    r_NGC2903_00001.fit
    Stretch separately
    Add last with LRGBCombination

    Stretch:
    Gentle linked RGB stretch
    Avoid hard black clipping
    ```

:::

## 成果

以上是整个图像处理中我完成的所有具体操作. 最终我采用的是 Siril 对齐、PI 做颜色合成和后期处理的方式，成果如图：

:::: tabs

@tab webp 版本 (243KB)
::: window img no-padding

![](https://vip.123pan.cn/1845440081/yk6baz03t0l000de02h1j41ghkk8tfopDIYxAIFxDda1DGxPDwUzAa==.webp)

:::

@tab 原图 (11.3MB)
::: window img no-padding

![](https://vip.123pan.cn/1845440081/yk6baz03t0m000de02gv96rxsdk8r2x1DIYxAIFxDda1DGxPDwUzAa==.png)

:::

::::

看起来还不赖 (至少作为初次尝试？)，当然可提升空间还很大很大. 下次再有拍摄的机会我可能会尝试用 PS 多做一些调整，希望能够得到更好的图像.