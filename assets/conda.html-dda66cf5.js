import{_ as a,P as n,Q as s,a3 as e}from"./framework-62102715.js";const c={},o=e(`<h2 id="通过-conda-安装软件" tabindex="-1"><a class="header-anchor" href="#通过-conda-安装软件" aria-hidden="true">#</a> 通过 conda 安装软件</h2><p>Conda 是一个开源的软件包管理系统和环境管理系统，用于安装多个版本的软件包及其依赖关系，并在它们之间轻松切换， Conda支持Python、R、 Ruby、 Lua、 Scala、 Java、 JavaScript、 C/ C++、 FORTRAN等多种语言</p><h3 id="conda安装" tabindex="-1"><a class="header-anchor" href="#conda安装" aria-hidden="true">#</a> Conda安装</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 获得最新的miniconda安装包；</span>
<span class="token function">wget</span> https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh

<span class="token comment"># 安装到自己的HOME目录下software/miniconda3中，这个目录在安装前不能存在；</span>
<span class="token function">sh</span> Miniconda3-latest-Linux-x86_64.sh <span class="token parameter variable">-b</span> <span class="token parameter variable">-p</span> <span class="token variable">\${<span class="token environment constant">HOME</span>}</span>/software/miniconda3

<span class="token comment"># 安装成功后删除安装包</span>
<span class="token function">rm</span> <span class="token parameter variable">-f</span> Miniconda3-latest-Linux-x86_64.sh

<span class="token comment"># 将环境变量写入~/.bashrc文件中；</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;export PATH=<span class="token variable">\${<span class="token environment constant">HOME</span>}</span>/software/miniconda3/bin:\\<span class="token environment constant">$PATH</span>&quot;</span> <span class="token operator">&gt;&gt;</span> ~/.bashrc

<span class="token comment"># 退出重新登录或者执行以下命令</span>
<span class="token builtin class-name">source</span> ~/.bashrc
</code></pre></div><h3 id="conda使用" tabindex="-1"><a class="header-anchor" href="#conda使用" aria-hidden="true">#</a> Conda使用</h3><h4 id="conda创建虚拟环境" tabindex="-1"><a class="header-anchor" href="#conda创建虚拟环境" aria-hidden="true">#</a> Conda创建虚拟环境</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>conda info <span class="token parameter variable">-e</span> <span class="token comment"># 查看已有的conda环境； </span>

<span class="token builtin class-name">source</span> activate env_name <span class="token comment"># 进入指定的conda环境； </span>

conda deactivate <span class="token comment"># 退出当前的conda环境； </span>

conda create <span class="token parameter variable">-n</span> env_name <span class="token punctuation">[</span>python<span class="token operator">=</span><span class="token punctuation">]</span> <span class="token comment"># 创建环境，并指定python版本，或者安装包等； </span>

conda remove <span class="token parameter variable">-n</span> env_name <span class="token parameter variable">--all</span> <span class="token comment"># 删除指定环境；</span>
</code></pre></div><h4 id="conda安装软件" tabindex="-1"><a class="header-anchor" href="#conda安装软件" aria-hidden="true">#</a> Conda安装软件</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>conda list <span class="token punctuation">[</span>-n env_name<span class="token punctuation">]</span> <span class="token comment"># 查看当前环境(指定环境)下安装的包； </span>

conda search pkg_name <span class="token comment"># 查看安装包； </span>

conda update pkg_name <span class="token comment"># 更新指定的安装包； </span>

conda remove pkg_name <span class="token comment"># 卸载指定的安装包</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),t=[o];function i(p,d){return n(),s("div",null,t)}const r=a(c,[["render",i],["__file","conda.html.vue"]]);export{r as default};
