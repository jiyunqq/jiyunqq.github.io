import{_ as m,P as r,Q as u,a1 as o,a2 as a,$ as n,a0 as s,a3 as d,C as c}from"./framework-62102715.js";const b={},k=n("h2",{id:"常用作业脚本",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#常用作业脚本","aria-hidden":"true"},"#"),s(" 常用作业脚本")],-1),v=n("p",null,[s("见"),n("a",{href:"/hpc"},"集群指南")],-1),h=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token shebang important"},"#!/bin/sh"),s(`
`),n("span",{class:"token comment"},"#SBATCH --partition=3080ti"),s(`
`),n("span",{class:"token comment"},"#SBATCH --job-name=H2relax"),s(`
`),n("span",{class:"token comment"},"#SBATCH --nodes=1"),s(`
`),n("span",{class:"token comment"},"#SBATCH --ntasks-per-node=4"),s(`
`),n("span",{class:"token comment"},"#SBATCH --gres=gpu:4"),s(`
`),n("span",{class:"token comment"},"#SBATCH --gpus-per-task=1"),s(`

module load compiler mkl mpi
module load cuda/11.6
module load pwmat
mpirun `),n("span",{class:"token parameter variable"},"-np"),s(),n("span",{class:"token variable"},"$SLURM_NPROCS"),s(" PWmat "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token function"},"tee"),s(` output
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token shebang important"},"#!/bin/sh"),s(`
`),n("span",{class:"token comment"},"#SBATCH --partition=3080ti"),s(`
`),n("span",{class:"token comment"},"#SBATCH --job-name=H2relax"),s(`
`),n("span",{class:"token comment"},"#SBATCH --nodes=2"),s(`
`),n("span",{class:"token comment"},"#SBATCH --ntasks-per-node=4"),s(`
`),n("span",{class:"token comment"},"#SBATCH --gres=gpu:4"),s(`
`),n("span",{class:"token comment"},"#SBATCH --gpus-per-task=1"),s(`

module load compiler mkl mpi
module load cuda/11.6
module load pwmat
mpirun `),n("span",{class:"token parameter variable"},"-np"),s(),n("span",{class:"token variable"},"$SLURM_NPROCS"),s(" PWmat "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token function"},"tee"),s(` output
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token shebang important"},"#!/bin/bash"),s(`
`),n("span",{class:"token comment"},"#SBATCH --partition=cpu"),s(`
`),n("span",{class:"token comment"},"#SBATCH --job-name=pwmat_test"),s(`
`),n("span",{class:"token comment"},"#SBATCH --nodes=1"),s(`
`),n("span",{class:"token comment"},"#SBATCH --ntasks-per-node=16"),s(`
`),n("span",{class:"token comment"},"#SBATCH --output=%j.out"),s(`
`),n("span",{class:"token comment"},"#SBATCH --error=%j.err"),s(`

module load mpi mkl
module load pwmat-cpu/20231108-oneapi-2021

mpirun `),n("span",{class:"token parameter variable"},"-np"),s(),n("span",{class:"token variable"},"$SLURM_NPROCS"),s(" PWmat "),n("span",{class:"token parameter variable"},"-host"),s(),n("span",{class:"token number"},"10.0"),s(".0.2 "),n("span",{class:"token number"},"20150"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token function"},"tee"),s(` output

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token shebang important"},"#!/bin/bash"),s(`
`),n("span",{class:"token comment"},"#SBATCH -o job.%j.out"),s(`
`),n("span",{class:"token comment"},"#SBATCH --partition=compute"),s(`
`),n("span",{class:"token comment"},"#SBATCH -J myFirstMPIJob"),s(`
`),n("span",{class:"token comment"},"#SBATCH --nodes=2"),s(`
`),n("span",{class:"token comment"},"#SBATCH --ntasks-per-node=28"),s(`

`),n("span",{class:"token builtin class-name"},"ulimit"),s(),n("span",{class:"token parameter variable"},"-s"),s(` unlimited
module load mpi mkl compiler    `),n("span",{class:"token comment"},"# 导入MPI运行环境"),s(`
module load vasp/6.2.0          `),n("span",{class:"token comment"},"# 导入MPI应用程序"),s(`

srun `),n("span",{class:"token function"},"hostname"),s(),n("span",{class:"token parameter variable"},"-s"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token function"},"sort"),s(),n("span",{class:"token parameter variable"},"-n"),s(),n("span",{class:"token operator"},">"),s("slurm.hosts  "),n("span",{class:"token comment"},"# 生成 machinefile"),s(`
`),n("span",{class:"token comment"},"# 执行MPI并行计算程序"),s(`
mpirun `),n("span",{class:"token parameter variable"},"-np"),s(),n("span",{class:"token variable"},"$SLURM_NPROCS"),s(),n("span",{class:"token parameter variable"},"-f"),s(" slurm.hosts vasp_std "),n("span",{class:"token operator"},">"),s(` log
`),n("span",{class:"token comment"},"#mpirun -np $SLURM_NPROCS vasp_std > log"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=n("h3",{id:"r-作业脚本提交",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#r-作业脚本提交","aria-hidden":"true"},"#"),s(" R 作业脚本提交")],-1),B=d(`<p>而是通过提交脚本</p><ol><li><p>写一个脚本计算并打印前 10 个斐波那契数列的值 <code>vim fibonacci.R</code></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 计算斐波那契数列的函数</span>
fibonacci <span class="token operator">&lt;</span>- function<span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    return<span class="token punctuation">(</span>n<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    return<span class="token punctuation">(</span>fibonacci<span class="token punctuation">(</span>n-1<span class="token punctuation">)</span> + fibonacci<span class="token punctuation">(</span>n-2<span class="token punctuation">))</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment"># 打印前 10 个斐波那契数列的值</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">in</span> <span class="token number">0</span>:9<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  fib_value <span class="token operator">&lt;</span>- fibonacci<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
  print<span class="token punctuation">(</span>fib_value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>编写 slurm 提交脚本, 用于提交作业并在计算节点上运行 R 脚本 <code>vim run_fibonacci.sh</code></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#SBATCH --job-name=fibonacci_job</span>
<span class="token comment">#SBATCH --output=fibonacci_job_%j.out</span>
<span class="token comment">#SBATCH --error=fibonacci_job_%j.err</span>
<span class="token comment">#SBATCH --ntasks=1         # 每节点任务数为1</span>
<span class="token comment">#SBATCH --cpus-per-task=1  # 每任务 1 个 CPU 核心</span>
<span class="token comment">#SBATCH --time=00:10:00</span>

<span class="token comment"># Load R module</span>
module load R

<span class="token comment"># Run R script</span>
Rscript fibonacci.R
</code></pre></div></li><li><p>提交作业并查看</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>sbatch run_fibonacci.sh
squeue
</code></pre></div></li></ol>`,2);function f(A,T){const i=c("CodeTabs"),p=c("Badge");return r(),u("div",null,[k,v,o(i,{id:"6",data:[{title:"1 node"},{title:"2 node"},{title:"pwmat"},{title:"vasp"}],"tab-id":"language"},{tab0:a(({title:e,value:t,isActive:l})=>[h]),tab1:a(({title:e,value:t,isActive:l})=>[_]),tab2:a(({title:e,value:t,isActive:l})=>[g]),tab3:a(({title:e,value:t,isActive:l})=>[C]),_:1}),S,n("p",null,[s("在 hpc 中不使用 "),o(p,{text:"rstudio-server 起网页",type:"warning",vertical:"middle"}),s("的方式运行 R 程序")]),B])}const R=m(b,[["render",f],["__file","demo.html.vue"]]);export{R as default};
