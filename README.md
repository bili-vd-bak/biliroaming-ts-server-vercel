# biliroaming-serve-ts-vercel

本服务部署在Vercel香港节点上。  
配置修改在 `api/_config.ts` 中，可以直接改里面的配置文本，也可在Vercel里添加对应名称变量。  
使用环境变量更安全。  

## 操作

先Fork到自己的仓库，再修改自己仓库里`api/_config.ts`，  
注册[Vercel](https://vercel.com)，导入本项目，在设置中配置 域名和环境变量。  
Tips: 环境变量设置后需下一次部署才可启用。

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbili-vd-bak%2Fbiliroaming-serve-ts-vercel.git&project-name=biliroaming-serve-ts)