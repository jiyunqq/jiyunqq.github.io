import{_ as n,P as e,Q as p,$ as a,a0 as t,a1 as o,a3 as l,C as r}from"./framework-62102715.js";const c={},k=l(`<h3 id="salloc" tabindex="-1"><a class="header-anchor" href="#salloc" aria-hidden="true">#</a> salloc</h3><p>先占用资源，然后再运行或者调式作业</p><ul><li><strong>申请单节点，跳转到节点上运行程序</strong></li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>salloc <span class="token parameter variable">-p</span> cpu <span class="token parameter variable">-N1</span> <span class="token parameter variable">-n6</span> <span class="token parameter variable">-t</span> <span class="token number">2</span>:00:00
<span class="token comment"># salloc 申请成功后会返回申请到的节点和作业ID等信息，假设申请到的是n07节点，作业ID为107</span>
<span class="token function">ssh</span> n07       <span class="token comment"># 直接登录到刚刚申请到的节点n07调式作业</span>
scancel <span class="token number">107</span>   <span class="token comment"># 计算资源使用完后取消作业</span>
squeue <span class="token parameter variable">-j</span> <span class="token number">107</span> <span class="token comment"># 查看作业是否还在运行，确保作业已经退出</span>

</code></pre></div><ul><li><strong>申请GPU节点，并跳转到GPU节点上运行程序</strong></li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>salloc <span class="token parameter variable">-p</span> gpu <span class="token parameter variable">-N1</span> <span class="token parameter variable">-n6</span> <span class="token parameter variable">--gres</span><span class="token operator">=</span>gpu:1 <span class="token parameter variable">-t</span> <span class="token number">24</span>:00:00
<span class="token comment"># 假设申请成功后返回的作业号为1078858，申请到的节点是gpu05</span>
<span class="token function">ssh</span> g05       <span class="token comment"># 登录到g05上调式作业</span>
scancel <span class="token number">108</span>   <span class="token comment"># 计算结束后结束任务</span>
squeue <span class="token parameter variable">-j</span> <span class="token number">108</span> <span class="token comment"># 确保作业已经退出</span>
</code></pre></div><ul><li><strong>申请多节点，运行MPI程序</strong></li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>salloc <span class="token parameter variable">-p</span> cpu <span class="token parameter variable">-N2</span> --ntasks-per-node<span class="token operator">=</span><span class="token number">12</span> <span class="token parameter variable">-t</span> <span class="token number">2</span>:00:00
<span class="token comment"># salloc 申请成功后会返回申请到的节点和作业ID等信息，假设申请到的是n[05-06]节点，作业ID为109</span>
<span class="token comment"># 这里申请两个节点，每个节点12个进程，每个进程一个核心</span>

<span class="token comment"># 根据需求导入MPI环境</span>
module load intel/2018.0

<span class="token comment"># 根据以下命令生成MPI需要的machine file</span>
srun <span class="token function">hostname</span> <span class="token parameter variable">-s</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-n</span> <span class="token operator">&gt;</span> slurm.hosts

<span class="token comment"># 跳转到申请到的头节点(第一个节点), 如n05</span>
<span class="token function">ssh</span> n05

<span class="token comment"># 导入计算环境并执行程序</span>
module load intel/2018.0
mpirun <span class="token parameter variable">-np</span> <span class="token number">24</span> <span class="token parameter variable">-machinefile</span> slurm.hosts <span class="token function">hostname</span>

<span class="token comment"># 结束后退出或者结束任务</span>
scancel <span class="token number">109</span>

</code></pre></div><p>当运行调试完程序后切记使用 <code>scancel</code> 释放资源，并执行 <code>squeue</code> 查看作业是否还在运行，避免占用资源却未运行作业造成意料之外的收费。</p><ul><li><strong>常用参数</strong></li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">--help</span>                <span class="token comment"># 显示帮助信息；</span>
<span class="token parameter variable">-A</span> <span class="token operator">&lt;</span>account<span class="token operator">&gt;</span>          <span class="token comment"># 指定计费账户；</span>
-D, <span class="token parameter variable">--chdir</span><span class="token operator">=</span><span class="token operator">&lt;</span>directory<span class="token operator">&gt;</span>        <span class="token comment"># 指定工作目录；</span>
--get-user-env          <span class="token comment"># 获取当前的环境变量；</span>
<span class="token parameter variable">--gres</span><span class="token operator">=</span><span class="token operator">&lt;</span>list<span class="token operator">&gt;</span>          <span class="token comment"># 使用gpu这类资源，如申请两块gpu则--gres=gpu:2</span>
-J, --job-name<span class="token operator">=</span><span class="token operator">&lt;</span>jobname<span class="token operator">&gt;</span>  <span class="token comment"># 指定该作业的作业名；</span>
--mail-type<span class="token operator">=</span><span class="token operator">&lt;</span>type<span class="token operator">&gt;</span>      <span class="token comment"># 指定状态发生时，发送邮件通知，有效种类为（NONE, BEGIN, END, FAIL, REQUEUE, ALL）；</span>
--mail-user<span class="token operator">=</span><span class="token operator">&lt;</span>user<span class="token operator">&gt;</span>      <span class="token comment"># 发送给指定邮箱；</span>
-n, <span class="token parameter variable">--ntasks</span><span class="token operator">=</span><span class="token operator">&lt;</span>number<span class="token operator">&gt;</span>      <span class="token comment"># sbatch并不会执行任务，当需要申请相应的资源来运行脚本，默认情况下一个任务一个核心，--cpus-per-task参数可以修改该默认值；</span>
-c, --cpus-per-task<span class="token operator">=</span><span class="token operator">&lt;</span>ncpus<span class="token operator">&gt;</span>      <span class="token comment"># 每个任务所需要的核心数，默认为1；</span>
--ntasks-per-node<span class="token operator">=</span><span class="token operator">&lt;</span>ntasks<span class="token operator">&gt;</span>      <span class="token comment"># 每个节点的任务数，--ntasks参数的优先级高于该参数，如果使用--ntasks这个参数，那么将会变为每个节点最多运行的任务数；</span>
-o, <span class="token parameter variable">--output</span><span class="token operator">=</span><span class="token operator">&lt;</span>filename pattern<span class="token operator">&gt;</span>    <span class="token comment"># 输出文件，作业脚本中的输出将会输出到该文件；</span>
-p, <span class="token parameter variable">--partition</span><span class="token operator">=</span><span class="token operator">&lt;</span>partition_names<span class="token operator">&gt;</span>    <span class="token comment"># 将作业提交到对应分区；</span>
-q, <span class="token parameter variable">--qos</span><span class="token operator">=</span><span class="token operator">&lt;</span>qos<span class="token operator">&gt;</span>        <span class="token comment"># 指定QOS；</span>
-t, <span class="token parameter variable">--time</span><span class="token operator">=</span><span class="token operator">&lt;</span>time<span class="token operator">&gt;</span>    <span class="token comment"># 设置限定时间；</span>
-w, <span class="token parameter variable">--nodelist</span><span class="token operator">=</span><span class="token operator">&lt;</span>node name list<span class="token operator">&gt;</span>  <span class="token comment"># 指定申请的节点；</span>
-x, <span class="token parameter variable">--exclude</span><span class="token operator">=</span><span class="token operator">&lt;</span>node name list<span class="token operator">&gt;</span>   <span class="token comment"># 排除指定的节点；</span>

</code></pre></div>`,11),m={href:"https://slurm.schedmd.com/salloc.html",target:"_blank",rel:"noopener noreferrer"};function i(u,b){const s=r("ExternalLinkIcon");return e(),p("div",null,[k,a("p",null,[a("a",m,[t("更多使用详情"),o(s)])])])}const g=n(c,[["render",i],["__file","salloc.html.vue"]]);export{g as default};
