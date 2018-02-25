# kie ![npm tag]()
> A tool for creating amazing, customizable front-end tutorials with ease

<p align="center">
  <img src=""
  alt="KIE - Koduje interactive ebook">
</p>

# Introduction

## The idea

KIE is and acronym for Koduje's Interactive E-book - which was originally created as a new form of providing the content for the audience of [Koduje](http://kodu.je).

It's goal was to provide an interactive form of learning-by-doing combined with ability to watch a video tutorial and seeing the preview of the code at glance - and It's goal hasn't changed. 

The only thing that chagned is that now the KIE is an Open Source Project and anyone can use it to provide this kind of content to their audience


## Example 

Checkout an example tutorial available online - [Flexbox tutorial](http://kodu.je/flexbox/) by Wojciech Połowniak _(polish)_ or see [kie-tutorials-repository]() for more examples

## Features

### For your audience: 
* Live preview of your code snippets in the browser
* Snippets are editable by default
* Ability to download the code from the exercise to zip file
* Customizable size of content/preview/video sections so the user can customize the layout of the exercise
* Ability to hide specific sections completely
* Multi monitor support - user can open the preview in new window and set editor into fullscreen mode. That provides a simple yet efficient web-based developing setup.
* Tooltips with explanation to various text fragments
* Built in Discuss support per each exercise
* Various plugins for easier understanding the issue you want to talk about (see [Flexbox tutorial](http://kodu.je/flexbox/) and axis highlightning)
* Links for specific parts of Youtube video from within tutorial contents
* Basic mobile support

## For creators:
* Building to static files HTML files
* Snippet creator as a Brackets extension
* Ability to select parts of code as hidden
* Ability to select parts of code as locked (not editable)
* Live preview during development via Browsersync 
* Microlanguage for creating new exercises


## Installation
```bash
$ npm install -g kie
```

or clone the repository if you're willing to help with development: 

```bash
$ git clone git@github.com:Worie/kie.git --recursive [destination path]
``` 

and then initialize the repository while in your cloned, local repository: 

```bash
$ npm install -g
```

## Usage

Simply run 

```bash
$ kie
```

Running `kie` command will start a server with browsersync in which you'll find an [example content](https://github.com/Worie/kie-example-content). 

Custom content can be easly created with [kie-creator](https://github.com/Worie/kie-creator), which is a [brackets](https://github.com/adobe/brackets) extension that'll allow you to create snippets and content of your tutorial.

The `kie` command will also start few watchers that'll update the project on every change in your tutorial source code and if you ever need to, the [front end](https://github.com/Worie/kie-front) part.

You can start development of your own tutorial by passing a `contentPath` argument to `kie` which should point out to the root of your tutorial content, like so:

```bash
$ kie --contentPath="/absolute/path/to/your/content"
```

There are also other `npm variables` that you can override with custom parameters passed to `kie`. 
See `package.json` for available options for now.

# Notes for creators
KIE project purpose is to provide easy to use tool that'll allow creators creating rich, meaningful content about overall web development.

That being said I kindly encourage you to create tutorials that are checked when it comes to substantivity, teach good practices and follows the specification of technologies its about.

All tutorials created with this the help of this tool must contain [the default copyright notice]() generated in each compiled, ready to use page. 

Keep in mind that kie is licensed with [MPL 2.0](LICENSE). I encourage to keep the source of exercises as a git repository, named in following pattern: 

```js
`kie/tutorial-${nameOfTutorial}`
```

That way other people can contribute to your tutorials, translate it and update it to follow the latest standards. Also it might be easier for other people to reach your content :)

Those can be later linked to tutorials ([kie-tutorials](https://github.com/Worie/kie-tutorials)) repository.

# Contributing 

Contributions are always welcome! 

There are no tests written at this point - feel free to start!

We're using [this](#) Trello board for managing the issues, their importance and related topics.

## Submodules
This package consists a few modules (further modularization is probable in the future). Those are probably insteresting for people who are willing to help with development of KIE project.

* [kie-example-content](https://github.com/Worie/kie-example-content) - contains an example content for KIE project 
* [kie-creator](https://github.com/Worie/kie-creator) - [Brackets](https://github.com/adobre/brackets) extension for creating custom exercises
* [kie-front](https://github.com/Worie/kie-front) - Module related to front-end stuff - such as displaying the panes, live preview in the browser etc.
* [kie-backend](https://github.com/Worie/kie-backend) - Module that's hosting the static files during development, as well as serving the API for [kie-front]().
* [kie-lang](https://github.com/Worie/kie-lang) - package containing custom markup language that can be used when developing new tutorials. _(ultimately, we'd like to fork something like [showdown]() instead of developing it completely from scratch)_
* [kie-common](https://github.com/Worie/kie-common) - common files for submodules 
* [kie-static-builder](https://github.com/Worie/kie-static-builder) - builds the static files basing on [kie-front]() and [kie-example-content]() modules (or your custom content)
* [kie-editor](https://github.com/Worie/kie-editor) - that's where editor for the snippets is going to be stored once it's extracted from [kie-front](https://github.com/Worie/kie-front) submodule
* [kie-tutorials](https://github.com/Worie/kie-tutorials) - place where you can store your tutorials

Those are separate repos to provide the ability to develop all of them in pararel and easier maintainance. 

## Donation / partnership

In general, we are open for donations and partnership. 

All funds that'll eventually be donated for the project will be spend for public api server that can host the Koduje project main website, paying for the domain name.

# Author's notes

Enourmous thanks to Damian Wielgosik for forming the overall [Koduje](http://kodu.je) project, ignition of the original KIE idea and initial funding of the project.

Big thanks to Jarosław Rencz for implementing the PoC of core functionality and to all of [Functionite](http://functionite.com) crew for overall support.

Big thanks to Jerzy Górski for beautiful graphics and animations made for Koduje project.

Big thanks to Mateusz Wierzbicki for UX and overall design support and feedback.

Big thanks to Jakub Maksimowicz for being a one-man circus during creation process in Koduje (video editing, recording, development)

# License 

**[kie](https://github.com/worie/kie)** by [Wojciech Połowniak](https://twitter.com/wopolow) is licensed under [MPL 2.0](LICENSE) [(read more)](https://www.mozilla.org/en-US/MPL/2.0/FAQ/).