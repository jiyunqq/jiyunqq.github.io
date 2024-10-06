import{_ as n,P as e,Q as t,$ as s,a0 as l,a1 as o,a3 as i,C as r}from"./framework-62102715.js";const p={},c=i(`<h3 id="sinfo" tabindex="-1"><a class="header-anchor" href="#sinfo" aria-hidden="true">#</a> sinfo</h3><p>查看集群分区状态</p><ul><li><strong>查看集群分区状态</strong></li></ul><div class="language-text" data-ext="text"><pre class="language-text"><code>sinfo
</code></pre></div><p>以上指令将显示集群的所有分区节点的空闲状态，<code>idel</code> 为空闲，<code>mix</code> 为节点部分核心可以使用，<code>alloc</code> 为已被占用;</p><ul><li><strong>查看指定分区的空闲状态</strong></li></ul><div class="language-text" data-ext="text"><pre class="language-text"><code>sinfo -p compute
</code></pre></div><p>以上命令将显示 compute 分区的空闲状态。</p><ul><li><strong>常用参数</strong></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">--help</span>    <span class="token comment"># 显示sinfo命令的使用帮助信息；</span>
<span class="token parameter variable">-d</span>        <span class="token comment"># 查看集群中没有响应的节点；</span>
<span class="token parameter variable">-i</span> <span class="token operator">&lt;</span>seconds<span class="token operator">&gt;</span>     <span class="token comment"># 每隔相应的秒数，对输出的分区节点信息进行刷新</span>
<span class="token parameter variable">-n</span> <span class="token operator">&lt;</span>name_list<span class="token operator">&gt;</span>   <span class="token comment"># 显示指定节点的信息，如果指定多个节点的话用逗号隔开；</span>
<span class="token parameter variable">-N</span>               <span class="token comment"># 按每个节点一行的格式来显示信息；</span>
<span class="token parameter variable">-p</span>               <span class="token comment"># &lt;partition&gt; 显示指定分区的信息，如果指定多个分区的话用逗号隔开；</span>
<span class="token parameter variable">-r</span>               <span class="token comment"># 只显示响应的节点；</span>
<span class="token parameter variable">-R</span>               <span class="token comment"># 显示节点不正常工作的原因；</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>常用命令</strong></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sinfo  <span class="token parameter variable">-o</span> <span class="token string">&#39;%20N %.6D %.6c %15F %12P %f&#39;</span>
sinfo <span class="token parameter variable">-O</span> <span class="token string">&#39;nodehost,available,cpusstate,cpus,gres,partitionname,reason,cpusload,freemem&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>scontrol show <span class="token function">node</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;BEGIN { RS=&quot;NodeName=&quot;; FS=&quot;\\n&quot; } { if (NR &gt; 1) print $1,$2,$5,$(NF-6)}&#39;</span>
scontrol show <span class="token function">node</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-v</span> <span class="token assign-left variable">RS</span><span class="token operator">=</span><span class="token string">&quot;NodeName=&quot;</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;\\n&#39;</span> <span class="token string">&#39;{ if (NR &gt; 1) print $1,$2,$5,$(NF-6)}&#39;</span>
scontrol show <span class="token function">node</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-v</span> <span class="token assign-left variable">RS</span><span class="token operator">=</span><span class="token string">&quot;NodeName=&quot;</span> <span class="token parameter variable">-v</span> <span class="token assign-left variable">FS</span><span class="token operator">=</span><span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span> <span class="token string">&#39;{ if (NR &gt; 1) print $1,$2,$5,$(NF-6)}&#39;</span>
</code></pre></div><p>按照指定格式输出:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-o</span> <span class="token comment">#&lt;output_format&gt;    显示指定的输出信息，指定的方式为%[[.]size]type，“.”表示右对齐,不加的话表示左对齐；</span>
                       size表示输出项的显示长度；type为需要显示的信息。可以指定显示的常见信息如下:
%a 是否可用状态
%A 以<span class="token string">&quot;allocated/idle&quot;</span>的格式来显示节点数，不要和<span class="token string">&quot;%t&quot;</span> or <span class="token string">&quot;%T&quot;</span>一起使用
%c 节点的核心数
%C “allocated/idle/other/total”格式显示核心总数
%D 节点总数
%E 节点不可用的原因
%m 每个节点的内存大小（单位为M）
%N 节点名
%O CPU负载
%P 分区名,作业默认分区带“*”
%r 只有root可以提交作业（yes/no）
%R 分区名
%t 节点状态（紧凑形式）
%T 节点的状态（扩展形式）
例：sinfo <span class="token parameter variable">-o</span> <span class="token string">&quot;%.15P %.5a %.10l %.6D %.6t %N&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),d={href:"https://slurm.schedmd.com/sinfo.html",target:"_blank",rel:"noopener noreferrer"};function v(u,m){const a=r("ExternalLinkIcon");return e(),t("div",null,[c,s("p",null,[s("a",d,[l("更多使用详情"),o(a)])])])}const b=n(p,[["render",v],["__file","sinfo.html.vue"]]);export{b as default};
