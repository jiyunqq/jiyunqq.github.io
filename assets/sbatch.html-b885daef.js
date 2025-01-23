import{_ as d,P as a,Q as t,$ as e,a0 as n,a1 as s,a3 as l,C as r}from"./framework-62102715.js";const v={},c=l(`<h3 id="sbatch" tabindex="-1"><a class="header-anchor" href="#sbatch" aria-hidden="true">#</a> sbatch</h3><p>sbatch用于提交作业到作业调度系统中。先编写作业脚本，然后使用sbatch命令提交。提交后脚本将在分配的计算节点中运行。</p><ul><li><strong>一个简单的例子</strong></li></ul><p>以下为一个作业脚本内容</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
#SBATCH -o job.%j.out
#SBATCH -p cpu
#SBATCH -J myFirstJob
#SBATCH --nodes=1
#SBATCH --ntasks-per-node=1

hostname

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),u={href:"http://xn--job-c88dp7a01di7ku82biddkw4cxly6x0aroa.sh",target:"_blank",rel:"noopener noreferrer"},m=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sbatch job.sh

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的脚本参数说明如下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#SBATCH -o job.%j.out       # 脚本执行的输出将被保存在job.%j.out文件下，%j表示作业号;
#SBATCH -p cpu              # 作业提交的指定分区为cpu;
#SBATCH -J myFirstJob       # 作业在调度系统中的作业名为myFirstJob;
#SBATCH --nodes=1           # 申请节点数为1,如果作业不能跨节点(MPI)运行, 申请的节点数应不超过1;
#SBATCH --ntasks-per-node=1 # 每个节点上运行一个任务，可理解为每个节点使用一个核心，如果程序不支持多线程(如openmp);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>一个gpu作业例子</strong></li></ul><p>该作业脚本提交后，将申请1个节点，6个核心，1块GPU卡，脚本将在分配到的计算节点上执行nvidia-smi</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
#SBATCH -o job.%j.out
#SBATCH --partition=gpu
#SBATCH -J myFirstGPUJob
#SBATCH --nodes=1                 # 申请一个节点
#SBATCH --ntasks-per-node=6
#SBATCH --gres=gpu:1              # 每个节点上申请一块GPU卡

nvidia-smi

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="一个mpi并行作业例子" tabindex="-1"><a class="header-anchor" href="#一个mpi并行作业例子" aria-hidden="true">#</a> 一个MPI并行作业例子</h3><p>以下作业脚本将申请两个节点，每个节点申请32个核心，随后并行执行 mpijob 作业</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
#SBATCH -o job.%j.out
#SBATCH --partition=cpu
#SBATCH -J myFirstMPIJob
#SBATCH --nodes=2
#SBATCH --ntasks-per-node=32

# 导入MPI运行环境
module load intel/2017.1

# 导入MPI应用程序
module load mpijob/2023

# 生成 machinefile
srun hostname -s | sort -n &gt;slurm.hosts

# 执行MPI并行计算程序
mpirun -n $SLURM_NPROCS -machinefile slurm.hosts mpijob &gt; log

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>常用参数</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>--help          # 显示帮助信息；
-A &lt;account&gt;    # 指定计费账户；
-D, --chdir=&lt;directory&gt;      # 指定工作目录；
--get-user-env    # 获取当前的环境变量；
--gres=&lt;list&gt;     # 使用gpu这类资源，如申请两块gpu则--gres=gpu:2
-J, --job-name=&lt;jobname&gt;    # 指定该作业的作业名；
--mail-type=&lt;type&gt;    # 指定状态发生时，发送邮件通知，有效种类为（NONE, BEGIN, END, FAIL, REQUEUE, ALL）；
--mail-user=&lt;user&gt;    # 发送给指定邮箱；
-n, --ntasks=&lt;number&gt;    # sbatch并不会执行任务，当需要申请相应的资源来运行脚本，默认情况下一个任务一个核心，--cpus-per-task参数可以修改该默认值；
-c, --cpus-per-task=&lt;ncpus&gt;   # 每个任务所需要的核心数，默认为1；
--ntasks-per-node=&lt;ntasks&gt;    # 每个节点的任务数，--ntasks参数的优先级高于该参数，如果使用--ntasks这个参数，那么将会变为每个节点最多运行的任务数；
-o, --output=&lt;filename pattern&gt;      # 输出文件，作业脚本中的输出将会输出到该文件；
-p, --partition=&lt;partition_names&gt;    # 将作业提交到对应分区；
-q, --qos=&lt;qos&gt;      # 指定QOS；
-t, --time=&lt;time&gt;    # 允许作业运行的最大时间；
-w, --nodelist=&lt;node name list&gt;  # 指定申请的节点；
-x, --exclude=&lt;node name list&gt;   # 排除指定的节点；

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),o={href:"https://slurm.schedmd.com/sbatch.html",target:"_blank",rel:"noopener noreferrer"};function b(p,g){const i=r("ExternalLinkIcon");return a(),t("div",null,[c,e("p",null,[e("a",u,[n("假设该脚本的文件名为job.sh"),s(i)]),n("，那么通过以下命令提交作业")]),m,e("p",null,[e("a",o,[n("更多使用详情"),s(i)])])])}const x=d(v,[["render",b],["__file","sbatch.html.vue"]]);export{x as default};
