import{_ as a,P as l,Q as s,$ as e,a0 as i,a1 as t,a3 as d,C as c}from"./framework-62102715.js";const r={},o=d(`<h3 id="scancel" tabindex="-1"><a class="header-anchor" href="#scancel" aria-hidden="true">#</a> scancel</h3><p>用于取消已经提交的作业。</p><ul><li><strong>取消指定ID作业</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 取消作业ID为123的作业
scancel 123

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>取消当前上机帐号上所有的作业</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 注意whoami前后不是单引号
scancel -u \`whoami\`

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>取消当前用户下所有状态为PENDING的作业</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>scancel -t PENDING -u \`whoami\`

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>常见参数</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>--help                # 显示scancel命令的使用帮助信息；
-A &lt;account&gt;          # 取消指定账户的作业，如果没有指定job_id,将取消所有；
-n &lt;job_name&gt;         # 取消指定作业名的作业；
-p &lt;partition_name&gt;   # 取消指定分区的作业；
-q &lt;qos&gt;              # 取消指定qos的作业；
-t &lt;job_state_name&gt;   # 取消指定作态的作业，&quot;PENDING&quot;, &quot;RUNNING&quot; 或 &quot;SUSPENDED&quot;；
-u &lt;user_name&gt;        # 取消指定用户下的作业；

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),u={href:"https://slurm.schedmd.com/scancel.html",target:"_blank",rel:"noopener noreferrer"};function v(m,g){const n=c("ExternalLinkIcon");return l(),s("div",null,[o,e("p",null,[e("a",u,[i("更多使用详情"),t(n)])])])}const _=a(r,[["render",v],["__file","scancel.html.vue"]]);export{_ as default};
