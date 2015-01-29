define(function(){
  var defaultConfig = {
    pie: {
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.2f}%'
      },
      plotOptions:{
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.2f}%'
          }
        }
      }
    }
  };

  return function(config, chartData){
    if(config && chartData){
      var chartConfig,
        chartType = '',
        seriesData = [],
        xAxisData = {},
        xAxisType = '',
        xAxisCategories = [];

      if (config.type){
        chartType = config.type;
      }

      // generate xAxisData for highchart xAxis
      if (config.xAxis){
        xAxisType = config.xAxis.type;
        xAxisData = config.xAxis;
        if (!config.xAxis.minTickInterval && xAxisType =="datetime") {
          xAxisData.minTickInterval = 24 * 3600 * 1000 ;
        }
      }

      // generate seriesData for highchart series
      _.each(config.series, function(ele, index){
        var seriesItem = [];
        for(var i=0, len=chartData.length; i<len; i++){
          if (xAxisType == 'datetime' || chartType == 'pie' ){
            //时间戳（距1970年1月1日的毫秒数）
            var timestamp = chartData[i][0];
            seriesItem.push([timestamp, chartData[i][ele.index]]);
          }else{
            xAxisCategories.push(chartData[i][0]);
            seriesItem.push(chartData[i][ele.index]);
          }
        }
        seriesData.push({
          name: ele.name || '',
          type: ele.type || '',
          data: seriesItem,
          tooltip: {
            valuePrefix: ele.prefix || '',
            valueSuffix: ele.suffix || ''
          },
          yAxis: ele.yAxis || 0
        });
      });

      // generate xAxisCategories for highchart xAxis.categories
      if (xAxisCategories && xAxisCategories.length>0 && chartType != 'pie'){
        xAxisData.categories = xAxisCategories;
      }

      //combine to real highchart config
      chartConfig = {
        chart: {
        },
        title: {
          text: config.title
        },
        series: seriesData
      };
      if(config.type){
        chartConfig.chart.type = chartType;

        if (chartType == 'pie'){
          chartConfig.tooltip = defaultConfig.pie.tooltip;
          chartConfig.plotOptions = defaultConfig.pie.plotOptions;
        }
      }
      if (xAxisData){
        chartConfig.xAxis = xAxisData;
      }
      if (config.yAxis && config.yAxis.length>0){
        chartConfig.yAxis = config.yAxis;
      }

      console.log(chartConfig);
      return chartConfig;
    }
  };
});