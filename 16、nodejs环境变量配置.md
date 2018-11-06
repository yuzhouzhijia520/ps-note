①、我们要先配置npm的全局模块的存放路径以及cache的路径，例如我希望将以上两个文件夹放在NodeJS的主目录下，便在NodeJs下建立"node_global"及"node_cache"两个文件夹。如下图
NodeJS安装步骤(windows版本)
<img src="https://github.com/yuzhouzhijia520/ps-note/blob/master/6597270977285435691.jpg"/><br/>
②、启动cmd，输入
npm config set prefix "C:\Program Files\nodejs\node_global"
以及
npm config set cache "C:\Program Files\nodejs\node_cache"
