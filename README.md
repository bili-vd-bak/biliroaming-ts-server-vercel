# br-serve-ts-vercel

本服务支持Next.js本地部署。  
配置修改在 `src/_config.ts` 中，可以直接改里面的配置文本，也可在添加对应名称变量。  
使用环境变量更安全。  

## 请旧版用户立即更新

新版会修复一些多余请求、API失效问题。  

## Features

- 支持软件：油猴脚本、哔哩(Bili.uwp)、BBDown(请包含以下cookies:`access_key`(手机客户端accesskey,可使用WEB端漫游脚本获取)以解决未登录报错)
- 支持仅Cookies生成Access_key
- 尝试解除下载速度限制
- 搜索替换(配置中fs开头配置)
- 自部署黑/白名单(使用NOTION/PostgreSQL作数据库)

## 部署方法

请看完整篇README文档再动手。  
**请务必开启黑名单功能，建议同步公共黑名单!!!**  
**请配置Postgresql数据库以减少B站API请求，防止Vercel IP过多请求被禁。**  
查看Wiki：  
[配置文档填写说明](https://github.com/bili-vd-bak/biliroaming-ts-server-vercel/wiki/%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6)  
**注**：每个服务只可代理一个地区，若需代理多个地区，请再部署一个相同的服务修改配置。  
查寻本地缓存和日志请访问`https://{yourDomain}/api/admin/log?s=${配置填写的secret}`  
清理本地缓存和日志请访问`https://{yourDomain}/api/admin/clean?s=${配置填写的secret}`  
**注**: 本地缓存和日志在Serverless环境里无法长期存储，你可以查看Serverless自带的函数日志。  

### Serverless

先Fork到自己的仓库，再修改自己仓库里`src/_config.ts`，  
修改`regions`：若需代理hk香港地区，则填写`hkg1`(默认)。  
在设置中配置 域名和环境变量。  
若需使用Vercel Storage的Postgresql数据库，请连接至此项目；或使用其它pg数据库。重部署后访问`https://{yourDomain}/api/admin/init?s=${配置填写的secret}`，并检查数据库是否已有`blacklist` `cache` `log`三个表。
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

修改`src/_config.ts`。  
(可以在`package.json`中修改`"start": "next start -p $PORT"`以设置端口)  
执行`pnpm run start`。  
使用nginx等反向代理此接口，配置SSL。  

### 其它

参考部署。  
由于细节差异，不保证在其它平台上的可用性，请自行调整，也欢迎PR。  

## 已知问题

- Serverless无法本地缓存，故自带缓存功能仅在本地部署时有效。  
- 使用`pnpm dev`开发时，所有搜索API内`req.url`会错误获取`next.config.mjs`中`rewrites`后的函数路径，导致错误。(`pnpm build`产物正常)(错误由nextjs框架导致)
- 暂未查明cookies(`DedeUserID` `bili_jct` `buvid3` `buvid4`)的作用，故目前强制要求以防止风控

## 更新方法

### Serverless

进入你Fork的仓库，点击代码区域上面的提示`Sync fork`，点击下面的`Update branch`，即可自动升级。  
若只有`Discard n commit(s)`，则需重新部署，或创建新合并，手动修改。  
**当升级大版本号时，由于破坏性更改，尽量重新部署，根据Releases说明操作**。  

## TODO

- Vercel Storage 的 Redis KV支持
- pg管理数据库(管理黑白名单、查看日志)接口
- [Done]修复番剧屏蔽(理论有效)
- [alpha]grpc-api请求(见`grpc`分支)
- [BETA]Vercel支持新加坡节点，可以为东南亚地区解锁。(然后就被风控用不了了)  
- [BETA]Edge函数版(见`cfp`分支)
- [BETA]CloudFlare支持(见`cfp`分支)

## Dev:API测试

- IP信息:`/api/server_info`
- 查询黑名单:`/api/users/1`
- 搜索:`/x/web-interface/search/type?search_type=media_bangumi&keyword=86`
- 搜索(无法测试):`/x/v2/search/type`
- 番剧详情:`/pgc/view/web/season?season_id=3375`
- 番剧详情(无法测试):`/pgc/view/v2/app/season`
- 获取playurl:`/pgc/player/web/playurl?cid=3629601`
- 获取playurl(无法测试):`/pgc/player/api/playurl`
- 所有intlAPI(暂未启用)

## 开源信息

- [Next.js](https://nextjs.org/)
- @neondatabase/serverless
- ts-md5
- qs
- @beetcb/sstore
- pino

## Sponsors

[<img src="https://api.gitsponsors.com/api/badge/img?id=560656015" height="90">](https://api.gitsponsors.com/api/badge/link?p=6u8VaIsrrPfL95+s7eK+ukl1WNjMNW8oeWBEEB6ppjhRMOz4mb832rgz9rx0q8WdT5DbJIzXJW8Ji0uDtsegN/nSPw23F0Uck6R1raDszs2d8UVyNBLMV4xzgorNsjpiB7ABwWSj+kCv7rIWGaQ3GA==)
