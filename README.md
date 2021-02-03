# Dynamic Theme
Change VSCode theme regularly
根据打开时间换VSCode主题
## Features
- ☀ auto switch theme based on time 🌙

![preview](https://raw.githubusercontent.com/ame-yu/dynamic-theme/main/preview.jpg)
### 触发机制
打开VSCode时自动触发一次 或者 `Ctrl+shift+p` > `theme:refresh`
## Requirements

## Extension Settings
```json
{
    "dynamicTheme.time": ["6:00","18:00"], //optional
    "dynamicTheme.theme": ["Default Light+", "Default Dark+"], //optional
}
```

#### More example
```json
{
    "dynamicTheme.time": ["6:00","12:00","18:00"],
    "dynamicTheme.theme": ["Default Light+","One Dark Pro", "Default Dark+"],
}
```
| Time | Theme |
| ---- | ---- |
| 6:00-12:00|Default Light+|
| 12:00-18:00 | One Dark Pro|
| other | Default Dark+|
## Known Issues
This is my first vscode extension,so if you hava any suggestion please leave a issue!

第一次写插件，可能存在小Bug，有任何建议请留下issue!

如果您有更好的方法请Fork & PR

### Related Work
- https://github.com/savioserra/vs-theme-switcher （功能一样，后台守护进程自动检测触发，本项目仅启动VSCode时触发）

## Release Notes
当前版本未发布到 VSCode Marketplace，请下载后选择`Install from vsix`本地安装。
### 0.2.0
参考[vs-theme-switcher](https://github.com/savioserra/vs-theme-switcher)简化了代码和配置项

### 0.1.0

Initial release
这个版本没有发布到Marketplace, 要尝试的请下载预览版release


-----------------------------------------------------------------------------------------------------------

