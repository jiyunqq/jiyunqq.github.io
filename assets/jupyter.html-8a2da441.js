import{_ as r,P as d,Q as p,a1 as o,a2 as s,$ as e,a0 as a,a3 as i,C as u}from"./framework-62102715.js";const m={},b=e("h2",{id:"jupyter-提交脚本",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#jupyter-提交脚本","aria-hidden":"true"},"#"),a(" jupyter 提交脚本")],-1),h=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token shebang important"},"#!/bin/bash"),a(`

`),e("span",{class:"token comment"},"#SBATCH --job-name=jupyter"),a(`
`),e("span",{class:"token comment"},"#SBATCH --partition=compute"),a(`
`),e("span",{class:"token comment"},"#SBATCH --ntasks-per-node=1"),a(`
`),e("span",{class:"token comment"},"#SBATCH --time=06:00:00"),a(`
`),e("span",{class:"token comment"},"#SBATCH --output=%j.out"),a(`
`),e("span",{class:"token comment"},"#SBATCH --error=%j.err"),a(`

module load jupyter   `),e("span",{class:"token comment"},"# 加载系统预装的jupyter"),a(`

jupyter lab `),e("span",{class:"token parameter variable"},"--ip"),e("span",{class:"token operator"},"="),e("span",{class:"token variable"},[a("${"),e("span",{class:"token environment constant"},"HOSTNAME"),a("}")]),a(),e("span",{class:"token parameter variable"},"--port"),e("span",{class:"token operator"},"="),e("span",{class:"token number"},"8888"),a("  "),e("span",{class:"token comment"},"# 在计算节点的8888端口启动JupyterLab服务"),a(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),v=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token shebang important"},"#!/bin/bash"),a(`

`),e("span",{class:"token comment"},"#SBATCH --job-name=jupyter"),a(`
`),e("span",{class:"token comment"},"#SBATCH --partition=gpu"),a(`
`),e("span",{class:"token comment"},"#SBATCH --gres=gpu:1"),a(`
`),e("span",{class:"token comment"},"#SBATCH --time=06:00:00"),a(`
`),e("span",{class:"token comment"},"#SBATCH --output=%j.out"),a(`
`),e("span",{class:"token comment"},"#SBATCH --error=%j.err"),a(`

module load jupyter   `),e("span",{class:"token comment"},"# 加载系统预装的jupyter"),a(`

jupyter lab `),e("span",{class:"token parameter variable"},"--ip"),e("span",{class:"token operator"},"="),e("span",{class:"token variable"},[a("${"),e("span",{class:"token environment constant"},"HOSTNAME"),a("}")]),a(),e("span",{class:"token parameter variable"},"--port"),e("span",{class:"token operator"},"="),e("span",{class:"token number"},"8888"),a("  "),e("span",{class:"token comment"},"# 在计算节点的8888端口启动JupyterLab服务"),a(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),k=i(`<h3 id="提交查看作业" tabindex="-1"><a class="header-anchor" href="#提交查看作业" aria-hidden="true">#</a> 提交查看作业</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>sbatch jupyterlab.sh
squeue <span class="token parameter variable">-u</span> <span class="token environment constant">$USER</span>
</code></pre></div><h3 id="查看作业输出-关注如下信息" tabindex="-1"><a class="header-anchor" href="#查看作业输出-关注如下信息" aria-hidden="true">#</a> 查看作业输出, 关注如下信息</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>    To access the server, <span class="token function">open</span> this <span class="token function">file</span> <span class="token keyword">in</span> a browser:
        file:///share/home/user1/.local/share/jupyter/runtime/jpserver-17370-open.html
    Or copy and <span class="token function">paste</span> one of these URLs:
        http://n01:8888/lab?token<span class="token operator">=</span>5ab3861accf57e32f1351ab895cb456c30a20cf9cd10f86c
     or http://127.0.0.1:8888/lab?token<span class="token operator">=</span>5ab3861accf57e32f1351ab895cb456c30a20cf9cd10f86c
</code></pre></div><h3 id="映射-计算节点-n01-8888-端口到-登录节点-8888" tabindex="-1"><a class="header-anchor" href="#映射-计算节点-n01-8888-端口到-登录节点-8888" aria-hidden="true">#</a> 映射 计算节点(n01) 8888 端口到 登录节点 8888</h3>`,5),g=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# 在登录节点, 打开一个新的终端窗口, 执行"),a(`
`),e("span",{class:"token function"},"ssh"),a(" -L8888:n01:8888 n01  "),e("span",{class:"token comment"},"# 输入密码登录成功后, 请勿关闭此终端窗口."),a(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),f=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# 在登录节点, 新开一个终端窗口执行, 其中的 n01 为作业输出的计算节点的名字"),a(`
socat TCP-LISTEN:8888,fork,reuseaddr TCP:n01:8888
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),_=i(`<blockquote><p>在本地电脑打开浏览器, 访问登录节点的 8888 端口号, 网址参考提交作业的输出</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>http://mgt:8888/lab?token<span class="token operator">=</span>5ab3861accf57e32f1351ab895cb456c30a20cf9cd10f86c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><blockquote><ol><li><p>如果作业输出提示端口 8888 已在使用中, 请取消此作业, 并修改作业脚本中的 8888 端口(1024 以上的任何端口)</p><p>用户可以自行协商, 每个人用的端口范围</p></li><li><p>作业执行完毕后, 记得关闭上面映射端口的命令, 以免 <code>资源</code> 和 <code>端口</code> 的占用</p></li><li><p>ssh 也可以直接将 n01 的 8888 端口映射到本机; xshell, putty 等终端也可以把端口映射到本地</p></li></ol></blockquote></div>`,3);function j(T,y){const c=u("CodeTabs");return d(),p("div",null,[b,o(c,{id:"3",data:[{title:"cpu"},{title:"gpu"}],active:1},{tab0:s(({title:n,value:t,isActive:l})=>[h]),tab1:s(({title:n,value:t,isActive:l})=>[v]),_:1}),k,o(c,{id:"22",data:[{title:"ssh"},{title:"socat"}],active:1},{tab0:s(({title:n,value:t,isActive:l})=>[g]),tab1:s(({title:n,value:t,isActive:l})=>[f]),_:1}),_])}const A=r(m,[["render",j],["__file","jupyter.html.vue"]]);export{A as default};
