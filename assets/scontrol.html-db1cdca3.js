import{_ as e,P as n,Q as o,$ as a,a0 as t,a1 as c,a3 as r,C as l}from"./framework-62102715.js";const p={},d=r(`<h3 id="scontrol-查看作业详细信息" tabindex="-1"><a class="header-anchor" href="#scontrol-查看作业详细信息" aria-hidden="true">#</a> scontrol 查看作业详细信息</h3><p>可以通过 <code>scontrol</code> 或者 <code>sacct</code> 查询正常运行或者已经执行完的作业的相关信息</p><ul><li><p><strong>scontrol</strong></p><p>通过 <code>scontrol</code> 可以查询仍在运行的作业详细信息，如下所示</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看作业 119 的详细信息</span>
scontrol show job <span class="token number">119</span>
</code></pre></div></li><li><p><strong>sacct</strong></p><p>通过 <code>sacct</code> 查询已经结束作业的相关信息，如下所示</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>sacct <span class="token parameter variable">-j</span> <span class="token number">119</span>
</code></pre></div><p>还可以通过format指定输出格式:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">format</span><span class="token operator">=</span>jobid,jobname,partition,nodelist,alloccpus,state,end
sacct <span class="token parameter variable">--format</span><span class="token operator">=</span><span class="token variable">$format</span> <span class="token parameter variable">-j</span> <span class="token number">119</span>
</code></pre></div></li></ul>`,3),i={href:"https://slurm.schedmd.com/sacct.html",target:"_blank",rel:"noopener noreferrer"};function h(m,u){const s=l("ExternalLinkIcon");return n(),o("div",null,[d,a("p",null,[a("a",i,[t("更多关于sacct的使用"),c(s)])])])}const _=e(p,[["render",h],["__file","scontrol.html.vue"]]);export{_ as default};