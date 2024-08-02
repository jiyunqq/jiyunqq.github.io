import{_ as u,P as m,Q as d,S as p,$ as n,a0 as s,a1 as e,a2 as l,C as c}from"./framework-62102715.js";const b={},v=n("h3",{id:"终端登录",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#终端登录","aria-hidden":"true"},"#"),s(" 终端登录")],-1),k=n("li",null,[n("p",null,[n("code",null,"vim job.slurm"),s(" 编辑修改作业脚本")])],-1),h=n("li",null,[n("p",null,[n("code",null,"sbatch job.slurm"),s(" 提交作业")])],-1),_=n("h3",{id:"启动-gui-程序",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#启动-gui-程序","aria-hidden":"true"},"#"),s(" 启动 gui 程序")],-1),g=n("ol",null,[n("li",null,[s("下载安装 "),n("code",null,"MobaXterm"),s(" 软件, 登录后, 直接运行 gui 程序即可.")])],-1),C=n("h3",{id:"作业提交",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#作业提交","aria-hidden":"true"},"#"),s(" 作业提交")],-1),S=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token punctuation"},"["),s("user1@login ~"),n("span",{class:"token punctuation"},"]"),s("$ "),n("span",{class:"token builtin class-name"},"cd"),s(` work01/
`),n("span",{class:"token punctuation"},"["),s("user1@login work01"),n("span",{class:"token punctuation"},"]"),s("$ "),n("span",{class:"token function"},"cat"),s(` soft.slurm
`),n("span",{class:"token comment"},"#!/bin/sh"),s(`
`),n("span",{class:"token comment"},"#SBATCH --partition=cpu"),s(`
`),n("span",{class:"token comment"},"#SBATCH --job-name=cpujob"),s(`
`),n("span",{class:"token comment"},"#SBATCH --nodes=2"),s(`
`),n("span",{class:"token comment"},"#SBATCH --ntasks-per-node=4"),s(`

module load compiler mkl mpi
mpirun `),n("span",{class:"token parameter variable"},"-np"),s(),n("span",{class:"token variable"},"$SLURM_NPROCS"),s(" hello "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token function"},"tee"),s(` output
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token punctuation"},"["),s("user1@login ~"),n("span",{class:"token punctuation"},"]"),s("$ "),n("span",{class:"token builtin class-name"},"cd"),s(` work01/
`),n("span",{class:"token punctuation"},"["),s("user1@login work01"),n("span",{class:"token punctuation"},"]"),s("$ "),n("span",{class:"token function"},"cat"),s(` cluster.slurm
`),n("span",{class:"token comment"},"#!/bin/sh"),s(`
`),n("span",{class:"token comment"},"#SBATCH --partition=gpu"),s(`
`),n("span",{class:"token comment"},"#SBATCH --job-name=gpujob"),s(`
`),n("span",{class:"token comment"},"#SBATCH --nodes=2"),s(`
`),n("span",{class:"token comment"},"#SBATCH --ntasks-per-node=4"),s(`
`),n("span",{class:"token comment"},"#SBATCH --gres=gpu:4"),s(`
`),n("span",{class:"token comment"},"#SBATCH --gpus-per-task=1"),s(`

module load compiler mkl mpi
module load cuda/11.6
module load gpujob
mpirun `),n("span",{class:"token parameter variable"},"-np"),s(),n("span",{class:"token variable"},"$SLURM_NPROCS"),s(" gpujob "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token function"},"tee"),s(` output
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),B=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s(`
`),n("span",{class:"token function"},"cat"),s(` job.slurm

`),n("span",{class:"token comment"},"#!/bin/bash"),s(`
`),n("span",{class:"token comment"},"#SBATCH --job-name=test"),s(`
`),n("span",{class:"token comment"},"#SBATCH --output=test_%j.out"),s(`
`),n("span",{class:"token comment"},"#SBATCH --error=test_%j.err"),s(`
`),n("span",{class:"token comment"},"#SBATCH --partition compute"),s(`
`),n("span",{class:"token comment"},"#SBATCH --nodes=1"),s(`
`),n("span",{class:"token comment"},"#SBATCH --tasks-per-node=2"),s(`
`),n("span",{class:"token comment"},"#SBATCH --cpus-per-task=1"),s(`
python job.py

sbatch job.slurm
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),T=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"cat"),s(` pwmat.slurm

`),n("span",{class:"token comment"},"#!/bin/bash"),s(`
`),n("span",{class:"token comment"},"#SBATCH -o job.%j.out"),s(`
`),n("span",{class:"token comment"},"#SBATCH --partition=compute"),s(`
`),n("span",{class:"token comment"},"#SBATCH -J myFirstMPIJob"),s(`
`),n("span",{class:"token comment"},"#SBATCH --nodes=2"),s(`
`),n("span",{class:"token comment"},"#SBATCH --ntasks-per-node=32"),s(`

`),n("span",{class:"token comment"},"# 导入MPI运行环境"),s(`
module load intel/2017.1

`),n("span",{class:"token comment"},"# 导入MPI应用程序"),s(`
module load pwmat/2023.12.25

`),n("span",{class:"token comment"},"# 生成 machinefile"),s(`
srun `),n("span",{class:"token function"},"hostname"),s(),n("span",{class:"token parameter variable"},"-s"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token function"},"sort"),s(),n("span",{class:"token parameter variable"},"-n"),s(),n("span",{class:"token operator"},">"),s(`slurm.hosts

`),n("span",{class:"token comment"},"# 执行MPI并行计算程序"),s(`
mpirun `),n("span",{class:"token parameter variable"},"-n"),s(),n("span",{class:"token number"},"64"),s(),n("span",{class:"token parameter variable"},"-machinefile"),s(" slurm.hosts PWmat "),n("span",{class:"token operator"},">"),s(` log

sbatch pwmat.slurm
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),H=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"cat"),s(` pwmat.slurm

`),n("span",{class:"token comment"},"#!/bin/sh"),s(`
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

sbatch pwmat.slurm
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("srun "),n("span",{class:"token parameter variable"},"--time"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"1"),s(":00:00 "),n("span",{class:"token parameter variable"},"--nodes"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"1"),s(),n("span",{class:"token parameter variable"},"--ntasks"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"32"),s(),n("span",{class:"token parameter variable"},"--partition"),n("span",{class:"token operator"},"="),s("gpu "),n("span",{class:"token parameter variable"},"--pty"),s(),n("span",{class:"token function"},"bash"),s(`
`)])])],-1),f={class:"hint-container tip"},j={class:"hint-container-title"},y=n("ul",null,[n("li",null,[n("blockquote",null,[n("p",null,[n("code",null,"module ava"),s(),n("strong",null,"查看集群里 module 的版本, 对上面脚本做相应修改")])])]),n("li",null,[n("blockquote",null,[n("p",null,[n("code",null,"sinfo"),s(),n("em",null,"查看集群里 partition 信息, 对所使用分区做相应修改")])])])],-1),w=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,`sbatch job.slurm
`)])],-1),$={class:"hint-container tip"},P={class:"hint-container-title"},M=n("li",null,[n("strong",null,[s("禁止使用 "),n("code",null,"yum update"),s(" 或 "),n("code",null,"yum upgrade"),s(" 升级系统, (特别是 glibc, kernel 等系统核心组件)")])],-1),N=n("li",null,[n("em",null,"尽量不要使用 root 超级用户"),s(", 除非是添加用户，维护系统等必须要使用 root 权限的操作.")],-1),R={class:"hint-container danger"},I={class:"hint-container-title"},O=n("ul",null,[n("li",null,"禁止用户直接在登陆节点上运行计算程序"),n("li",null,"请不要直接在管理登录节点进行 TB 级别数据拷贝!!!")],-1);function V(L,U){const a=c("Badge"),r=c("CodeTabs");return m(),d("div",null,[p(` <p>{{ $constants.MY_CONSTANT }}</p>

{{ $constants.my_ip }}

<Badge :text="$constants.my_ip" type="tip" vertical="middle" /> `),v,n("ol",null,[n("li",null,[n("p",null,[s("ssh 终端登录管理登录节点"),e(a,{text:"入口ip",type:"tip",vertical:"middle"}),s(", "),e(a,{text:"端口号(缺省 22)",type:"tip",vertical:"middle"})])]),k,h]),_,g,C,n("ol",null,[n("li",null,[e(a,{type:"tip",text:"编写",vertical:"middle"}),s(" 作业脚本, 如下示例"),e(r,{id:"38",data:[{title:"2 node cpu"},{title:"2 node gpu"},{title:"普通作业"},{title:"mpi 作业"},{title:"mpi 作业 + gpu"},{title:"交互式作业"}],"tab-id":"shell"},{tab0:l(({title:t,value:i,isActive:o})=>[S]),tab1:l(({title:t,value:i,isActive:o})=>[A]),tab2:l(({title:t,value:i,isActive:o})=>[B]),tab3:l(({title:t,value:i,isActive:o})=>[T]),tab4:l(({title:t,value:i,isActive:o})=>[H]),tab5:l(({title:t,value:i,isActive:o})=>[x]),_:1}),n("div",f,[n("p",j,[e(a,{type:"tip",text:"提示 tip"})]),y])]),n("li",null,[n("p",null,[s("准备作业输入文件, "),e(a,{type:"tip",text:"sbatch",vertical:"middle"}),s(" 提交作业")]),w])]),n("div",$,[n("p",P,[e(a,{type:"tip",text:"提示 tip"})]),n("ul",null,[M,N,n("li",null,[s("具备一定的 linux 系统管理经验的用户才可以使用 root 进行维护工作, "),e(a,{text:"维护完退出 root 账号",type:"info",vertical:"middle"}),s(".")])])]),n("div",R,[n("p",I,[e(a,{type:"danger",text:"注意 Caution"})]),O])])}const J=u(b,[["render",V],["__file","index.html.vue"]]);export{J as default};
