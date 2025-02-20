import{_ as e,P as t,Q as o,$ as a,a0 as n,a1 as p,a2 as c,a3 as l,C as r}from"./framework-62102715.js";const d={},i=a("h3",{id:"python-使用",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#python-使用","aria-hidden":"true"},"#"),n(" python 使用")],-1),h=a("p",null,"Python是一种跨平台的计算机程序设计语言。 是一个高层次的结合了解释性、编译性、互动性和面向对象的脚本语言。 最初被设计用于编写自动化脚本(shell)，随着版本的不断更新和语言新功能的添加，越多被用于独立的、大型项目的开发。",-1),g=a("p",null,"使用Python的用户可以直接用Conda来管理自己的Python运行环境。",-1),u=a("p",null,[a("strong",null,"Step 1. 导入Conda环境")],-1),_=l(`<p><strong>Step 2. 创建Python的虚拟环境</strong></p><p>创建时可以指定Python版本，不指定的话会使用默认的版本(miniconda自带的Python版本)</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>conda create <span class="token parameter variable">-n</span> TensorFlow-1.14.0 <span class="token parameter variable">-y</span>
</code></pre></div><p><strong>Step 3. 进入上一步创建好的环境</strong></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">source</span> activate TensorFlow-1.14.0
</code></pre></div><p><strong>Step 4. 安装相应的库</strong></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>conda <span class="token function">install</span> tensorflow-gpu<span class="token operator">=</span><span class="token number">1.14</span>.0 <span class="token comment"># 根据自己的需要安装相应的库；</span>
</code></pre></div><p><strong>Step 5. 安装 pip 管理库</strong></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>conda <span class="token function">install</span> pip     <span class="token comment"># 环境中需要先安装pip</span>
pip <span class="token function">install</span> numpy     <span class="token comment"># 根据自己的需要安装相应的库</span>
</code></pre></div><p><strong>Step 6. 运行完后退出当前虚拟环境</strong></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>conda deactivate
</code></pre></div>`,11);function m(v,b){const s=r("RouterLink");return t(),o("div",null,[i,h,g,u,a("p",null,[n("在自己的HOME目录安装Conda，具体查看"),p(s,{to:"/soft/conda.html"},{default:c(()=>[n("conda安装")]),_:1})]),_])}const f=e(d,[["render",m],["__file","python.html.vue"]]);export{f as default};
