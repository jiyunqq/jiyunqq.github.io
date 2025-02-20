import{_ as t,P as p,Q as c,$ as a,a1 as n,a2 as e,a3 as o,C as r,a0 as l}from"./framework-62102715.js";const i="/assets/slurm-5bdb4a2e.svg",d={},u=o('<h3 id="作业调度系统介绍" tabindex="-1"><a class="header-anchor" href="#作业调度系统介绍" aria-hidden="true">#</a> 作业调度系统介绍</h3><p><span style="color:red;font-weight:bold;">登录集群后，不能直接在登录节点运行程序</span>， 需要通过调度系统以<span style="color:red;">作业的形式</span>提交到计算节点上计算，</p><p>集群采用slurm调度系统</p><figure><img src="'+i+'" alt="作业调度" tabindex="0" loading="lazy"><figcaption>作业调度</figcaption></figure>',4),g=o('<li><p><strong>作业几个重要属性</strong></p><p><strong>账户(Account):</strong></p><p>登录集群用的用户名是上机账号，每个上机账号至少关联一个缴费账户，用于作业计费， 通常情况下，提交作业不需要指定账户，通过以下命令可以查询上机账号所关联的账户：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>sacctmgr show ass <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">whoami</span><span class="token variable">`</span></span> <span class="token assign-left variable">format</span><span class="token operator">=</span>account%15 <span class="token operator">|</span><span class="token function">uniq</span>\n</code></pre></div><p>如果一个上机账号对应了多个缴费账户，那么可以在提交作业时指定缴费账户</p><p>账户主要用作记费, 小型集群一般不会配置记费功能。</p><p><strong>分区(Partition): 也叫队列</strong></p><p>提交作业时 <code>必须</code> 指定分区, 不指定会使用缺省分区，每个分区有不同的属性，比如节点核心数，内存大小， 通过以下命令可以查看对应集群可用分区；</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>sacctmgr show ass <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">whoami</span><span class="token variable">`</span></span> <span class="token assign-left variable">format</span><span class="token operator">=</span>part <span class="token operator">|</span><span class="token function">uniq</span>\n或\nsinfo\n</code></pre></div><p><strong>作业质量(QOS):</strong></p><p>对于收费集群，用户需要指定QOS，不同QOS优先级不同，收费也不同，</p><p>通过以下命令可以查询 每个用户在每个分区下可用的QOS；</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sacctmgr show ass <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">whoami</span><span class="token variable">`</span></span>  <span class="token assign-left variable">format</span><span class="token operator">=</span>user,part,qos\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过下面命令可以查看不同QOS的作业优先级、作业允许最大运行时间、每个用户最多可提交作业数、最多可用核心数。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sacctmgr show qos <span class="token assign-left variable">format</span><span class="token operator">=</span>name,Priority,MaxWall,MaxJobsPU,MaxTRESPA\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>',1),h=a("p",null,[a("strong",null,"作业调度系统常见的几个指令")],-1);function b(f,m){const s=r("RouterLink");return p(),c("div",null,[u,a("ol",null,[g,a("li",null,[h,a("ul",null,[a("li",null,[n(s,{to:"/hpc/guide/job/sbatch.html"},{default:e(()=>[l("sbatch:提交作业")]),_:1})]),a("li",null,[n(s,{to:"/hpc/guide/job/scancel.html"},{default:e(()=>[l("scancel:取消已经提交的作业")]),_:1})]),a("li",null,[n(s,{to:"/hpc/guide/job/squeue.html"},{default:e(()=>[l("squeue:查看已经提交的作业")]),_:1})]),a("li",null,[n(s,{to:"/hpc/guide/job/sinfo.html"},{default:e(()=>[l("sinfo:查看分区状态")]),_:1})]),a("li",null,[n(s,{to:"/hpc/guide/job/salloc.html"},{default:e(()=>[l("salloc:交互运行作业")]),_:1})]),a("li",null,[n(s,{to:"/hpc/guide/job/scontrol.html"},{default:e(()=>[l("查看作业具体信息")]),_:1})])])])])])}const k=t(d,[["render",b],["__file","index.html.vue"]]);export{k as default};
