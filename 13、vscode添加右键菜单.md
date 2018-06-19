## 1.这个是可以在安装时直接选择显示的，如果跟我一样没有选也不愿意重新安装的，可以复制下面代码保存为vsCodeOpenFolder.reg，安装路径换成自己本地路径即可。

## 双击运行就可以完成。
```
Windows Registry Editor Version 5.00   
   
; Open files   
[HKEY_CLASSES_ROOT\*\shell\Open with VS Code]   
@="Edit with VS Code"   
"Icon"="D:\\software\\web\\dev\\Microsoft VS Code\\Code.exe,0"   
   
[HKEY_CLASSES_ROOT\*\shell\Open with VS Code\command]   
@="\"D:\\software\\web\\dev\\Microsoft VS Code\\Code.exe\" \"%1\""   
   
; This will make it appear when you right click ON a folder   
; The "Icon" line can be removed if you don't want the icon to appear   
   
[HKEY_CLASSES_ROOT\Directory\shell\vscode]   
@="Open Folder as VS Code Project"   
"Icon"="\"D:\\software\\web\\dev\\Microsoft VS Code\\Code.exe\",0"   
   
[HKEY_CLASSES_ROOT\Directory\shell\vscode\command]   
@="\"D:\\software\\web\\dev\\Microsoft VS Code\\Code.exe\" \"%1\""   
   
   
; This will make it appear when you right click INSIDE a folder   
; The "Icon" line can be removed if you don't want the icon to appear   
   
[HKEY_CLASSES_ROOT\Directory\Background\shell\vscode]   
@="Open Folder as VS Code Project"   
"Icon"="\"D:\\software\\web\\dev\\Microsoft VS Code\\Code.exe\",0"   
   
[HKEY_CLASSES_ROOT\Directory\Background\shell\vscode\command]   
@="\"D:\\Program Files (x86)\\Microsoft VS Code\\Code.exe\" \"%V\""
```
