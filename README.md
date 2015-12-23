# ssuds.github.io [![Issues](http://img.shields.io/github/issues/ssuds/ssuds.github.io.svg?style=flat)](https://github.com/ssuds/ssuds.github.io/issues)

> This is the Github repo containing code for my personal website, hosted at [shreyas.gq](http://shreyas.gq/) using [Github Pages](https://pages.github.com/)

## About

The page is built using the [Jekyll](http://jekyllrb.com/) templating system, combined with the [Bootstrap](http://getbootstrap.com/) framework ([SASS branch](https://github.com/twbs/bootstrap-sass)) and [FontAwesome](http://fortawesome.github.io/Font-Awesome/).

## Build Instructions

This project was built in Windows, so these instructions cater towards Windows systems. However, all the dependencies should have Linux equivalents and can be adapted appropriately.
### Ruby 
Ruby and the Ruby DevKit can be installed using the instructions [here](http://jekyll-windows.juthilo.com/1-ruby-and-devkit/). Alternately it can be installed in [Chocolatey](https://chocolatey.org/) with the command 'choco install ruby -y'
### Jekyll
Jekyll can be configured with the Github Pages dependencies. This will allow building and serving the website locally to preview exactly how it will be seen once hosted on Github Pages.
First, install bundler using the command 'gem install bundler'
My Gemfile contains the appropriate dev dependencies. Simply navigate to the cloned repository and run 'bundle install'

Now, simply run 'bundle exec jekyll serve' in the root of the repository, and visit http://localhost:4000 in your browser to see the page.

## Staying Updated
Run 'bundle update' from the root of the repository to keep Jekyll and it's dependencies up to date.

Bootstrap and Font Awesome were configured using bower. However, the bower files are not included in the .gitignore file since they are normal dependencies required for the website to function.
[Node.js](https://nodejs.org/en/) (specifically npm, which is included with the Node installation) is required to use bower. Once Node and npm are installed, use the command 'npm install -g bower' to install Bower on your system.
Bootstrap can be updated with the 'bower update bootstrap-sass' command, and Font Awesome can be updated with the 'bower update font-awesome' command. However, when these packages are updated, keep in mind that other code may need to be updated to support changes in the bootstrap framework.

