function HomePage() {
  return (
    <>
      <div className="content">
        <h1>Vercel HK BiliRoaming Service</h1>
        <a href="/api/server_info">服务器网络信息</a>
        <br />
        <a href="https://github.com/yujincheng08/BiliRoaming/wiki/">使用教程</a>
        <br />
        <h2>支持黑/白名单查询</h2>
        访问 <code>/users/&#123;uid&#125;</code> 即可查询
      </div>
      <footer className="footer">
        <a href="https://github.com/bili-vd-bak/biliroaming-serve-ts-vercel">
          在Github上查看本项目
        </a>
      </footer>
    </>
  );
}

export default HomePage;
