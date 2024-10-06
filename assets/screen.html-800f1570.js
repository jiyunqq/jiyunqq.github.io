import{_ as n,P as e,Q as s,a3 as a}from"./framework-62102715.js";const c={},t=a(`<h3 id="screen" tabindex="-1"><a class="header-anchor" href="#screen" aria-hidden="true">#</a> Screen</h3><p>Screen是一款由GNU开发的用于命令行终端切换的自由软件。 用户在连接Shell后，经常会遇到长时间未交互而导致Shell中断， 进而导致Shell中运行中的命令中断的情况，可以使用Screen解决该问题。</p><h3 id="screen基本使用" tabindex="-1"><a class="header-anchor" href="#screen基本使用" aria-hidden="true">#</a> Screen基本使用</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 新建一个会话</span>
<span class="token function">screen</span> <span class="token parameter variable">-S</span> session_name

<span class="token comment"># 退出但不关闭当前会话</span>
crtl+a+d

<span class="token comment"># 退出并关闭当前会话</span>
<span class="token builtin class-name">exit</span>
<span class="token comment">## 或者</span>
ctrl+d

<span class="token comment"># 列出所有的会话</span>
<span class="token function">screen</span> <span class="token parameter variable">-ls</span>
<span class="token comment">## 会话的状态有&#39;Detached&#39;,&#39;Attached&#39;, 前者为后台挂起状态，后者为连接状态</span>

<span class="token comment"># 远程挂起会话，会话状态为&#39;Attached&#39;时表示有窗口正在连接该会话，远程挂起指定会话后，连接该会话的窗口将被退出</span>
<span class="token function">screen</span> <span class="token parameter variable">-d</span> session_name

<span class="token comment"># 连接指定的会话</span>
<span class="token function">screen</span> <span class="token parameter variable">-r</span> session_name
<span class="token comment">## 如果需要连接的会话状态为&#39;Attached&#39;</span>
<span class="token comment">## 则会返回There is no screen to be resumed matching xxx</span>
<span class="token comment">## 这时候需要先远程挂起该会话后再连接</span>
<span class="token function">screen</span> <span class="token parameter variable">-d</span> <span class="token parameter variable">-r</span> session_name

</code></pre></div>`,4),o=[t];function r(p,l){return e(),s("div",null,o)}const i=n(c,[["render",r],["__file","screen.html.vue"]]);export{i as default};
