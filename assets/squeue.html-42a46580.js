import{_ as e,P as n,Q as t,$ as s,a0 as l,a1 as o,a3 as i,C as r}from"./framework-62102715.js";const c={},p=i(`<h3 id="squeue" tabindex="-1"><a class="header-anchor" href="#squeue" aria-hidden="true">#</a> squeue</h3><p>查看作业队列信息</p><ul><li><strong>查看作业调度系统中所有的作业</strong></li></ul><div class="language-text" data-ext="text"><pre class="language-text"><code>squeue
</code></pre></div><ul><li><strong>查看自己提交的作业</strong></li></ul><div class="language-text" data-ext="text"><pre class="language-text"><code># 注意whoami前后不是单引号
squeue -u \`whoami\`
</code></pre></div><ul><li><strong>按照一定格式显示自己的作业信息</strong></li></ul><div class="language-text" data-ext="text"><pre class="language-text"><code>squeue -o &quot;%.18i %.9P %.12j %.12u %.12T %.12M %.16l %.6D %R&quot; -u $USER
</code></pre></div><p>执行以下操作:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>echo &quot;alias sq=&#39;squeue -o \\&quot;%.18i %.9P %.12j %.12u %.12T %.12M %.16l %.6D %R\\&quot; -u $USER&#39;&quot; &gt;&gt; ~/.bashrc
</code></pre></div><p>随后执行 <code>source ~./bashrc</code> 或者重新登录, 然后执行 <code>sq</code> 就可以按照指定格式显示自己的作业信息</p><ul><li><strong>常用参数</strong></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">--help</span>    <span class="token comment"># 显示squeue命令的使用帮助信息；</span>
<span class="token parameter variable">-A</span> <span class="token operator">&lt;</span>account_list<span class="token operator">&gt;</span>  <span class="token comment"># 显示指定账户下所有用户的作业，如果是多个账户的话用逗号隔开；</span>
<span class="token parameter variable">-i</span> <span class="token operator">&lt;</span>seconds<span class="token operator">&gt;</span>       <span class="token comment"># 每隔相应的秒数，对输出的作业信息进行刷新</span>
<span class="token parameter variable">-j</span> <span class="token operator">&lt;</span>job_id_list<span class="token operator">&gt;</span>   <span class="token comment"># 显示指定作业号的作业信息，如果是多个作业号的话用逗号隔开；</span>
<span class="token parameter variable">-n</span> <span class="token operator">&lt;</span>name_list<span class="token operator">&gt;</span>     <span class="token comment"># 显示指定节点上的作业信息，如果指定多个节点的话用逗号隔开；</span>
<span class="token parameter variable">-t</span> <span class="token operator">&lt;</span>state_list<span class="token operator">&gt;</span>    <span class="token comment"># 显示指定状态的作业信息，如果指定多个状态的话用逗号隔开；</span>
<span class="token parameter variable">-u</span> <span class="token operator">&lt;</span>user_list<span class="token operator">&gt;</span>     <span class="token comment"># 显示指定用户的作业信息，如果是多个用户的话用逗号隔开；</span>
<span class="token parameter variable">-w</span> <span class="token operator">&lt;</span>hostlist<span class="token operator">&gt;</span>      <span class="token comment"># 显示指定节点上运行的作业，如果是多个节点的话用逗号隔开；</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>按照指定输出格式输出:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-o</span> <span class="token operator">&lt;</span>output_format<span class="token operator">&gt;</span>    显示指定的输出信息，指定的方式为%<span class="token punctuation">[</span><span class="token punctuation">[</span>.<span class="token punctuation">]</span>size<span class="token punctuation">]</span>type，size表示输出项的显示长度，type为需要显示的信息。可以指定显示的常见信息如下；
%a 账户信息
%C 核心数
%D 节点数
%i 作业ID
%j 作业名
%l 作业时限
%P 分区
%q 优先级
%R 状态PD作业显示原因，状态R的作业显示节点
%T 状态
%u 用户
%M 已运行时间
<span class="token comment"># 例:squeue -o “%.18i %.9P %.12j %.12u %.12T %.12M %.16l %.6D %R”</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),d={href:"https://slurm.schedmd.com/squeue.html",target:"_blank",rel:"noopener noreferrer"};function u(v,m){const a=r("ExternalLinkIcon");return n(),t("div",null,[p,s("p",null,[s("a",d,[l("更多使用详情"),o(a)])])])}const g=e(c,[["render",u],["__file","squeue.html.vue"]]);export{g as default};
