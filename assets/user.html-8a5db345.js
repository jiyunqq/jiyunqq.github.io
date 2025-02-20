import{_ as e,P as t,Q as a,a3 as s}from"./framework-62102715.js";const d={},l=s(`<h1 id="用户管理" tabindex="-1"><a class="header-anchor" href="#用户管理" aria-hidden="true">#</a> 用户管理</h1><ol><li><p>添加用户</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@mgt ~]# ypadduser 
Usage: ypadduser first-arg is: user&#39;s Name.
             second-arg is: user&#39;s Password. default is: pgnis123
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>例子一: 添加 <code>test1</code> 用户, 用户家目录 <code>/share/home/test1</code>, 默认密码: <code>pgnis123</code> :</p><div class="language-text" data-ext="text"><pre class="language-text"><code>ypadduser test1
</code></pre></div></li><li><p>例子二: 添加 <code>test2</code> 用户, 用户家目录 <code>/share/home/test2</code>, 默认密码: <code>123456</code> :</p><div class="language-text" data-ext="text"><pre class="language-text"><code>ypadduser test2 123456
</code></pre></div></li></ul></li><li><p>删除用户</p><p>用户被删除, 用户家目录由 <code>/share/home/test1</code> 变为 <code>/share/home/test1+时间</code> :</p><div class="language-text" data-ext="text"><pre class="language-text"><code>[root@mgt01 ~]# ypdeluser test1
</code></pre></div><p>确定用户家目录没有数据后, 可以手动删除用户家目录.</p></li><li><p>其它方式添加用户</p><ol><li><p>采用系统自带的命令添加用户:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>useradd test3 -d /share/home/test3
</code></pre></div></li><li><p>节点间无密码访问 :</p><div class="language-text" data-ext="text"><pre class="language-text"><code>ypsync test3
</code></pre></div></li></ol></li><li><p>普通用户改密码 ( 例: test1 用户改密码 ) :</p><div class="language-text" data-ext="text"><pre class="language-text"><code>yppasswd test1
</code></pre></div><div class="hint-container tip"><p class="hint-container-title">注意事项</p><ul><li>用系统命令加用户时, 一定要指定用户的家目录到 <code>/share/home/username</code>,</li><li>这是集群的共享家目录. 我们创建的用户也属于集群用户,</li><li>即属于每一个节点. 所以必须是共享的.</li></ul></div></li><li><p>多个用户属于同一个组的创建方法 ( 例 test2 用户属于 test 组 ) :</p><p>linux系统命令加用户:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>groupadd -g 1500 test
adduser -g 1500 -d /public/home/test2 test2
</code></pre></div><p>改密码:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>passwd test2
</code></pre></div><p>节点间无密码访问:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>ypsync test2
</code></pre></div></li><li><p>nis 节点间同步的命令 :</p><div class="language-text" data-ext="text"><pre class="language-text"><code>cd /var/yp
make
</code></pre></div></li></ol>`,2),c=[l];function i(n,o){return t(),a("div",null,c)}const r=e(d,[["render",i],["__file","user.html.vue"]]);export{r as default};
