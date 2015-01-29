# generator-happychart

>generator-happychart is a yeoman generator, which allows you to automatically generate basic CRUD functionality and charts based on config file.

>This generator is based on Pingyuan Chen's generator-admin (https://github.com/pingyuanChen/generator-admin/)

## Demos

* Basic look
![Demo](https://github.com/fatsheepcn/generator-happychart/blob/master/examples/demo.png)

* Edit Model
![Demo-edit](https://github.com/fatsheepcn/generator-happychart/blob/master/examples/demo-edit.png)

* Chart
![Demo-chart](https://github.com/fatsheepcn/generator-happychart/blob/master/examples/demo-chart.png)

## Features

* Provides a directory structure geared towards large angular projects.
    - All models are categorized by modules, and each module will be injected into the app module.
    - Provides basic admin functionality: authention, authoriztion, CRUD. Besides, includes many common widgets, service.

* Automagically create model based on existing project

* Support many kinds of charts: line, spline, column, bar, area, pie, and support **datetime** format x-axis chart.

## Getting Started

### Install Dependencies
- Yeoman: `npm install -g yo`
- bower: `npm install -g bower`
- generator-happychart: `npm install -g generator`

### Start Project
- Edit or copy generator-happychart/examples/config.json and chart, config directories into your working space.
    - **config.json** is the main config file which defines the settings of your happychart framework.
    - **config/*.json** is config files for CRUD functionality settings of custom modules.
    - **chart/*.json** is config files for settings of chart modules.

- Run: `Yo happychart`, after that, your workspace looks like:

    <pre>
    config/
    chart/
    SampleApp/
        client/
        server/
    config.json
    </pre>

- Entering into server and client directories to install dependencies.
    - client dependencies:

    <pre>
    $ cd SampleApp/client/
    $ npm install
    $ cd src
    $ bower intall
    </pre>

    - server dependencies:

    <pre>
    $ cd SampleApp/server/
    $ npm install
    </pre>

- run the node server to serve the website.

    <pre>
    $ cd SampleApp/server/
    $ node server.js
    </pre>

- Visit your site at [http://localhost:8008/#/login](http://localhost:8008/#/login)

### Subgenerator
You can genearte model on an exsiting project.
- First, add model config file, such as "tv-play.json".

- Then, in your workspace root and run:

    <pre>
    $ yo happychart:configFile
    </pre>

- To add chart, add config file to `./chat` and run:

    <pre>
    $ yo happychart:chart configFile
    </pre>

- Visit your site at [http://localhost:8008/#/login](http://localhost:8008/#/login)


## Chart config file
