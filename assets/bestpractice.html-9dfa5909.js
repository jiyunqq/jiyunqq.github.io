import{_ as a,P as e,Q as n,a3 as s}from"./framework-62102715.js";const c={},t=s(`<h2 id="基础软件加载方法" tabindex="-1"><a class="header-anchor" href="#基础软件加载方法" aria-hidden="true">#</a> 基础软件加载方法</h2><h3 id="conda-加载方法" tabindex="-1"><a class="header-anchor" href="#conda-加载方法" aria-hidden="true">#</a> conda 加载方法</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>module load conda/3-2020.07
<span class="token builtin class-name">source</span> /share/app/conda/conda3/etc/profile.d/conda.sh
<span class="token function">which</span> python
conda activate base
conda deactivate
</code></pre></div><h3 id="oneapi-加载方法" tabindex="-1"><a class="header-anchor" href="#oneapi-加载方法" aria-hidden="true">#</a> oneapi 加载方法</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>module load mkl mpi compiler
<span class="token function">which</span> mpirun
</code></pre></div><h3 id="gcc-加载方法" tabindex="-1"><a class="header-anchor" href="#gcc-加载方法" aria-hidden="true">#</a> gcc 加载方法</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>scl <span class="token builtin class-name">enable</span> devtoolset-11 <span class="token function">bash</span>
或
<span class="token builtin class-name">source</span> /opt/rh/devtoolset-11/enable

gcc <span class="token parameter variable">--version</span>
scl <span class="token parameter variable">--list</span>
scl <span class="token parameter variable">--help</span>
</code></pre></div>`,7),o=[t];function d(l,i){return e(),n("div",null,o)}const h=a(c,[["render",d],["__file","bestpractice.html.vue"]]);export{h as default};
