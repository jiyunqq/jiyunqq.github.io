import{_ as o,P as c,Q as p,$ as e,a1 as l,a0 as s,a3 as a,C as t}from"./framework-62102715.js";const r="/assets/01xshell-68118347.png",d="/assets/02xshell-257cd522.png",u="/assets/03putty-a14bab7e.png",h={},_=e("h1",{id:"ssh-方式登录集群",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ssh-方式登录集群","aria-hidden":"true"},"#"),s(" ssh 方式登录集群")],-1),g=e("h3",{id:"集群ip地址",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#集群ip地址","aria-hidden":"true"},"#"),s(" 集群IP地址")],-1),m={class:"hint-container tip"},x={class:"hint-container-title"},f=a(`<h3 id="linux-mac用户登录" tabindex="-1"><a class="header-anchor" href="#linux-mac用户登录" aria-hidden="true">#</a> Linux/Mac用户登录</h3><p>打开终端后通过以下命令连接，连接前请确保在园区网内，园区外需要连接VPN</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># user_name 为用户名，ip_address 为所要连接集群的IP, port 为端口号</span>
<span class="token function">ssh</span> user_name@ip_address <span class="token parameter variable">-p</span> port
</code></pre></div><h3 id="windows用户登录" tabindex="-1"><a class="header-anchor" href="#windows用户登录" aria-hidden="true">#</a> Windows用户登录</h3><p><code>连接前请确保在园区网内，园区外需要连接VPN</code></p><p><strong>以xshell客户端为例:</strong></p>`,6),y=e("p",null,[e("strong",null,[s("Step 1. 点击 xshell 左上角 "),e("code",null,"文件"),s(" 按钮，点击 "),e("code",null,"新建")])],-1),b=e("figure",null,[e("img",{src:r,alt:"xshell登录",tabindex:"0",loading:"lazy"}),e("figcaption",null,"xshell登录")],-1),v=e("li",null,[e("p",null,"会话名称输入我们方便识别的即可.")],-1),N=e("li",null,[e("p",null,[e("strong",null,[s("Step 2. 点击 "),e("code",null,"用户身份验证"),s(", 输入在登录节点中的账号和密码")])]),e("figure",null,[e("img",{src:d,alt:"xshell登录",tabindex:"0",loading:"lazy"}),e("figcaption",null,"xshell登录")])],-1),V=e("li",null,[e("p",null,[e("strong",null,[s("Step 3. 点击 "),e("code",null,"连接"),s(" 即可登录集群, 下次登录时只需点击左上角文件打开该连接即可")])])],-1),k=a('<p><strong>以 putty 客户端为例:</strong></p><ul><li><p>打开 putty 后, 输入ip地址, 和端口号</p><figure><img src="'+u+'" alt="putty登录" tabindex="0" loading="lazy"><figcaption>putty登录</figcaption></figure><ul><li><p>弹出安全对话框, 这里选接受即可</p></li><li><p>根据提示, 输入 用户名 和 密码 即可登录</p></li><li><p>注: <code>输入密码，窗口没有回显是正常的，输完直接回车即可</code></p></li></ul></li></ul>',2);function w(B,P){const i=t("Badge"),n=t("my");return c(),p("div",null,[_,g,e("div",m,[e("p",x,[l(i,{type:"tip",text:"ssh 入口地址端口号"})]),e("p",null,[s("ip 地址: "),l(n,{myvar:"ip"})]),e("p",null,[s("端口号: "),l(n,{myvar:"port"})])]),f,e("ul",null,[e("li",null,[y,b,e("ul",null,[v,e("li",null,[e("p",null,[s("主机输入: "),l(n,{myvar:"ip"})])]),e("li",null,[e("p",null,[s("端口号修改为: "),l(n,{myvar:"port"})])])])]),N,V]),k])}const z=o(h,[["render",w],["__file","ssh.html.vue"]]);export{z as default};