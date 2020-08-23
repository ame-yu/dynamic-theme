# Theme Changer
change the theme as you want based on time when you open vscode.
根据打开Vscode的时间调整对应主题
## Features
- ☀ auto switch theme based on time 🌙

For example if there is an image subfolder under your extension project workspace:

![preview](https://raw.githubusercontent.com/ame-yu/theme-changer/master/preview.jpg)
> Tip: Many popular extensions utilize animations. This is an excellent way to show off your extension! We recommend short, focused animations that are easy to follow.
## Requirements

## Extension Settings
```
"themechanger.path": "C:\\Users\\Administrator\\AppData\\Roaming\\Code\\User\\settings.json", //required,this file path
"themechanger.time": ["6:00","18:00"] //optional,
"themechanger.theme": ["Default Light+", "Default Dark+"], //optional
```

#### advance
```
...
"themechanger.time": ["6:00","12:00","18:00"],
"themechanger.theme": ["Default Light+","One Dark Pro", "Default Dark+"],
//6:00-12:00(Default Light+)
//12:00-18:00(One Dark Pro)
//else(Default Dark+)
```

## Known Issues
This is my first vscode extension,so if you hava any suggestion please leave a issue!
第一次写插件，可能存在小Bug，有任何建议请留下issue!

有这几个点可以改进
- path不应该手动填入配置，应该有更好的方法可以找到不同平台对应配置文件的位置。

如果您有更好的方法请Fork & PR
## Release Notes
Users appreciate release notes as you update your extension.

### 0.1.0

Initial release

-----------------------------------------------------------------------------------------------------------

