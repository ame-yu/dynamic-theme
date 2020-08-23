import * as vscode from "vscode";
import * as fs from "fs-extra";

// this method is called when your extension is activated
export function activate(context: vscode.ExtensionContext) {
  let configPath = vscode.workspace.getConfiguration("themechanger").path
  if(!configPath) return vscode.window.showErrorMessage("You need set config path first");
  const readConfig = () => readFile(configPath)
  const writeConfig =  (str: string) => writeFile(configPath, str)
  changeTheme()

  async function changeTheme() {
    let configJson = await readConfig();
    if(!configJson.includes("workbench.colorTheme")){
      console.log("workbench.colorTheme Config not exsit, use default now")
      configJson = configJson.replace(/{/, `{\n\t"workbench.colorTheme": "Default Dark+",`)
      await writeConfig(configJson)
    }
    let themeName = checkoutTheme();
    let json = configJson.replace(
      /(?<="workbench\.colorTheme\":.?)(.*)/,
      ` "${themeName}",`,
    );
    await writeConfig(json);
  }
}

// this method is called when your extension is deactivated
export function deactivate() {
  vscode.window.showInformationMessage("Deactive theme changer");
}

function checkoutTheme(): string{
  let {time, theme} = vscode.workspace.getConfiguration("themechanger")
  let d = new Date()
  let currentTime = d.getHours() * 100 + d.getMinutes()
  let timeInt: Array<number> = time.map((it: string) => parseInt(it.replace(":","")))
  let count = 0
  timeInt.forEach(it => {if(it < currentTime) count++})
  if(count === 0) count++
  return theme[count - 1]
}

async function readFile(filePath: string): Promise<string> {
  try {
    const data = await fs.readFile(filePath, { encoding: "utf8" });
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

async function writeFile(
  filePath: string,
  data: string,
): Promise<boolean> {
  if (!data) {
    console.error(
      new Error(
        "Unable to write file. FilePath :" + filePath + " Data :" + data,
      ),
    );
    return false;
  }
  try {
    await fs.writeFile(filePath, data);
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}
