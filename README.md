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


## Chart API and Config settings
- Chart API standard

<table>
    <tr>
        <td>API</td>
        <td>HTTP Method</td>
        <td>Parameters</td>
        <td>Result</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>http://domain.com/baseurl/entries/chart</td>
        <td>GET</td>
        <td>?start3&end=5&package=v11</td>
        <td>Return the chart data in json type</td>
        <td> </td>
    </tr>
</table>

- Returned data description

<pre>
{
    "status": 0,
    "msg": "",
    "data": {
        "items": [
            [
                ["Jan", 7.0, 3.9],
                ["Feb", 6.9, 4.2],
                ["Mar", 9.5, 5.7],
                ["Apr", 14.5, 8.5],
                ["May", 18.4, 11.9],
                ["Jun", 21.5, 15.2],
                ["Jul", 25.2, 17.0],
                ["Aug", 26.5, 16.6],
                ["Sep", 23.3, 14.2],
                ["Oct", 18.3, 10.3],
                ["Nov", 13.9, 6.6],
                ["Dec", 9.6, 4.8]
            ],
            [
                ["Japan", 11829, 1025357],
                ["United Kingdom", 11538, 2565587],
                ["Egypt", 16310, 919583],
                ["France", 15935, 1203414],
                ["South Korea", 24509, 6296568],
                ["Saudi Arabia", 12737, 1674606],
                ["Germany", 17783, 5380820],
                ["United States", 115912, 15323779],
                ["Thailand", 11825, 2055928]
            ],
            [
                ["Africa", 107, 133, 973],
                ["America", 31, 156, 914],
                ["Asia", 635, 947, 4054],
                ["Europe", 203, 408, 732],
                ["Oceania", 2, 6, 34]
            ],
            [
                // datetime, series a data, series b data
                [1421107200000, 61397, 2308809],
                [1421193600000, 62412, 2346191],
                [1421280000000, 64632, 2325035],
                [1421366400000, 62914, 2306640],
                [1421452800000, 68899, 2301167],
                [1421539200000, 70851, 2314587],
                [1421625600000, 61358, 2311068]
            ],
            [
                [1421107200000, 10.08],
                [1421193600000, 6.05],
                [1421280000000, 8.08],
                [1421366400000, 9.49],
                [1421452800000, 11.15],
                [1421539200000, 10.93],
                [1421625600000, 11.25]
            ],
            [
                ["11.3.4", 369036],
                ["11.3.0", 16482],
                ["10.3.0", 9331],
                ["11.2.3", 9221],
                ["11.2.1", 8353],
                ["9.3.1", 5242],
                ["11.2.8", 5055],
                ["10.1.2", 4604],
                ["9.0.2 Beta", 3737],
                ["10.0.0", 2286],
                ["others", 42317]
            ],
            [
                ["Jan", 49.9, 7.0],
                ["Feb", 71.5, 6.9],
                ["Mar", 106.4, 9.5],
                ["Apr", 129.2, 14.5],
                ["May", 144.0, 18.2],
                ["Jun", 176.0, 21.5],
                ["Jul", 135.6, 25.2],
                ["Aug", 148.5, 26.5],
                ["Sep", 216.4, 23.3],
                ["Oct", 194.4, 18.3],
                ["Nov", 95.6, 13.9],
                ["Dec", 54.4, 9.6]
            ]
        ],
        "filters": [
            {
                "items": [
                    {
                        "display_value": "All",
                        "value": "All"
                    },
                    {
                        "display_value": "V11.3.3",
                        "value": "V11.3.3"
                    },
                    {
                        "display_value": "V11.3.1",
                        "value": "V11.3.1"
                    },
                    {
                        "display_value": "V11.3.0",
                        "value": "V11.3.0"
                    },
                    {
                        "display_value": "V11.2.9",
                        "value": "V11.2.9"
                    },
                    {
                        "display_value": "V11.2.8",
                        "value": "V11.2.8"
                    },
                    {
                        "display_value": "V11.2.3",
                        "value": "V11.2.3"
                    },
                    {
                        "display_value": "V11.2.1",
                        "value": "V11.2.1"
                    },
                    {
                        "display_value": "Other Version",
                        "value": "Other Version"
                    }
                ],
                "name": "version_code"
            },
            {
                "items": [
                    {
                        "display_value": "All",
                        "value": "All"
                    },
                    {
                        "display_value": "Arabic",
                        "value": "Arabic"
                    },
                    {
                        "display_value": "Chinese",
                        "value": "Chinese"
                    },
                    {
                        "display_value": "English",
                        "value": "English"
                    },
                    {
                        "display_value": "Finnish",
                        "value": "Finnish"
                    },
                    {
                        "display_value": "French",
                        "value": "French"
                    },
                    {
                        "display_value": "German",
                        "value": "German"
                    },
                    {
                        "display_value": "Italian",
                        "value": "Italian"
                    },
                    {
                        "display_value": "Korean",
                        "value": "Korean"
                    },
                    {
                        "display_value": "Other Language",
                        "value": "Other Language"
                    },
                    {
                        "display_value": "Portuguese",
                        "value": "Portuguese"
                    },
                    {
                        "display_value": "Romanian",
                        "value": "Romanian"
                    },
                    {
                        "display_value": "Russian",
                        "value": "Russian"
                    },
                    {
                        "display_value": "Spanish",
                        "value": "Spanish"
                    },
                    {
                        "display_value": "Thai",
                        "value": "Thai"
                    },
                    {
                        "display_value": "Turkish",
                        "value": "Turkish"
                    },
                    {
                        "display_value": "Ukrainian",
                        "value": "Ukrainian"
                    },
                    {
                        "display_value": "Vietnamese",
                        "value": "Vietnamese"
                    }
                ],
                "name": "language"
            }
        ]
    }
}
</pre>

