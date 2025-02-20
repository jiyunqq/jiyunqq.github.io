import{_ as a,P as n,Q as s,a3 as e}from"./framework-62102715.js";const t={},p=e(`<h2 id="单节点运行-matlab" tabindex="-1"><a class="header-anchor" href="#单节点运行-matlab" aria-hidden="true">#</a> 单节点运行 matlab</h2><p>matlab 串行程序使用一个 cpu 核计算, matlab 并行程序使用多个 cpu 核计算</p><blockquote><p>即使用户申请了多个 cpu 核, 串行程序也不会自动变成并行程序</p><p>并行计算必须要由用户自行编写并行代码</p></blockquote><p>在单个计算节点上运行 matlab 串行或并行程序, 作业脚本示例如下</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment">#SBATCH --partition=compute</span>
<span class="token comment">#SBATCH --nodes=1</span>
<span class="token comment">#SBATCH --ntasks-per-node=1   # 设置为所需要的 cpu 核数</span>
<span class="token comment">#SBATCH --time=72:00:00</span>

<span class="token builtin class-name">export</span> <span class="token assign-left variable">MATLAB_PREFDIR</span><span class="token operator">=</span>/share/tmp/<span class="token variable">\${<span class="token environment constant">USER</span>}</span>_matlab <span class="token comment"># 为用户指定不同的 matlab 配置文件目录</span>

<span class="token builtin class-name">cd</span> <span class="token variable">$SLURM_SUBMIT_DIR</span>

module load matlab

matlab <span class="token parameter variable">-nosplash</span> <span class="token parameter variable">-nodisplay</span> <span class="token parameter variable">-nodesktop</span> <span class="token operator">&lt;</span> job.m
</code></pre></div>`,5),o=[p];function l(c,r){return n(),s("div",null,o)}const i=a(t,[["render",l],["__file","matlab.html.vue"]]);export{i as default};
