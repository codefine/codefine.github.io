---
title: Hello Mellow
date: 2017-12-09 14:50:01
tags: [tag1, tag2]
categories:
    - cg1
    - cg2
    - cg3
comments: true
reward: true
top: 1
repo: codefine | hexo-theme-mellow
---

> 这是一篇傲娇的功能展示页。

<!--more-->

# 正文及自动收缩目录测试

## 正文

Welcome to [Hexo](https://hexo.io/)! This is your very first post. Check [documentation](https://hexo.io/docs/) for more info. If you get any problems when using Hexo, you can find the answer in [troubleshooting](https://hexo.io/docs/troubleshooting.html) or you can ask me on [GitHub](https://github.com/hexojs/hexo/issues).

More info: [Writing](https://hexo.io/docs/writing.html)

## 目录a

目录a目录a目录a目录a目录a

## 目录b

目录b目录b目录b目录b目录b

More info: [Server](https://hexo.io/docs/server.html)

# 引用测试

## 普通引用
> 红红火火恍恍惚惚

## 引用文章
{% blockquote Michael.Lu http://blog.lujingtao.com/2017/11/07/hexo-new/ 玩转hexo - 1 - 蠢萌的序 %}
一个使用 `hexo` 从零搭建博客的系列教程文章。
{% endblockquote %}

# 代码片段测试

## 普通代码

```js
const theme = "mellow"

(function(name) {

    console.log(`Hello ${ name }!`);

})(theme);
```

## 带标题及链接的代码
{% codeblock lang:js jQuery http://api.jquery.com/delegate/ $.delegate() %}
$( "table" ).delegate( "td", "click", function() {
  $( this ).toggleClass( "chosen" );
});
{% endcodeblock %}

# 数学公式测试

## 普通公式
$T(n) = \Theta(n)$

## 居中公式
$$
\Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt\,.
$$

# 自定义markdown语法测试

## 分栏模块

### 双栏结构

@column-2{

@card{

左

}

@card{

右

}

}

### 控制文本对齐方式的三栏结构

@column-3{

@card{

左

}

@card{

@center{

中

}

}

@card{

@right{

右

}

}

}

## 时间轴

@timeline{

##### 2016

@item{

###### 11月6日

为 `Card theme` 添加 `page layout`。
第二行测试

}

@item{

###### 11月20日

另一个 Time line .
第二行测试

}

}

# 其他

更多说明见主题文档[https://github.com/codefine/hexo-theme-mellow/wiki](https://github.com/codefine/hexo-theme-mellow/wiki)

<iframe type="music" frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=22822516&auto=1&height=66"></iframe>