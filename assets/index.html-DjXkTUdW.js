import{_ as p,c as s,a as o,d as t,f as n,w as r,r as i,o as l}from"./app-CZ_4pePg.js";const m={},d={class:"hint-container details"};function g(u,a){const e=i("CardGrid");return l(),s("div",null,[a[4]||(a[4]=o('<p>寒假已经开始了快两周才开始写这个流水账，我还真是怠惰啊 o_o .... 这一次流水账就来总结一下寒假至今为止都发生了什么.</p><h2 id="fragment-1-关于网站的建设" tabindex="-1"><a class="header-anchor" href="#fragment-1-关于网站的建设"><span>Fragment 1 关于网站的建设</span></a></h2><p>这段时间倒是没有做什么非常明显的改动，但是有几个小小的优化.</p><p>因为回到长沙，所以之前可能感觉访问速度没什么问题，在家里这边就会觉得访问速度是不是实在有点太缓慢了，所以有下定决心去找一些优化访问速度的方法. 一个重要指标当然是所谓的 LCP（Largest Contentful Paint），也就是最大内容的绘制时间. 在我的网站所用的 Fluid 主题里，加载主页最大的内容应该是 banner 图片，在我的测试中也发现主页最难加载的就是文章的缩略图和主页 banner，从这个角度来想确实应该优化图片加载.</p><p>之前一直是把常用的几张图片放在 <code>/img/</code> 文件夹里面，直接丢到 GitHub 仓库里，这显然是非常不划算的行为，因为仓库存储毕竟有上限，而且本身就是 GitHub Pages 了，难道还嫌访问速度不够慢吗（摊手.jpg）？所以改用图床是必然的选择. 在文章内部使用图片的时候我一般用的是 <a href="https://p.sda1.dev/" target="_blank" rel="noopener noreferrer">流浪图床</a> ，虽然没有备案，但是服务一直比较稳定，国内访问也没什么问题，开发者也有在一直好好维护. 不过不是自己部署的总感觉会有一点点不适，要是哪天真出了问题也不好恢复，所以换常用的几张 banner 也不会考虑它.</p><p>如果要自己部署，一开始我想到的是 <a href="https://picx.xpoet.cn/" target="_blank" rel="noopener noreferrer">PicX</a>，但是这也是存储在 GitHub 存储库的，访问速度并不会得到多少提升；所以转向一个最近才听说的服务 —— <a href="https://www.123pan.com/" target="_blank" rel="noopener noreferrer">123云盘</a>，这个云盘居然自带图床功能（虽然还是要一点钱，但是比 CDN 或者 OSS 存储桶稍微好点），所以我把 banner 图全部迁移过去，文章内部的图片等之后再统一迁移.</p><hr><p>另外一个重点是我重新写了一遍 <a href="https://physnya.top/about/" target="_blank" rel="noopener noreferrer">⌈ 关于 ⌋</a> 页面. 之前的页面比较简单，也不包含什么内容，看起来让人有些云里雾里…… 所以这一次更新把内容写得更加细致了一些，同时加上了一个“Now”的部分，用来展示我的 GitHub 热力图和飞书任务计划. 虽然目前来看移动端的显示还是有一点问题，初步推测是飞书的分享出了问题，之后再看看怎么调整权限（之前用飞书 webhook 机器人指令的时候就研究了很久，一直没看懂文档）.</p><h2 id="fragment-2-单簧管" tabindex="-1"><a class="header-anchor" href="#fragment-2-单簧管"><span>Fragment 2 单簧管</span></a></h2><p>可能是《利兹与青鸟》看上头了，这段时间突然对单簧管很有兴趣，于是心动不如行动直接买了一支（还真是敢想敢做啊不得不说）在家里吹笛头吹了一个下午，终于能吹响了 (Q<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ω</mi></mrow><annotation encoding="application/x-tex">\\omega</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span></span></span></span>Q).</p><p>我爸看到我有这个兴趣，就找了一个老师试了一节课，现在已经能够成功吹出第一个八度（从 G 到下一个 G），感觉还是蛮神奇的：每一个按键都是传动结构，实际上按下去的位置和气柱的结尾位置并不一样，说实话是一种非常有技术细节的乐器，用术语来讲，就是存在很多 Boehm 结构. 老师知道我是学物理的之后也说，他可以少花很多时间来讲单簧管本身的构造，毕竟原理就是物理上的声学.</p>',11)),a[5]||(a[5]=t("details",{class:"hint-container details"},[t("summary",null,"放一点记录"),t("div",{class:"demo-wrapper only-img no-padding"},[t("div",{class:"demo-head"},[t("div",{class:"demo-ctrl"},[t("i"),t("i"),t("i")])]),t("div",{class:"demo-container"},[t("p",null,[t("img",{src:"https://vip.123pan.cn/1845440081/ymjew503t0l000d6xujz7kdtm9119860DIYxAIFxDda1DGxPDwUzAa==.jpg",alt:"单簧管",width:"5712",height:"4284"})])])]),t("p",null,"吹的一段《小星星》（虽然吹得很烂但是很有成就感）"),t("iframe",{frameborder:"no",border:"0",marginwidth:"0",marginheight:"0",width:"298",height:"52",src:"//music.163.com/outchain/player?type=4&id=1219958797&auto=0&height=32"})],-1)),a[6]||(a[6]=t("h2",{id:"fragment-3-同学聚会",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#fragment-3-同学聚会"},[t("span",null,"Fragment 3 同学聚会")])],-1)),a[7]||(a[7]=t("p",null,"回到长沙之后，初中同学和高中同学都在约着聚餐或者是一起玩，这段时间至少参加了四次聚会.",-1)),a[8]||(a[8]=t("p",null,"最开始是高中两个同学和我一起去长沙大学旁边的春日影寿司探店：",-1)),t("details",d,[a[3]||(a[3]=t("summary",null,"照片",-1)),n(e,{clos:""},{default:r(()=>a[0]||(a[0]=[t("img",{src:"https://vip.123pan.cn/1845440081/yk6baz03t0m000d6xujocxl02zgt9pojDIYxAIFxDda1DGxPDwUzAa==.jpg"},null,-1),t("img",{src:"https://vip.123pan.cn/1845440081/yk6baz03t0l000d6xujntyyrmy16vfq1DIYxAIFxDda1DGxPDwUzAa==.jpg"},null,-1)])),_:1}),n(e,{cols:"3"},{default:r(()=>a[1]||(a[1]=[t("img",{src:"https://vip.123pan.cn/1845440081/yk6baz03t0n000d6xujp02b98uwfm1k9DIYxAIFxDda1DGxPDwUzAa==.jpg"},null,-1),t("img",{src:"https://vip.123pan.cn/1845440081/ymjew503t0m000d6xujzns9yx4gnomhbDIYxAIFxDda1DGxPDwUzAa==.jpg"},null,-1),t("img",{src:"https://vip.123pan.cn/1845440081/yk6baz03t0m000d6xujocxkz95gt8cjgDIYxAIFxDda1DGxPDwUzAa==.jpg"},null,-1)])),_:1}),n(e,null,{default:r(()=>a[2]||(a[2]=[t("img",{src:"https://vip.123pan.cn/1845440081/ymjew503t0l000d6xujz7kdu2k11apa0DIYxAIFxDda1DGxPDwUzAa==.jpg"},null,-1),t("img",{src:"https://vip.123pan.cn/1845440081/yk6baz03t0n000d6xujp02b8f5wflp89DIYxAIFxDda1DGxPDwUzAa==.jpg"},null,-1)])),_:1})]),a[9]||(a[9]=t("p",null,"店里面的抹茶芭菲不错（bushi）. 其实还有一整个玻璃展柜的手办、立牌之类，尤其是一眼就能看出店主是一个白厨，仓田真白的周边摆了整整一层，挺震撼的.",-1)),a[10]||(a[10]=t("p",null,"吃完饭之后一起去打任天堂大乱斗了 —— 虽然我是那种完全没玩过手柄的，被那两个同学杀得片甲不留.",-1)),a[11]||(a[11]=t("p",null,"18 号是和四个初中同学一起，约了几个家长，请初中班主任老师吃了一次海鲜. 21 号下午，我和我初中玩的比较好的一个朋友一起去小区附近刚开业的商场里面逛了一圈，之后跑到渔人码头的一个书店看书，晚上就在附近吃潮汕火锅，然后在一个江边的民谣酒吧，叫上其他五个人玩桌游. 当天顺便喝了酒吧招牌的梅子酒，结果就我一个酒量不行的喝得最多，差点喝醉（已经感觉到酒精的作用了）.",-1)),a[12]||(a[12]=t("p",null,"前几天下午，一个同学在高中那边给学弟学妹们答疑，结果遇到一个比较棘手的浸渐不变量问题，遂开腾讯会议找人讨论. 问题解决之后理所应当的聚了一餐，当时我妹刚好看完电影，我就直接把她也接过去吃饭，虽然之后回学校和学弟们（是的，没有学妹）聊得比较开心差点把我妹晾在光学实验室里……",-1)),a[13]||(a[13]=t("p",null,"这周还有一次回高中宣讲的活动，不过晚上并没有和同学一起吃饭.",-1)),a[14]||(a[14]=t("h2",{id:"结",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#结"},[t("span",null,"结")])],-1)),a[15]||(a[15]=t("p",null,"寒假不知不觉好像已经过了不少，我的 CTMR 大论文还没开始动笔，电磁学更是一点没复习. 过两天回老家之后可能会专心一点，闲下来的时候就练习新买的单簧管放松心情吧.",-1))])}const x=p(m,[["render",g]]),c=JSON.parse('{"path":"/posts/a8n8h73w/","title":"流水账 Week 15","lang":"zh-CN","frontmatter":{"title":"流水账 Week 15","createTime":"2025/01/27 00:24:12","tags":["Life"],"permalink":"/posts/a8n8h73w/","description":"寒假已经开始了快两周才开始写这个流水账，我还真是怠惰啊 o_o .... 这一次流水账就来总结一下寒假至今为止都发生了什么. Fragment 1 关于网站的建设 这段时间倒是没有做什么非常明显的改动，但是有几个小小的优化. 因为回到长沙，所以之前可能感觉访问速度没什么问题，在家里这边就会觉得访问速度是不是实在有点太缓慢了，所以有下定决心去找一些优化访...","head":[["meta",{"property":"og:url","content":"https://physnya.top/posts/a8n8h73w/"}],["meta",{"property":"og:site_name","content":"菲兹克斯喵"}],["meta",{"property":"og:title","content":"流水账 Week 15"}],["meta",{"property":"og:description","content":"寒假已经开始了快两周才开始写这个流水账，我还真是怠惰啊 o_o .... 这一次流水账就来总结一下寒假至今为止都发生了什么. Fragment 1 关于网站的建设 这段时间倒是没有做什么非常明显的改动，但是有几个小小的优化. 因为回到长沙，所以之前可能感觉访问速度没什么问题，在家里这边就会觉得访问速度是不是实在有点太缓慢了，所以有下定决心去找一些优化访..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vip.123pan.cn/1845440081/ymjew503t0l000d6xujz7kdtm9119860DIYxAIFxDda1DGxPDwUzAa==.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-12T03:06:55.000Z"}],["meta",{"property":"article:tag","content":"Life"}],["meta",{"property":"article:modified_time","content":"2025-02-12T03:06:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"流水账 Week 15\\",\\"image\\":[\\"https://vip.123pan.cn/1845440081/ymjew503t0l000d6xujz7kdtm9119860DIYxAIFxDda1DGxPDwUzAa==.jpg\\"],\\"dateModified\\":\\"2025-02-12T03:06:55.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":5.65,"words":1694},"git":{"updatedTime":1739329615000,"contributors":[{"name":"physnya","username":"physnya","email":"676266673@qq.com","commits":2,"avatar":"https://avatars.githubusercontent.com/physnya?v=4","url":"https://github.com/physnya"}]},"autoDesc":true,"filePathRelative":"weekly/weekly-15.md","categoryList":[{"id":"4a11fc","sort":10001,"name":"weekly"}]}');export{x as comp,c as data};
