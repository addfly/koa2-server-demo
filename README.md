# koa2-server-demo
基于koa2的后端demo

## 技术栈
koa2（node.js）

## 版本说明
- **2.1** 业务增加 
  使用加盐算法加密存储用户密码，加入token，加入静态资源托管，加入上传文件功能
- **2.0** 代码重构
  将数据库操作相关模块化，路由模块化
- **1.0** 版本 
  连接数据库+基本路由

## 文档结构
```
koaServer
├── app.js                            入口文件
├── public                            静态资源
│   ├── upload                        上传文件夹
├── dblink                        
│   ├── actions                       数据库操作相关
│   │   └── userMessage            
│   ├── index.js                      数据库相关入口文件               
│   └── models                        数据模型
│       └── userMessage
├── package-lock.json
├── README.md                         说明文档
├── routes                            路由
│   ├── index.js
│   └── user
│       └── index.js
└── util                              公用方法
```

