import{_ as e,P as a,Q as d,a3 as n}from"./framework-62102715.js";const i={},c=n(`<h2 id="基础软件加载方法" tabindex="-1"><a class="header-anchor" href="#基础软件加载方法" aria-hidden="true">#</a> 基础软件加载方法</h2><h3 id="conda-加载方法" tabindex="-1"><a class="header-anchor" href="#conda-加载方法" aria-hidden="true">#</a> conda 加载方法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module load conda/3-2020.07
source /share/app/conda/conda3/etc/profile.d/conda.sh
which python
conda activate base
conda deactivate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="oneapi-加载方法" tabindex="-1"><a class="header-anchor" href="#oneapi-加载方法" aria-hidden="true">#</a> oneapi 加载方法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module load mkl mpi compiler
which mpirun
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,5),s=[c];function t(r,l){return a(),d("div",null,s)}const h=e(i,[["render",t],["__file","bestpractice.html.vue"]]);export{h as default};
