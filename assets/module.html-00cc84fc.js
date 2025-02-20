import{_ as l,P as t,Q as i,$ as n,a1 as o,a3 as a,a0 as s,C as d}from"./framework-62102715.js";const p={},c=a(`<h2 id="通过-module-安装软件" tabindex="-1"><a class="header-anchor" href="#通过-module-安装软件" aria-hidden="true">#</a> 通过 module 安装软件</h2><p>module是一款环境变量管理工具，集群平台安装了很多公共软件，并通过module进行环境变量的管理， 通过 <code>module avail</code> 即可查看已安装的软件环境</p><h3 id="常见指令" tabindex="-1"><a class="header-anchor" href="#常见指令" aria-hidden="true">#</a> 常见指令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>module <span class="token builtin class-name">help</span>       <span class="token comment"># 显示帮助信息</span>
module avail      <span class="token comment"># 显示已经安装的软件环境</span>
module load       <span class="token comment"># 导入相应的软件环境</span>
module unload     <span class="token comment"># 删除相应的软件环境</span>
module list       <span class="token comment"># 列出已经导入的软件环境</span>
module purge      <span class="token comment"># 清除所有已经导入的软件环境</span>
module switch <span class="token punctuation">[</span>mod1<span class="token punctuation">]</span> mod2 <span class="token comment"># 删除mod1并导入mod2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),r={class:"hint-container tip"},u={class:"hint-container-title"},m=n("p",null,[s("建议不要同时 "),n("code",null,"module load"),s(" 多个软件，因为不同软件间可能是有冲突的。 比较好的方式是 "),n("code",null,"module load"),s(" 一个或一组相互依赖的软件，软件运行完后运行 "),n("code",null,"module purge"),s(" 清除导入的环境， 然后再导入另外一个或一组相互依赖的软件")],-1),v=a(`<h3 id="使用例子" tabindex="-1"><a class="header-anchor" href="#使用例子" aria-hidden="true">#</a> 使用例子</h3><p>查看集群现有软件环境</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>module avail
</code></pre></div><p>查看matlab软件环境</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>module avail matlab
</code></pre></div><p>导入matlab/R2017a软件环境</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>module load matlab/R2017a
</code></pre></div><p>清除已导入的环境</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>module purge
</code></pre></div><h3 id="编写自己的modulefile" tabindex="-1"><a class="header-anchor" href="#编写自己的modulefile" aria-hidden="true">#</a> 编写自己的modulefile</h3><p>部分用户可能会希望将自己的软件环境加到module中进行管理，可以按以下方法操作</p><p><strong>Step 1：创建目录来存放modulefile</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token variable">\${<span class="token environment constant">HOME</span>}</span>/mymodulefiles   <span class="token comment"># 创建目录用于放自己的module file</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;export MODULEPATH=<span class="token variable">\${<span class="token environment constant">HOME</span>}</span>/mymodulefiles:\\<span class="token variable">$MODULEPATH</span>&quot;</span> <span class="token operator">&gt;&gt;</span> ~/.bashrc
<span class="token builtin class-name">source</span> ~/.bashrc <span class="token comment"># 或者退出重新登录即可</span>

<span class="token comment"># 以下开始编写自己的第一个module file</span>
<span class="token builtin class-name">cd</span> <span class="token variable">\${<span class="token environment constant">HOME</span>}</span>/mymodulefiles
<span class="token function">vim</span> myfirstmodulefile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Step 2：编写modulefile，以安装在自己目录下的gcc@7.2.0为例</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#%Module1.0</span>
<span class="token comment">##</span>
<span class="token comment">##</span>
module-whatis <span class="token string">&quot;my first modulefile&quot;</span>

<span class="token builtin class-name">set</span> topdir <span class="token string">&quot;/gpfs/share/home/xxxxxxxxx/gcc/7.2.0&quot;</span>
prepend-path <span class="token environment constant">PATH</span> <span class="token string">&quot;<span class="token variable">\${topdir}</span>/bin&quot;</span>
prepend-path LIBRARY_PATH <span class="token string">&quot;<span class="token variable">\${topdir}</span>/lib&quot;</span>
prepend-path LD_LIBRARY_PATH <span class="token string">&quot;<span class="token variable">\${topdir}</span>/lib&quot;</span>
prepend-path LIBRARY_PATH <span class="token string">&quot;<span class="token variable">\${topdir}</span>/lib64&quot;</span>
prepend-path LD_LIBRARY_PATH <span class="token string">&quot;<span class="token variable">\${topdir}</span>/lib64&quot;</span>
prepend-path CPATH <span class="token string">&quot;<span class="token variable">\${topdir}</span>/include&quot;</span>
prepend-path CMAKE_PREFIX_PATH <span class="token string">&quot;<span class="token variable">\${topdir}</span>&quot;</span>
setenv CC <span class="token string">&quot;<span class="token variable">\${topdir}</span>/bin/gcc&quot;</span>
setenv CXX <span class="token string">&quot;<span class="token variable">\${topdir}</span>/bin/g++&quot;</span>
setenv FC <span class="token string">&quot;<span class="token variable">\${topdir}</span>/bin/gfortran&quot;</span>
setenv F77 <span class="token string">&quot;<span class="token variable">\${topdir}</span>/bin/gfortran&quot;</span>
setenv F90 <span class="token string">&quot;<span class="token variable">\${topdir}</span>/bin/gfortran&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编写好后执行 <code>module avail</code> 即可查看到刚刚写好的 modulefile 了</p><h3 id="modulefile-常见语法" tabindex="-1"><a class="header-anchor" href="#modulefile-常见语法" aria-hidden="true">#</a> modulefile 常见语法</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">set</span>           <span class="token comment"># 设置modulefile内部的变量</span>
setenv        <span class="token comment"># 设置环境变量</span>
prepend-path  <span class="token comment"># 效果类似于export PATH=xxx:$PATH</span>
append-path   <span class="token comment"># 效果类似export PATH=$PATH:xxx</span>
</code></pre></div><blockquote><p>例子</p></blockquote><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#%Module 1.0</span>

conflict intel/2020
module load intel/2016

module-whatis my first modulefile

<span class="token builtin class-name">set</span> topdir /share/app/gcc/7.2.0

prepend-path <span class="token environment constant">PATH</span> <span class="token variable">\${topdir}</span>/bin

setenv       CC   <span class="token variable">\${topdir}</span>/bin/gcc
</code></pre></div>`,20);function b(h,k){const e=d("Badge");return t(),i("div",null,[c,n("div",r,[n("p",u,[o(e,{type:"tip",text:"注 tip"})]),m]),v])}const f=l(p,[["render",b],["__file","module.html.vue"]]);export{f as default};
