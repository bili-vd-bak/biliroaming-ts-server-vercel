import { version, ver_min } from "../src/_config";

function HomePage() {
  return (
    <>
      <div className="content">
        <h1>BiliRoaming Service (TS)</h1>
        <h2>信息展示</h2>
        当前后端版本: {version}(请以 [] 中 Git Hash 为准)
        <br />
        哔哩漫游最低版本限制: {ver_min} [
        <a
          target="_blank"
          href="https://github.com/bili-vd-bak/biliroaming-ts-server-vercel/wiki/%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6#%E9%99%90%E5%88%B6api%E8%B0%83%E7%94%A8"
        >
          对应版本号查询
        </a>
        ]<h2>功能区</h2>
        <a target="_blank" href="/api/server_info">
          服务器网络信息
        </a>
        (当前位于:{process.env.VERCEL_REGION || "请点击左侧实时查询"})
        <br />
        <a
          target="_blank"
          href="https://github.com/yujincheng08/BiliRoaming/wiki/"
        >
          使用教程
        </a>
        <br />
        <h2>支持黑/白名单查询</h2>
        访问 <code>/api/users/&#123;uid&#125;</code> 即可查询
      </div>
      <footer className="footer">
        <a
          target="_blank"
          href="https://github.com/bili-vd-bak/biliroaming-serve-ts-vercel"
        >
          在Github上查看本项目
        </a>
      </footer>
    </>
  );
}

export default HomePage;
