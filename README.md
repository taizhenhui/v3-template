## 项目启动安装依赖文件

```sh
npm install
```

## 启动服务

```sh
npm run dev
```

## 项目打包

```sh
npm run build
```

## 项目语法校验

```sh
npm run lint
```



## 目录规范

~~~json
   project tree
/ - node_modules 依赖文件
/ - public 公共文件
    / - favicon.ico 项目ico图标
/ - src 资源文件夹
	/ - api api管理
    / - assets 资源文件夹，存放图片之类的资源
    / - common 配置文件json枚举值等参数数据
    / - components 组件文件夹，自己写的组件都放在这个文件夹下
    / - page 我们所写的页面都放在这里
    / - router 路由文件夹，决定了页面的跳转规则
    / - store pinia状态管理文件
    / - utils 工具类
	/ - App.vue 应用组件，所有自己写的组件都是在这个组件之上运行
    / - main.ts vite入口文件
    
/ - babel.config.js babel配置文件
/ - .eslintrc.cjs eslint配置文件
/ - .prettierrc.json 代码格式配置文件
/ - auto-imports.d.ts 自动导入文件
/ - components.d.ts 全局组件文件
/ - env.d.ts 全局ts配置文件
/ - index.html 项目模板
/ - package.json 项目描述文件
/ - tsconfig.json ts编译配置文件
/ - vite.config.js vite配置文件
~~~



## 项目运行依赖

```
moment 时间处理工具 
axios 数据交互
pinia 状态管理
vue-router 路由
vue 框架
element-plus 组件库
```



## page 下面的目录

## components 下面的组件