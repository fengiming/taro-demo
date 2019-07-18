# eslint-plugin-prettier
### 将prettier运行为一个ESLint规则，并且将差异报告为单个eslint问题
# sample
```
error: Insert `,` (prettier/prettier) at pkg/commons-atom/ActiveEditorRegistry.js:22:25:
  20 | import {
  21 |   observeActiveEditorsDebounced,
> 22 |   editorChangesDebounced
     |                         ^
  23 | } from './debounced';;
  24 |
  25 | import {observableFromSubscribeFunction} from '../commons-node/event';
 
 
error: Delete `;` (prettier/prettier) at pkg/commons-atom/ActiveEditorRegistry.js:23:21:
  21 |   observeActiveEditorsDebounced,
  22 |   editorChangesDebounced
> 23 | } from './debounced';;
     |                     ^
  24 |
  25 | import {observableFromSubscribeFunction} from '../commons-node/event';
  26 | import {cacheWhileSubscribed} from '../commons-node/observable';
 
 
2 errors found.
```
# 安装
```
npm install --save-dev eslint-plugin-prettier
npm install --save-dev --save-exact prettier
```
#### eslint-plugin-prettier并不会为你安装Prettier或者ESLint，你必须自己安装这些。
#### 然后在你的.eslintrc.json添加如下配置：
```
{
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```
# 推荐配置
### 如果你禁用其他所有与代码格式化相关的ESLint规则，仅仅启用检测AST中模式的规则，这个插件可以工作的最佳。（关于如何格式化代码，如果其他激活的ESLint规则与prettier不一致，将不可能避免检查错误。）你可以使用eslint-config-prettier来禁用所有格式化相关的ESLint规则。
### 如果你想要格式化不匹配prettier输出，你应该使用一个不同的工具，比如prettier-eslint。
### 为了集成这个插件和eslint-config-prettier，你可以使用“recommended”配置。
### 1.除了上面的安装说明，安装eslint-config-prettier:
```
npm install --save-dev eslint-config-prettier
```
2.然后你需要在.eslintrc.json中添加plugin:prettier/recommended作为最后的扩展
```
{
  "extends": ["plugin:prettier/recommended"]
}
```
这样做了三件事：
+ 启用 eslint-plugin-prettier
+ 设置 'prettier/prettier'规则为"error"
+ 继承eslint-config-prettier配置

### 然后你可以在一个.prettierrc文件中设置prettier自己的选项
```
{
  "extends": [
    "plugin:prettier/recommended",
    "prettier/flowtype",
    "prettier/react",
    "prettier/standard"
  ]
}
```

# Options
```
注意：虽然可以通过ESLint配置文件向Prettier传递选项，但这并不推荐。因为编辑器的扩展比如prettier-atom和prettier-vscode将会读取.prettierrc,而不会从Eslint读取配置,这将导致不一致的体验。
```
+ 第一个选项：
  - 将一个代表选项的对象传递给prettier,例如：
  ```
  "prettier/prettier": ["error", {"singleQuote": true, "parser": "flow"}]
  ```
+ 第二个选项
  - 一个有下面选项的对象
    + usePrettierrc:启用加载prettier配置文件，这可能很有用，如果你正在使用多个彼此冲突的工具或者不希望混合你的ESLint配置和Prettier配置。
    ```
    "prettier/prettier": ["error", {}, {
    "usePrettierrc": false
    }]
    ```
    + fileInfoOptions:传递给prettier.getfileinfo以决定是否需要格式化文件的选项。例如，可以用来选择不忽略位于节点模块目录中的文件
    ```
    "prettier/prettier": ["error", {}, {
    "fileInfoOptions": {
      "withNodeModules": true
    }
    }]
    ```
