import{_ as e,P as a,Q as t,a3 as l}from"./framework-62102715.js";const c={},o=l(`<h1 id="hpc集群开关机" tabindex="-1"><a class="header-anchor" href="#hpc集群开关机" aria-hidden="true">#</a> hpc集群开关机</h1><h2 id="hpc集群开机" tabindex="-1"><a class="header-anchor" href="#hpc集群开机" aria-hidden="true">#</a> hpc集群开机</h2><ol><li><p>管理登录节点加电 - 等待 5-10 分钟 完全启动</p></li><li><p>其它节点加电</p><div class="language-text" data-ext="text"><pre class="language-text"><code>rpower all on
</code></pre></div></li></ol><h2 id="hpc集群关机" tabindex="-1"><a class="header-anchor" href="#hpc集群关机" aria-hidden="true">#</a> hpc集群关机</h2><ol><li><p>停应用软件, 作业等</p></li><li><p>所有节点卸载存储</p><div class="language-text" data-ext="text"><pre class="language-text"><code>psh all &quot;umount /share&quot;
</code></pre></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>卸载不掉, 可以使用 <code>umount -l /share</code></p></div></li><li><p>关闭计算节点</p><div class="language-text" data-ext="text"><pre class="language-text"><code>psh all &quot;shutdown -h now&quot;
</code></pre></div></li><li><p>管理节点关机</p><div class="language-text" data-ext="text"><pre class="language-text"><code>shutdown -h now
</code></pre></div></li></ol>`,5),n=[o];function d(i,s){return a(),t("div",null,n)}const p=e(c,[["render",d],["__file","onoff.html.vue"]]);export{p as default};