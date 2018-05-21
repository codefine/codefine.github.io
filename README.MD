> 本基础环境所搭载主题的与[mellow主题仓库](https://github.com/codefine/codefine.github.io)最新版本保持一致。
> 确认你的 Hexo 版本在 3.0 以上，以及 Node 版本为 6.x 以上，在 Hexo 根目录，执行以下命令。

## 使用方法

1. 克隆仓库(下载)

``` bash
git clone https://github.com/codefine/codefine.github.io
```

2. 安装依赖

> 克隆之后通过命令行`cd xxx`进入目录后执行以下命令。

``` bash
npm install
```

3. Hexo本地调试

``` bash
hexo clean
hexo generate
hexo server
```

4. 部署

> 修改站点配置文件`codefine.github.io/_config.yml`中的`deploy -> repo`，为自己的博客服务器或仓库地址

``` bash
hexo deploy
```