Course Note: Learning Git and Github
====================================

Author: Joon Lim


## 1 Commands

### 1.0 Basic commands

```git
git add .
git add --all

git commit -m "<commit_message>"
git commit --amend

git status

git log

git branch

git diff

git push
```

### 1.1 undo
```git 
git checkout <filename>
```
undo. it is going back to the staging environment.

### 1.2 unstaging
```git 
git reset HEAD <filename>
```
unstaging. clear out the staging environment like we have never staged.

### 1.3 deletion

```git
git rm <filename>
```
get rid of a file

### 1.4 staging environment

```git
git log
git checkout <commitId>
```
get to the detached HEAD state.

```git
git branch
git branch <new-branch-name> branchId
```
create a new branch with the staged files

```git
git checkout <new-branch-name>
```
move to the new branch

### 1.5 controlling branches

```git
git branch <new-branch>
git checkout <new-branch>
git add .
git commit -m "<commit-meesage>"
```
create a new branch and commit a new change

```git
git checkout master
```
going back to the original master branch

```git
git merge <new-branch>
```
will merge the new branch to master

```git
git branch -m <old-branch-name> <new-branch-name>
```
will change the name of the branch

```git
git branch -D <new-branch-name>
```
will delete the branch

## 2 Work with Github projects

### 2.1 structure and gitignore

`.gitignore` file

```
.DS_Store
node_modules
.tmp
npm-debug.log
builds
```

### 2.2 clone a repo

```git
git clone <project-path>.git
```

### 2.3 clone individual branches

```git
git branch -a 
```
will see all the branches in the project

```git
git checkout -b <branch-name> origin/<location>
```
will checkout a branch from the remote server to git and automatically switch to the branch

```git
git clone -b <branch-name> <project-path>.git
```
will clone a specific branch only

```git
git clone --mirror <clone-url>.git .git
git config --bool core.bare false
git reset --hard
```
will clone all branches to the local repo

### 2.4 remove/create a git project

```bash
rm -dfr .git
```
will remove the existing git project

```bash
git init
```
will create a new git project