- Chart config file description

<pre>
{
  "moduleName": "reportModule",
  "modelName": "statistic",
  "filter_type": "multi-dropdown",
  "charts": [
    {
      "type": "line",
      "title": "Monthly Average Temperature (Basic Line/Spline Chart)",
      "yAxis": [
        {
          "title": {
            "text": "Temperature(°C)"
          }
        }
      ],
      "series": [
        {
          "index": 1,
          "name": "Tokyo"
        },
        {
          "index": 2,
          "name": "London"
        }
      ]
    },
    {
      "title": "Country Distribution(Basic Column Chart)",
      "type": "column",
      "yAxis": [
        {
          "title": {
            "text":"active"
          },
          "min": 10000,
          "max": 150000
        },
        {
          "title": {
            "text": "launch"
          },
          "min": 100000,
          "max": 20000000,
          "opposite": true
        }
      ],
      "series": [
        {
          "index": 1,
          "name": "active",
          "yAxis": 0
        },
        {
          "index": 2,
          "name": "launch",
          "yAxis": 1
        }
      ]
    },
    {
      "title": "Historic World Population by Region(Basic Bar Chart)",
      "type": "bar",
      "yAxis": [
        {
          "min": 0,
          "title": {
            "text": "Population (millions)",
            "align": "high"
          },
          "labels": {
            "overflow": "justify"
          }
        }
      ],
      "series": [
        {
          "index": 1,
          "name": "Year 1800"
        },
        {
          "index": 2,
          "name": "Year 1900"
        },
        {
          "index": 3,
          "name": "Year 2000"
        }
      ]
    },
    {
      "title": "Android APP KPI (Datetime Line Chart)",
      "type": "line",
      "xAxis": {
        "type": "datetime",
        "dateTimeLabelFormats": {
          "month": "%e. %b",
          "year": "%b"
        },
        "title": {
          "text": "Date"
        }
      },
      "yAxis": [
        {
          "title": {
            "text":"DNU"
          },
          "min": 60000,
          "max": 71000
        },
        {
          "title": {
            "text": "DAU"
          },
          "min": 2300000,
          "max": 2350000,
          "opposite": true
        }
      ],
      "series": [
        {
          "index": 1,
          "name": "New Users",
          "suffix": "s",
          "yAxis": 0
        },
        {
          "index": 2,
          "name": "Active Users",
          "suffix": "s",
          "yAxis": 1
        }
      ]
    },
    {
      "title": "Ads income(Datetime Area Chart)",
      "type": "area",
      "xAxis": {
        "type": "datetime",
        "dateTimeLabelFormats": {
          "month": "%e. %b",
          "year": "%b"
        },
        "title": {
          "text": "Date"
        }
      },
      "yAxis": [{
        "title": {
            "text":"US dollars"
          },
        "min": 0
      }],
      "series": [{
        "index": 1,
        "name": "income of ads",
        "prefix": "$",
        "suffix": "m"
      }]
    },
    {
      "title": "Version Distribution(Pie Chart)",
      "type": "pie",
      "series": [
        {
          "index": 1,
          "name": "share"
        }
      ]
    },
    {
      "title": "Average Monthly Temperature and Rainfall in Shanghai(Dual axes, Line and Column Chart)",
      "yAxis":[
        {
          "title": {
            "text": "Temperature"
          },
          "labels": {
            "format": "{value}°C"
          }
        },
        {
          "title": {
            "text": "Rainfall"
          },
          "labels": {
            "format": "{value} mm"
          },
          "opposite": true
        }
      ],
      "series": [
        {
          "index": 1,
          "name": "Rainfall",
          "type": "column",
          "suffix": "mm",
          "yAxis": 1
        },
        {
          "index": 2,
          "name": "Temperature",
          "type": "spline",
          "suffix": "°C",
          "yAxis": 0
        }
      ]
    }
  ]
}
</pre>
