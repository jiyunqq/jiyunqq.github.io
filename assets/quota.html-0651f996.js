import{_ as a,P as e,Q as s,a3 as n}from"./framework-62102715.js";const t={},r=n(`<h1 id="quota-磁盘配置" tabindex="-1"><a class="header-anchor" href="#quota-磁盘配置" aria-hidden="true">#</a> quota 磁盘配置</h1><h2 id="gpfs-磁盘配置" tabindex="-1"><a class="header-anchor" href="#gpfs-磁盘配置" aria-hidden="true">#</a> gpfs 磁盘配置</h2><h3 id="编辑磁盘配置" tabindex="-1"><a class="header-anchor" href="#编辑磁盘配置" aria-hidden="true">#</a> 编辑磁盘配置</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>mmsetquota /dev/share <span class="token parameter variable">--user</span> user1 <span class="token parameter variable">--block</span> 2000G:2048G
</code></pre></div><h3 id="查看磁盘配置" tabindex="-1"><a class="header-anchor" href="#查看磁盘配置" aria-hidden="true">#</a> 查看磁盘配置</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>mmlsquota <span class="token parameter variable">-u</span> <span class="token punctuation">{</span>username<span class="token punctuation">}</span>  --block-size auto <span class="token punctuation">{</span>qutoa_device<span class="token punctuation">}</span>

mmlsquota <span class="token parameter variable">-u</span> user1 --block-size auto /dev/share
mmlsquota <span class="token parameter variable">-u</span> user1 --block-size auto
</code></pre></div><h2 id="xfs-磁盘配置" tabindex="-1"><a class="header-anchor" href="#xfs-磁盘配置" aria-hidden="true">#</a> xfs 磁盘配置</h2><h3 id="编辑磁盘配置-1" tabindex="-1"><a class="header-anchor" href="#编辑磁盘配置-1" aria-hidden="true">#</a> 编辑磁盘配置</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>xfs_quota <span class="token parameter variable">-x</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;limit bsoft=30m bhard=50m isoft=3 ihard=5 user1&#39;</span> /share
edquota <span class="token parameter variable">-u</span> user1
</code></pre></div><h3 id="查看磁盘配置-1" tabindex="-1"><a class="header-anchor" href="#查看磁盘配置-1" aria-hidden="true">#</a> 查看磁盘配置</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>xfs_quota <span class="token parameter variable">-x</span> <span class="token parameter variable">-c</span> <span class="token string">&quot;report -uh&quot;</span> /dev/sda1 <span class="token operator">|</span> <span class="token function">grep</span> user1
</code></pre></div><h2 id="ext4-磁盘配置" tabindex="-1"><a class="header-anchor" href="#ext4-磁盘配置" aria-hidden="true">#</a> ext4 磁盘配置</h2><h3 id="编辑磁盘配置-2" tabindex="-1"><a class="header-anchor" href="#编辑磁盘配置-2" aria-hidden="true">#</a> 编辑磁盘配置</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>setquota user1 <span class="token number">10240</span> <span class="token number">20480</span> <span class="token number">0</span> <span class="token number">0</span> /data
setquota <span class="token parameter variable">-u</span> user1 4095G 4095G <span class="token number">0</span> <span class="token number">0</span> /data
setquota <span class="token parameter variable">-u</span> test5 2T 2T <span class="token number">0</span> <span class="token number">0</span> /data
</code></pre></div><h3 id="查看磁盘配置-2" tabindex="-1"><a class="header-anchor" href="#查看磁盘配置-2" aria-hidden="true">#</a> 查看磁盘配置</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">quota</span> <span class="token parameter variable">-us</span> user1
</code></pre></div>`,16),o=[r];function c(p,d){return e(),s("div",null,o)}const h=a(t,[["render",c],["__file","quota.html.vue"]]);export{h as default};