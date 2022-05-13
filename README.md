# 前言

**one-mall**项目是一个电商系统，采用 vue.js + koa.js + mysql 实现。

# 项目介绍

**one-mall**项目是一套电商系统，包括前台商城系统及后台管理系统，基于vue.js + koa.js + mysql实现。前台商城系统包含首页门户、商品推荐、商品搜索、商品展示、购物车、订单流程等模块。后台管理系统包含商品管理、订单管理、促销管理、统计报表、权限管理、设置等模块。

## 项目演示

### 后台管理系统(部分)

![首页](http://120.77.30.174:8000/github/one-mall1.png)

![订单](http://120.77.30.174:8000/github/one-mall2.png)

![商品](http://120.77.30.174:8000/github/one-mall3.png)

### 前台商城系统(部分)

![登录](http://120.77.30.174:8000/github/one-mall4.png)

![首页](http://120.77.30.174:8000/github/one-mall5.png)

![商品详情](http://120.77.30.174:8000/github/one-mall6.png)

![分类](http://120.77.30.174:8000/github/one-mall8.png)

![购物车](http://120.77.30.174:8000/github/one-mall9.png)

![我的](http://120.77.30.174:8000/github/one-mall7.png)

## 组织结构

```markdown
one-mall

├─ one-mall-manage -- 后台商城管理系统

├─ one-mall-manage-service -- 后台商城管理系统接口

├─ one-mall-mobile -- 前台商城系统

└─ one-mall-mobile-service -- 前台商城系统接口
```

## 技术选型

### 后端技术

| 技术  |           说明           |           官网            |
| :---: | :----------------------: | :-----------------------: |
|  koa  | 基于node.js的web开发框架 |    https://koajs.com/     |
| mysql |       mysql数据库        | https://www.mysql.com/cn/ |



### 前端技术

|     技术     |       说明       |            官网             |
| :----------: | :--------------: | :-------------------------: |
|     Vue      |   后台前端框架   |     https://vuejs.org/      |
|  Vue-router  |     路由框架     |  https://router.vuejs.org/  |
|     Vuex     | 全局状态管理框架 |   https://vuex.vuejs.org/   |
| Element-plus |    前端UI框架    |  https://element-plus.org/  |
|    Axios     |   前端HTTP框架   |   https://axios-http.com/   |
|   Echarts    |   可视化图表库   | https://echarts.apache.org/ |
|    uniapp    |   前台前端框架   |  https://uniapp.dcloud.io/  |



## 环境搭建

### 开发工具

|        工具        |       说明       |                             官网                             |
| :----------------: | :--------------: | :----------------------------------------------------------: |
| Visual Studio Code |    开发编辑器    |                https://code.visualstudio.com/                |
|      Navicat       |  数据库连接工具  |             https://www.formysql.com/xiazai.html             |
|      Snipaste      |   屏幕截图工具   |                  https://www.snipaste.com/                   |
|      Postman       | API接口调试工具  |                   https://www.postman.com/                   |
|       Typora       |  Markdown编辑器  |                      https://typora.io/                      |
|     HBuilder X     | 小程序开发编辑器 |             https://www.dcloud.io/hbuilderx.html             |
|   微信开发者工具   | 小程序调试模拟器 | https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html |

### 开发环境

| 工具  | 版本号 |          下载          |
| :---: | :----: | :--------------------: |
| mysql |  8.0   | https://www.mysql.com/ |