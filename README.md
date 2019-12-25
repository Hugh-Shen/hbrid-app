#### 本项目是一个 hrbird 项目

##### 相关使用技术方案
+ Vue: 我喜欢用
+ mockJS：模拟数据
+ aixos：服务器交互
+ JSBridge：原生通信
+ IntersectionObserver：懒加载
+ 其它方案见项目代码

--------

##### webpakc 配置
+ 关于 rem 配置可以使用 px2rem 插件，本项目注重的是自我实现。
+ 全局引入样式，这里 vue-cli 已经帮我们做了配置 sass-resources-loader, 直接使用就可以了

##### 编码管理
+ 使用 scss 来管理我们相关样式。assets > style 下存放的是公用样式，方便后期 UI 的更改更加的快捷
+ 组件化：见项目 components 与 view 文件夹
+ 命名空间：我个人喜欢的一种方式是采用 Airbnb 风格，具体请查看项目

##### 其它约定
+ 本项目属于自己独自开发，所以没有接入 ESlint，喜欢的可以自己可以去了解下 