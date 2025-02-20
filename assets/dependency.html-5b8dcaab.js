import{_ as s,P as n,Q as a,a3 as e}from"./framework-62102715.js";const o={},t=e(`<h2 id="作业需求" tabindex="-1"><a class="header-anchor" href="#作业需求" aria-hidden="true">#</a> 作业需求</h2><blockquote><p>批量提交 jobA, jobB, jobC</p><p>jobB 要等待 jobA 成功完成才能运行</p><p>jobC 要等待 jobB 成功完成才能运行</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token punctuation">{</span>A,B,C<span class="token punctuation">}</span>
<span class="token keyword">do</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;#!/bin/sh
#SBATCH --partition=gpu
#SBATCH --job-name=ok<span class="token variable">$i</span>
#SBATCH --nodes=1
#SBATCH --ntasks-per-node=1

echo &quot;</span><span class="token variable">$i</span><span class="token string">&quot; &gt; <span class="token variable">$i</span>.out
sleep 30
&quot;</span> <span class="token operator">&gt;</span> job<span class="token variable">$i</span>.sh
<span class="token keyword">done</span>

<span class="token assign-left variable">jobA_id</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>sbatch jobA.sh <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $NF}&#39;</span><span class="token variable">)</span></span>
<span class="token assign-left variable">jobB_id</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>sbatch <span class="token parameter variable">--dependency</span><span class="token operator">=</span>afterok:$<span class="token punctuation">{</span>jobA_id<span class="token punctuation">}</span> jobB.sh <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $NF}&#39;</span><span class="token variable">)</span></span>
<span class="token assign-left variable">jobC_id</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>sbatch <span class="token parameter variable">--dependency</span><span class="token operator">=</span>afterok:$<span class="token punctuation">{</span>jobB_id<span class="token punctuation">}</span> jobC.sh <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $NF}&#39;</span><span class="token variable">)</span></span>

<span class="token comment">#jobA_id=$(sbatch jobA.sh | awk &#39;{print $NF}&#39;)</span>
<span class="token comment">#jobB_id=$(sbatch jobB.sh | awk &#39;{print $NF}&#39;)</span>
<span class="token comment">#jobC_id=$(sbatch --dependency=afterok:\${jobB_id} --dependency=afterok:\${jobA_id} jobC.sh | awk &#39;{print $NF}&#39;)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">注意：</p><blockquote><ol><li><p>注释三行代码表示: jobC 要等待 jobA 和 jobB 都成功完成才能运行</p></li><li><p>man sbatch 可以查看 <code>--dependency</code> 详细用法</p></li></ol></blockquote></div><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span>. 单个作业完成后才能运行

   - afterok:<span class="token operator">&lt;</span>jobid<span class="token operator">&gt;</span>:    当指定的作业成功完成后，才能运行当前作业
   - afternotok:<span class="token operator">&lt;</span>jobid<span class="token operator">&gt;</span>: 当指定的作业未成功完成时，才能运行当前作业
   - afterany:<span class="token operator">&lt;</span>jobid<span class="token operator">&gt;</span>:   当指定的作业完成后，无论其状态如何，都可以运行当前作业

<span class="token number">2</span>. 多个作业完成后才能运行

   - afterok:<span class="token operator">&lt;</span>jobid<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>:<span class="token operator">&lt;</span>jobid<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>:    当所有指定的作业都成功完成后，才能运行当前作业
   - afternotok:<span class="token operator">&lt;</span>jobid<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>:<span class="token operator">&lt;</span>jobid<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>: 当所有指定的作业中有任何一个未成功完成时，才能运行当前作业
   - afterany:<span class="token operator">&lt;</span>jobid<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>:<span class="token operator">&lt;</span>jobid<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>:   当所有指定的作业中的任何一个完成后，无论其状态如何，都可以运行当前作业

<span class="token number">3</span>. 复合依赖关系

   可以混合使用上述参数和写法来创建更复杂的依赖关系例如: <span class="token parameter variable">--dependency</span><span class="token operator">=</span>afterok:<span class="token operator">&lt;</span>jobid<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>:afternotok:<span class="token operator">&lt;</span>jobid<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>
</code></pre></div><h2 id="使用数组变量" tabindex="-1"><a class="header-anchor" href="#使用数组变量" aria-hidden="true">#</a> 使用数组变量</h2><blockquote><p>将多个作业的依赖关系存储在数组变量中，可以通过循环构建依赖关系列表</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment"># 定义作业ID数组</span>
<span class="token assign-left variable">job_ids</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&quot;1234&quot;</span> <span class="token string">&quot;5678&quot;</span> <span class="token string">&quot;9012&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 定义空字符串来存储依赖关系列表</span>
<span class="token assign-left variable">dependency</span><span class="token operator">=</span><span class="token string">&quot;&quot;</span>

<span class="token comment"># 循环遍历作业ID数组</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">job_id</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">\${job_ids<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>&quot;</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token comment"># 如果不是第一个作业，则添加逗号作为分隔符</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$dependency</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token assign-left variable">dependency</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${dependency}</span>:&quot;</span>
    <span class="token keyword">fi</span>
    <span class="token comment"># 构建依赖关系列表</span>
    <span class="token assign-left variable">dependency</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${dependency}</span>afterok:<span class="token variable">\${job_id}</span>&quot;</span>
<span class="token keyword">done</span>

<span class="token comment"># 输出构建的依赖关系列表</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;依赖关系列表为: <span class="token variable">\${dependency}</span>&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><ol><li><p>定义一个名为 job_ids 的数组, 存储多个作业的ID</p></li><li><p>循环遍历这个数组, 在循环中构建依赖关系列表</p></li><li><p>脚本输出为:</p><p><code>依赖关系列表为: afterok:1234:afterok:5678:afterok:9012</code></p></li></ol></div>`,9),p=[t];function l(i,c){return n(),a("div",null,p)}const d=s(o,[["render",l],["__file","dependency.html.vue"]]);export{d as default};
