import * as vscode from "vscode";

// this method is called when your extension is activated
const extensionName = "dynamicTheme"

export function activate(context: vscode.ExtensionContext) {
  vscode.commands.registerCommand("theme.refresh", () => {
    switchTheme(checkoutTheme())
  });
  return switchTheme(checkoutTheme())
}

// this method is called when your extension is deactivated
export function deactivate() {
  vscode.window.showInformationMessage("Deactive dynamic theme");
}

async function switchTheme(theme: string): Promise<void> {
  const config = vscode.workspace.getConfiguration("workbench");
  if (config.get("colorTheme") !== theme) {
    await config.update("colorTheme", theme, vscode.ConfigurationTarget.Global);
  }
}

function checkoutTheme(): string{
  let {time, theme} = vscode.workspace.getConfiguration(extensionName)
  let d = new Date()
  let currentTime = d.getHours() * 100 + d.getMinutes()
  let timeInt: Array<number> = time.map((it: string) => parseInt(it.replace(":","")))
  let count = 0
  timeInt.forEach(it => {if(it < currentTime) count++})
  if(count === 0) count++
  return theme[count - 1]
}
