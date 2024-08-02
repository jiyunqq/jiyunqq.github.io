import{_ as n,P as s,Q as a,a3 as e}from"./framework-62102715.js";const l={},i=e(`<h1 id="gpfs-文件系统" tabindex="-1"><a class="header-anchor" href="#gpfs-文件系统" aria-hidden="true">#</a> gpfs 文件系统</h1><h2 id="基本配置" tabindex="-1"><a class="header-anchor" href="#基本配置" aria-hidden="true">#</a> 基本配置</h2><ol><li><p>io 节点设备对应的 gpfs nsd 盘</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@io01 ~<span class="token punctuation">]</span><span class="token comment"># mmlsnsd -m</span>

 Disk name      NSD volume ID      Device          Node name or Class    Remarks
---------------------------------------------------------------------------------------
 nsd01          0A000D6965B4F0F6   /dev/mapper/nsd01 io01                server <span class="token function">node</span>
 nsd01          0A000D6965B4F0F6   /dev/mapper/nsd01 io02                server <span class="token function">node</span>
 nsd02          0A000D6A65B4F0F8   /dev/mapper/nsd02 io01                server <span class="token function">node</span>
 nsd02          0A000D6A65B4F0F8   /dev/mapper/nsd02 io02                server <span class="token function">node</span>

</code></pre></div></li><li><p>查看集群配置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@io01 ~<span class="token punctuation">]</span><span class="token comment"># mmlsconfig</span>
Configuration data <span class="token keyword">for</span> cluster cluster1.spectrum:
-------------------------------------------------
clusterName cluster1.spectrum
clusterId <span class="token number">5550626004876455419</span>
dmapiFileHandleSize <span class="token number">32</span>
minReleaseLevel <span class="token number">5.0</span>.5.1
ccrEnabled <span class="token function">yes</span>
cipherList AUTHONLY
<span class="token punctuation">[</span>io01,io02<span class="token punctuation">]</span>
pagepool 128G
<span class="token punctuation">[</span>common<span class="token punctuation">]</span>
autoload <span class="token function">yes</span>
verbsRdma <span class="token builtin class-name">enable</span>
<span class="token punctuation">[</span>io01,io02<span class="token punctuation">]</span>
verbsPorts mlx5_2/1
<span class="token punctuation">[</span>mgt,n01,n02,n03,n04<span class="token punctuation">]</span>
verbsPorts mlx5_0/1
<span class="token punctuation">[</span>common<span class="token punctuation">]</span>
adminMode central

File systems <span class="token keyword">in</span> cluster cluster1.spectrum:
------------------------------------------
/dev/share

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查看集群信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@io01 ~<span class="token punctuation">]</span><span class="token comment"># mmlscluster</span>

GPFS cluster information
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
  GPFS cluster name:         cluster1.spectrum
  GPFS cluster id:           <span class="token number">5550626004876455419</span>
  GPFS <span class="token environment constant">UID</span> domain:           cluster1.spectrum
  Remote shell command:      /usr/bin/ssh
  Remote <span class="token function">file</span> copy command:  /usr/bin/scp
  Repository type:           CCR

 Node  Daemon <span class="token function">node</span> name  IP address   Admin <span class="token function">node</span> name  Designation
-------------------------------------------------------------------
   <span class="token number">1</span>   io01              <span class="token number">10.0</span>.13.105  io01             quorum-manager
   <span class="token number">2</span>   io02              <span class="token number">10.0</span>.13.106  io02             quorum-manager
   <span class="token number">3</span>   mgt               <span class="token number">10.0</span>.13.100  mgt              quorum
   <span class="token number">4</span>   n01               <span class="token number">10.0</span>.13.130  n01
   <span class="token number">5</span>   n02               <span class="token number">10.0</span>.13.131  n02
   <span class="token number">6</span>   n03               <span class="token number">10.0</span>.13.132  n03
   <span class="token number">7</span>   n04               <span class="token number">10.0</span>.13.133  n04

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>存储状态信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@io01 ~<span class="token punctuation">]</span><span class="token comment"># mmgetstate -a</span>

 Node number  Node name        GPFS state
-------------------------------------------
       <span class="token number">1</span>      io01             active
       <span class="token number">2</span>      io02             active
       <span class="token number">3</span>      mgt              active
       <span class="token number">4</span>      n01              active
       <span class="token number">5</span>      n02              active
       <span class="token number">6</span>      n03              active
       <span class="token number">7</span>      n04              active

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>磁盘信息查看</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@io01 ~<span class="token punctuation">]</span><span class="token comment"># mmlsdisk share</span>
disk         driver   sector     failure holds    holds                            storage
name         <span class="token builtin class-name">type</span>       size       group metadata data  status        availability pool
------------ -------- ------ ----------- -------- ----- ------------- ------------ ------------
nsd01        nsd         <span class="token number">512</span>          <span class="token number">11</span> Yes      Yes   ready         up           system
nsd02        nsd         <span class="token number">512</span>          <span class="token number">12</span> Yes      Yes   ready         up           system

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>存储空间查看</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@io01 ~<span class="token punctuation">]</span><span class="token comment"># mmdf share</span>
disk                disk size  failure holds    holds           <span class="token function">free</span> <span class="token keyword">in</span> KB        <span class="token function">free</span> <span class="token keyword">in</span> KB
name                    <span class="token keyword">in</span> KB    group metadata data        <span class="token keyword">in</span> full blocks      <span class="token keyword">in</span> fragments
--------------- ------------- -------- -------- ----- -------------------- -----------------
Disks <span class="token keyword">in</span> storage pool: system <span class="token punctuation">(</span>Maximum disk size allowed is <span class="token number">1.44</span> PB<span class="token punctuation">)</span>
nsd01            <span class="token number">195881336832</span>       <span class="token number">11</span> Yes      Yes    <span class="token number">195708801024</span> <span class="token punctuation">(</span><span class="token number">100</span>%<span class="token punctuation">)</span>     <span class="token number">7326440</span> <span class="token punctuation">(</span> <span class="token number">0</span>%<span class="token punctuation">)</span>
nsd02            <span class="token number">195881336832</span>       <span class="token number">12</span> Yes      Yes    <span class="token number">195707568128</span> <span class="token punctuation">(</span><span class="token number">100</span>%<span class="token punctuation">)</span>     <span class="token number">7502152</span> <span class="token punctuation">(</span> <span class="token number">0</span>%<span class="token punctuation">)</span>
                -------------                         -------------------- -----------------
<span class="token punctuation">(</span>pool total<span class="token punctuation">)</span>     <span class="token number">391762673664</span>                          <span class="token number">391416369152</span> <span class="token punctuation">(</span><span class="token number">100</span>%<span class="token punctuation">)</span>    <span class="token number">14828592</span> <span class="token punctuation">(</span> <span class="token number">0</span>%<span class="token punctuation">)</span>

                <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>                         <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span> <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
<span class="token punctuation">(</span>total<span class="token punctuation">)</span>          <span class="token number">391762673664</span>                          <span class="token number">391416369152</span> <span class="token punctuation">(</span><span class="token number">100</span>%<span class="token punctuation">)</span>    <span class="token number">14828592</span> <span class="token punctuation">(</span> <span class="token number">0</span>%<span class="token punctuation">)</span>

Inode Information
-----------------
Number of used inodes:         <span class="token number">1459534</span>
Number of <span class="token function">free</span> inodes:          <span class="token number">942770</span>
Number of allocated inodes:    <span class="token number">2402304</span>
Maximum number of inodes:    <span class="token number">134217728</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="常规操作" tabindex="-1"><a class="header-anchor" href="#常规操作" aria-hidden="true">#</a> 常规操作</h2><ol><li><p>检查存储状态</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@mgt ~<span class="token punctuation">]</span><span class="token comment"># psh all &quot;df -hT | grep gpfs&quot;</span>
io02: share                 gpfs      365T  331G  365T   <span class="token number">1</span>% /share
io01: share                 gpfs      365T  331G  365T   <span class="token number">1</span>% /share
n02: share                 gpfs      365T  331G  365T   <span class="token number">1</span>% /share
n01: share                 gpfs      365T  331G  365T   <span class="token number">1</span>% /share
n03: share                 gpfs      365T  331G  365T   <span class="token number">1</span>% /share
n04: share                 gpfs      365T  331G  365T   <span class="token number">1</span>% /share

如果没有挂载,需要在节点上运行:

mmstartup
mmmount share

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>另一种挂载存储方法</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mmstartup <span class="token parameter variable">-a</span>
mmmount share <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>存储管理</p><ul><li><p>启动分布式存储:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>mmstartup <span class="token parameter variable">-a</span>

注: 如果是本节点启动, 只需要 mmstartup 即可

</code></pre></div></li><li><p>检查分布式存储状态:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>mmgetstate <span class="token parameter variable">-a</span>

</code></pre></div></li><li><p>查看分布式文件系统配置</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>mmlsconfig

</code></pre></div></li><li><p>查看文件系统参数</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>mmlsfs share

</code></pre></div></li><li><p>挂载分布式文件系统</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mmmount all

或

mmmount all -a    # 所有节点 mount

查看挂载:

mmlsmount all -L

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>卸载分布式文件系统</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>mmumount all

</code></pre></div></li><li><p>显示分布式存储集群配置</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>mmlscluster

</code></pre></div></li><li><p>查看分布式存储 nsd 信息:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>mmlsnsd <span class="token parameter variable">-m</span>

</code></pre></div></li></ul></li></ol>`,5),p=[i];function o(t,c){return s(),a("div",null,p)}const d=n(l,[["render",o],["__file","gpfs.html.vue"]]);export{d as default};
