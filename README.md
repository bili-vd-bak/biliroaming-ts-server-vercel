# biliroaming-serve-ts-vercel

本服务部署在Vercel香港节点上。  
配置修改在 `pages/api/_config.ts` 中，可以直接改里面的配置文本，也可在Vercel里添加对应名称变量。  
使用环境变量更安全。  

## Features

- 支持软件：BiliRoaming、油猴脚本、哔哩(Bili.uwp)、BBDown
- 代理HK/TH地区番剧(目前Vercel仅提供`hkg1``sin1`节点)
- 搜索替换(配置中fs开头配置)
- 自部署黑/白名单(使用NOTION作数据库)

## 部署方法

请看完整篇README文档再动手。  
查看Wiki：  
[配置文档填写说明](https://github.com/bili-vd-bak/biliroaming-ts-server-vercel/wiki/%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6)  
**注**：每个服务只可代理一个地区，若需代理多个地区，请再部署一个相同的服务修改配置。  

### Vercel

先Fork到自己的仓库，再修改自己仓库里`pages/api/_config.ts`，  
修改`vercel.json`的`regions`：若需代理hk香港地区，则填写`hkg1`(默认)；若需代理th东南亚地区(只有泰国地区可完整解锁)，则填写`sin1`。  
注册[Vercel](https://vercel.com)，导入本项目，在设置中配置 域名和环境变量。  
Tips: 环境变量设置后需下一次部署才可启用，故推荐导入时提前设置。  

### 本地

登录想要代理区域的服务器后台。  
找到一个合适的文件夹，clone本仓库并进入。  

```bash
git clone https://github.com/bili-vd-bak/biliroaming-ts-server-vercel.git --depth 1
cd biliroaming-ts-server-vercel
```

安装依赖(使用你想要的包管理器，推荐pnpm)。  

```bash
pnpm i
```

修改`pages/api/_config.ts`。  
(可以在`package.json`中修改`"start": "next start -p $PORT"`以设置端口)  
执行`pnpm run start`。  
使用nginx等反向代理此接口，配置SSL。  

### 其它

参考Vercel的部署，你可以将此项目部署至任何支持Next.js的Serverless服务商。  
由于细节差异，不保证在其它平台上的可用性，请自行调整，也欢迎PR。  

## 已知问题

- Vercel无法本地缓存，故自带缓存功能仅在本地部署时有效。  

## 更新方法

### Vercel

进入你Fork的仓库，点击代码区域上面的提示`Sync fork`，点击下面的`Update branch`，即可自动升级。  
若只有`Discard n commit(s)`，则需重新部署，或创建新合并，手动修改。  
**当升级大版本号时，由于破坏性更改，尽量重新部署，根据Releases说明操作**。  

## TODO

- [BETA]Vercel支持新加坡节点，可以为东南亚地区解锁。(然后就被风控用不了了)  
