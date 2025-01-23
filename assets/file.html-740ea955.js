import{_ as n,P as l,Q as d,$ as e,a0 as i,a1 as a,a3 as r,C as c}from"./framework-62102715.js";const t={},o=r(`<h1 id="文件传输" tabindex="-1"><a class="header-anchor" href="#文件传输" aria-hidden="true">#</a> 文件传输</h1><p>windows用户可以使用xftp, 或者 winscp 上传和下载文件、Linux/Mac用户可以使用scp、或者rsync进行上传或下载文件</p><h3 id="linux-mac" tabindex="-1"><a class="header-anchor" href="#linux-mac" aria-hidden="true">#</a> Linux/Mac</h3><p>以下为通过scp指令进行上传和下载</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>scp [-rp] -P port file username@ip_address:~/
# 把本地的名为file的文件上传到集群的home目录下,如果file是一个目录的话还需要加上参数r

scp [-rp] -P port username@ip_address:~/file ./
# 该命令将会把服务器上home目录下名为file的文件下载到本地当前文件夹下
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下为通过rsync指令进行上传和下载:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rsync [-Pr] file username@ip_address:~/
# 把本地的名为file的文件同步到集群的home目录下,如果file是一个目录的话还需要加上参数r

如果带端口号, 写法为:
rsync [-Pr] -e &quot;ssh -p port&quot; file username@ip_address:~/

rsync [-Pr] username@ip_address:~/file ./
# 该命令将会把服务器上home目录下名为file的文件同步到本地当前文件夹下

如果带端口号, 写法为:
rsync [-Pr] -e &quot;ssh -p port&quot; username@ip_address:~/file ./
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> Windows</h3><ul><li>使用 xshell 登录的用户可以搭配 xftp 来进行文件的上传下载</li><li>使用 mobaxterm 终端登录可进行文件上传下载</li><li>可以单独安装 winscp 来进行上传下载</li></ul><h3 id="服务端工具-lrzsz" tabindex="-1"><a class="header-anchor" href="#服务端工具-lrzsz" aria-hidden="true">#</a> 服务端工具 lrzsz</h3><p>在集群的登录节点安装快捷文件传输工具 <code>lrzsz</code> 其优点是不用再打开一个 sftp 工具登录进行上传和下载文件.</p><p>通过两个简单的命令 <code>rz上传</code> 和 <code>sz下载</code> 进行文件传输 .</p><p><code>rz上传</code> 和 <code>sz下载</code> 是 Linux/Unix 同 windows 进行 ZModem 文件传输的命令行工具.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sz：将选定的文件发送到本地机器

rz：运行该命令会弹出一个文件选择窗口, 从本地选择文件上传到服务器。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),u={class:"hint-container tip"},p=e("p",{class:"hint-container-title"},"注意：",-1),v=e("code",null,"rz上传",-1),m=e("ul",null,[e("li",null,[e("p",null,"b binary 用 binary 的方式上传下载，不解释字符为 ascii")]),e("li",null,[e("p",null,"e 强制 escape 所有控制字符，比如 Ctrl+x DEL 等")])],-1),h=e("li",null,[e("p",null,[i("运行命令 "),e("code",null,"sz file1 file2"),i(" 就是发文件到 windows 上(保存的目录是可以配置)")])],-1);function b(_,f){const s=c("Badge");return l(),d("div",null,[o,e("div",u,[p,e("ol",null,[e("li",null,[e("p",null,[i("单独用 "),v,i(" 会有两个问题：上传中断、上传文件变化(md5 不同), 解决办法是上传是 用 "),a(s,{type:"tip",text:"rz be",vertical:"middle"}),i(', 并且去掉弹出的对话框中 "Upload files as ASCII" 前的勾选.')]),m]),h])])])}const z=n(t,[["render",b],["__file","file.html.vue"]]);export{z as default};
