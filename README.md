# gqyw_management

## 部署说明

```shell
# 克隆代码
git clone
# 此项目需要nodejs >= 18 版本，如果没有安装nodejs，请先安装nodejs
node -v
# 安装yarn，如果没有装过的话
npm add yarn -g
# 安装依赖
yarn install
# 构建
yarn build
# 启动服务（默认将暴露于端口3000）
# 如果想在服务端进行部署，可以使用pm2或者nohup等工具
# 通过环境变量SERVER_BASE_URL指定服务端地址，否则将使用内置的默认地址
SERVER_BASE_URL="http://<your-server-hostname>:<port>/" yarn start 
```

## 目录结构

- app
  - admin 主内容目录
    - apis/page.tsx # API管理页面路由
    - apps/page.tsx # APP管理页面路由
    - dashboard/page.tsx # 首页（经营大盘）路由
    - devices/page.tsx # 设备管理页面路由
    - merchants/page.tsx # 商户管理页面路由
    - users/page.tsx # 用户管理页面路由
    - layout.tsx # 登录后所有页面的主布局文件
  - login/page.tsx # 登录页面
  - components # 页面的具体实现，一般是客户端组件
  - hooks/useTable.ts # 用于处理表格的hook
  - layout.tsx # HTML布局文件
  - service
    - fetcher.ts # 用于处理请求的工具文件，内部定义了服务端的地址
    - 其他.ts # 服务端数据和前端数据的映射文件，包括接口定义、实体类型定义等
- components/ui # 通用UI组件
- public # 静态资源目录
- middleware.ts  #这个文件是中间件文件，用于处理请求的拦截和处理，例如：登录拦截，权限拦截等

其余文件大多是配置文件或者工具文件，不做过多介绍。

## 本地开发

```shell
yarn install

yarn dev
```
