import{_ as n,P as l,Q as t,$ as s,a0 as a,a1 as o,a3 as r,C as c}from"./framework-62102715.js";const p={},i=s("h1",{id:"slurm-分配资源的-2-种方式",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#slurm-分配资源的-2-种方式","aria-hidden":"true"},"#"),a(" slurm 分配资源的 2 种方式")],-1),d=s("ol",null,[s("li",null,"简单方式, 不需要安装 slurmdbd, 数据库; 以队列和用户组来分配"),s("li",null,"复杂方式, 需要安装 slurmdbd, 数据库; 通过 qos 来分配资源, 可以细分到 cpu 核")],-1),u=s("h2",{id:"slurm-通过-allowgroups-分配节点资源",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#slurm-通过-allowgroups-分配节点资源","aria-hidden":"true"},"#"),a(" slurm 通过 AllowGroups 分配节点资源")],-1),h=s("p",null,"all 队列只允许 test01,test02 提交; big 队列只允许 test01, user01 提交",-1),m=s("code",null,"vim /etc/slurm/slurm.conf",-1),g={href:"https://slurm.schedmd.com/slurm.conf.html",target:"_blank",rel:"noopener noreferrer"},_=s("div",{class:"language-text","data-ext":"text"},[s("pre",{class:"language-text"},[s("code",null,`PartitionName=all Nodes=c[01-10] MaxTime=INFINITE State=UP AllowGroups=test01,test02
PartitionName=big Nodes=c[01-03] MaxTime=INFINITE State=UP AllowGroups=test01,user01
`)])],-1),k=r(`<h2 id="slurm-通过-qos-分配资源" tabindex="-1"><a class="header-anchor" href="#slurm-通过-qos-分配资源" aria-hidden="true">#</a> slurm 通过 qos 分配资源</h2><ol><li><p>加账号</p><p>对每一个新加的用户执行下面的2条命令</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>sacctmgr <span class="token parameter variable">-i</span> <span class="token function">add</span> account user1
sacctmgr <span class="token parameter variable">-i</span> <span class="token function">add</span> user user1 <span class="token assign-left variable">account</span><span class="token operator">=</span>user1
</code></pre></div></li><li><p>创建 qos</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 限制每个用户最多使用64核, 提交超过限制则报错, 最长运行时间为30天</span>
sacctmgr <span class="token function">add</span> qos qos01 <span class="token assign-left variable">MaxTRESPerUser</span><span class="token operator">=</span>cpu<span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">Flags</span><span class="token operator">=</span>DenyOnLimit <span class="token assign-left variable">MaxWall</span><span class="token operator">=</span><span class="token number">30</span>-00:00:00
</code></pre></div></li><li><p>分配 qos</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>sacctmgr modify user <span class="token builtin class-name">set</span> <span class="token assign-left variable">qos</span><span class="token operator">=</span>qos01 where <span class="token assign-left variable">user</span><span class="token operator">=</span>user1
</code></pre></div></li><li><p>查询用户对应的 qos</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>sacctmgr show user user1 withassoc where <span class="token assign-left variable">account</span><span class="token operator">=</span>user1
</code></pre></div></li></ol>`,2);function b(f,v){const e=c("ExternalLinkIcon");return l(),t("div",null,[i,d,u,s("ol",null,[s("li",null,[h,s("p",null,[a("修改配置文件, "),m,a(", "),s("a",g,[a("参照官网"),o(e)]),a("添加类似如下内容:")]),_])]),k])}const N=n(p,[["render",b],["__file","scheduler.html.vue"]]);export{N as default};