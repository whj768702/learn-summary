- 基于某个远端分支创建本地分支

  ```shell
  git branch local_branch origin remote_branch
  ```

- 基于某个远端分支创建本地分支并切换到新分支

  ```javascript
  git checkout -b local_branch origin remote_branch
  ```

- 删除某个文件

  ```shell
  git rm file//连本地文件也删除
  git rm --cached file//只是从git管理中删除，本地文件依然存在
  ```

- `reflog`是`git`提供的一个内部工具，用于记录对`git`仓库进行的各种操作

- 提交本地分支到远端

  ```shell
  git push origin branchName//远端不存在对应分支
  ```

- 项目中存在子模块,有`.gitmodules`文件时更新代码

  ```shell
  git submodule update --init --recursive
  ```

