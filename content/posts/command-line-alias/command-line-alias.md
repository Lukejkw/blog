---
title: Command Line Aliases
description: Lessen the amount of typing you do in the command line by defining aliases for your specific workflow
date: 2021-07-09T12:00:00.000Z
---

Using the command line can be an intimating proposition for many developers both new and old. While I am not going to go into the nitty-gritty of how to use the command line, I am going to show you a neat trick to lessen the amount of typing you need to do.

## The problem

Consider the following commands which you might be typing many times everyday:

```sh
git pull
git push
git commit
npm install ramda
docker-compose up -d # bring up docker environment
kubectl apply -f ./my-manifest.yaml # create kubernetes resource(s)
```

We can make our lives that much easier by creating aliases for the commands we tend to use often.

```sh
g pull
g push
g commit
n install ramda
dc up -d # bring up docker environment
k apply -f ./my-manifest.yaml # create kubernetes resource(s)
```

This might seem like a minor shortcut but in my experience it makes life so much easier.

> Note: If you just want to lookup a command that you previously wrote, another useful command is `CTL + R` which allows you to search through your history.

## Creating the aliases

First you need to find the configuration file for your shell of choice. Here is how you do that for 2 popular shells.

- zsh: `nano ~/.zshrc`
- bash: `nano ~/.bashrc`

> If use something else, chances are you can find the file rather easily by running `ls -a ~` to list all the files in your home directory

Often, there are some example aliases already in the configurations. You just need to add the ones which you think will be most useful to you.

Here are some examples from mine.

```sh
alias cls="clear" # clear the terminal
alias g="git"
alias gits="git status"
alias gitd="git checkout develop"
alias gitp="git pull"
alias gitg="git log --graph --decorate --pretty=oneline --abbrev-commit --all" # Shows the current git graph
alias k="kubectl"
alias dc="docker-compose"
alias dcu="docker-compose up -d"
```

Lastly, to use your aliases you will need to either restart the shell instance or source the file. Sourcing is probably the easier way to go about it.

```sh
source ~/.zshrc
# or
source ~/.bashrc
```

Happy aliasing!
