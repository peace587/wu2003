var chartDom = document.getElementById('chart1');
var myChart = echarts.init(chartDom);
var option;

option = {
  title:{text:'中国网购网民数量（2011-2015）',
    link:'https://news.163.com/',
  },
  tooltip: {
  trigger: 'axis',
  axisPointer: {
    type: 'shadow'
  }
},
  xAxis: {
    name:'年',
    type: 'category',
    data: ['2011', '2012', '2013', '2014', '2015', ]
  },
  yAxis: {
    name:'万',
    type: 'value'
  },
  series: [
    {
      data: [19395, 24202, 
        30189, {value:43147,itemStyle:{color:'#a90000'}}, 53000, ],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      }
    }
  ]
};

option && myChart.setOption(option);







 (
  function(){var chartDom = document.getElementById('chart9');
    var myChart = echarts.init(chartDom);
    var option;
    
    option = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: '百分之（ %）',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 56.7, name: '天猫' },
            { value: 19.6, name: '京东' },
            { value: 5.5, name: '苏宁易购' },
            { value: 4.7, name: '腾讯B2C' },
            { value: 2.7, name: '亚马逊中国' },
            { value: 1.9, name: '当当网' },
            { value: 1.4, name: '国美电商' },
            { value: 1.4, name: '唯品会' },
            { value: 1.2, name: '凡客' },
            { value: 1.2, name: '1号店' },
            { value: 3.7, name: '其他' },
          ]
        }
      ]
    };
    
    option && myChart.setOption(option);
    
    
    
    

    
    
    

  }
 )();
 (
  function(){
    var chartDom = document.getElementById('chart2');
    var myChart = echarts.init(chartDom);
    var option;
    
    option = {
      title: [
        {
          text: '各平台直播带货购买转化率（单位：亿元,%）',
          link:'https://data.newrank.cn/?source=10000&l=ys_main-t_sjfw',
        }
      ],
      polar: {
        radius: [30, '80%']
      },
      angleAxis: {
        max: 100,
        startAngle: 75
      },
      radiusAxis: {
        type: 'category',
        data: ['淘宝直播', '京东直播', '蘑菇街直播', '抖音直播','拼多多直播','唯品会直播','快手直播','小红书直播']
      },
      tooltip: {},
      series: {
        type: 'bar',
        data: [90.57, 81.56, 67.21, 75.00,79.51,75.41,68.44,67.62],
        coordinateSystem: 'polar',
        label: {
          show: true,
          position: 'middle',
          formatter: '{b}: {c}'
        }
      }
    };
    
    option && myChart.setOption(option);
    

    
    


  }
 )();
 (
  function(){ var chartDom = document.getElementById('chart3');
    var myChart = echarts.init(chartDom);
    var option;
    
    // prettier-ignore
    let dataAxis = ['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放'];
    // prettier-ignore
    let data = [697.53, 308.32, 849.78, 273.41, 495.55, 428.14, 339.64, 828.84, 294.16, ];
    let yMax = 500;
    let dataShadow = [];
    for (let i = 0; i < data.length; i++) {
      dataShadow.push(yMax);
    }
    option = {
      title: {
        text: '抖音主播双十一直播带货',
        subtext: '来源：新抖',
        link:'https://xd.newrank.cn/broadcast/rankNew/cargoList',
        sublink:'https://xd.newrank.cn/broadcast/rankNew/cargoList',
      },
      xAxis: {
        name:'主播名称',
        data: ['苏宁易购','大利','刘楠','小小莎老师','迪迪来了','国岳','祝晓晗','罗永浩','酒仙网拉飞哥',],
        axisLabel: {
          inside: true,
          color: '#fff'
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        z: 10
      },
      yAxis: {
        name:'单位：万元',
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#999'
        }
      },
      dataZoom: [
        {
          type: 'inside'
        }
      ],
      series: [
        {
          type: 'bar',
          showBackground: true,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#83bff6' },
              { offset: 0.5, color: '#188df0' },
              { offset: 1, color: '#188df0' }
            ])
          },
          emphasis: {
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#2378f7' },
                { offset: 0.7, color: '#2378f7' },
                { offset: 1, color: '#83bff6' }
              ])
            }
          },
          data: data
        }
      ]
    };
    // Enable data zoom when user click bar.
    const zoomSize = 6;
    myChart.on('click', function (params) {
      console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
      myChart.dispatchAction({
        type: 'dataZoom',
        startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
        endValue:
          dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
      });
    });
    
    option && myChart.setOption(option);
    
    
  }
 )();
 (
  function(){ var chartDom = document.getElementById('chart4');
    var myChart = echarts.init(chartDom);
    var option;
    
    option = {
      title:{text:'2016年-2020年中国在线直播用户规模及预测'},
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      toolbox: {
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['line', 'bar'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      legend: {
        data: [, '在线直播用户数', '年增长率']
      },
      xAxis: [
        {
          type: 'category',
          data: ['2016', '2017', '2018', '2019E', '2020E', ],
          axisPointer: {
            type: 'shadow'
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '在线直播用户数',
          min: 0,
          max: 6,
          
          axisLabel: {
            formatter: '{value} 亿人'
          }
        },
        {
          type: 'value',
          name: '年增长率',
          min: 0,
          max: 30,
          
          axisLabel: {
            formatter: '{value} %'
          }
        }
      ],
      series: [
       
        {
          name: '在线直播用户数',
          type: 'bar',
          tooltip: {
            valueFormatter: function (value) {
              return value + ' 亿人';
            }
          },
          data: [
            3.10, 3.98, 4.56, 5.01, 5.24, 
          ]
        },
        {
          name: '年增长率',
          type: 'line',
          yAxisIndex: 1,
          tooltip: {
            valueFormatter: function (value) {
              return value + ' %';
            }
          },
          data: [0, 28.39, 14.57, 9.87, 4.59, ]
        }
      ]
    };
    
    option && myChart.setOption(option);
    
    

  }
 )();

 (
  function(){ var chartDom = document.getElementById('chart5');
    var myChart = echarts.init(chartDom);
    var option;
    
    option = {
      title: {
        text: '2019年H1中国直播电商用户观看直播带货频次占比统计情况',
        link:'https://www.qianzhan.com/analyst/detail/220/200116-f5265676',
        subtext: '单位；%',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: '频率',
          type: 'pie',
          radius: '50%',
          data: [
            { value:11, name: '每月一次或以下' },
            { value:14, name: '每天多次' },
            { value: 29, name: '每天一次' },
            { value:17, name: '每周4-6次' },
            { value:24, name: '每周1-3次' },
            { value: 5, name: '每月2-3次' },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
    
    option && myChart.setOption(option);
    
    

  }
 )();

 (
  function(){ var chartDom = document.getElementById('chart6');
    var myChart = echarts.init(chartDom);
    var option;
    
    option = {
      title: {
        text: '2017年6月-2020年6月中国直播观看人数与网购人数变化情况'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {},
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        name:'亿人',
        type: 'value',
        boundaryGap: [0, 0.01]
      },
      yAxis: {
        type: 'category',
        data: ['2017年6月', '2017年12月', '2018年6月', '2018年12月', '2019年6月', '2020年3月','2020年6月']
      },
      series: [
        {
          name: '直播观看人数',
          type: 'bar',
          data: [3.42, 4.22, 4.25, 3.97, 4.33,5.60,5.62]
        },
        {
          name: '网购人数',
          type: 'bar',
          data: [5.14,5.33, 5.69, 6.10, 6.39, 7.10,7.49]
        }
      ]
    };
    
    option && myChart.setOption(option);
    
    

  }
 )();

 (
  function(){ var chartDom = document.getElementById('chart7');
    var myChart = echarts.init(chartDom);
    var option;
    
    const colorList = [
      '#4f81bd',
      '#c0504d',
      '#9bbb59',
      '#604a7b',
      '#4f81bd',
      '#e46c0b'
    ];
    const data = [
      [10, 16, 121.15, '辛有志'],
      [16, 18, 21.48, '华为终端'],
      [18, 26, 39.86, '雪梨'],
      [26, 32, 19.71, '罗永浩'],
      [32, 56, 75.26, '蛋蛋小盆友'],
      [56, 62, 33.39, '时大漂亮']
    ].map(function (item, index) {
      return {
        value: item,
        itemStyle: {
          color: colorList[index]
        }
      };
    });
    option = {
      title: {
        text: '2020年直播带货总榜排名',
        left: 'center'
      },
      tooltip: {},
      xAxis: {
        name:'单位：亿元',
        scale: true
      },
      yAxis: {},
      series: [
        {
          type: 'custom',
          renderItem: function (params, api) {
            var yValue = api.value(2);
            var start = api.coord([api.value(0), yValue]);
            var size = api.size([api.value(1) - api.value(0), yValue]);
            var style = api.style();
            return {
              type: 'rect',
              shape: {
                x: start[0],
                y: start[1],
                width: size[0],
                height: size[1]
              },
              style: style
            };
          },
          label: {
            show: true,
            position: 'top'
          },
          dimensions: ['from', 'to', '销售额'],
          encode: {
            x: [0, 1],
            y: 2,
            tooltip: [0, 1, 2],
            itemName: 3
          },
          data: data
        }
      ]
    };
    
    option && myChart.setOption(option);
    
    

  }
 )();

 (
  function(){ // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('chart8'));

    // 指定图表的配置项和数据
var name_title = "全国主要直播电商企业分布"
    var mapName = 'china'
    var data = [
    { name: '广东', value: 97277.77 },
{ name: '江苏', value: 92595.4 },
{ name: '山东', value: 76469.67 },
{ name: '浙江', value: 56197.15 },
{ name: '河南', value: 48055.86 },
{ name: '四川', value: 40678.13 },
{ name: '湖北', value: 39366.55 },
{ name: '湖南', value: 36425.78 },
{ name: '河北', value: 36010.27 },
{ name: '福建', value: 35804.04 },
{ name: '上海', value: 32679.87 },
{ name: '北京', value: 30319.98 },
{ name: '安徽', value: 30006.82 },
{ name: '辽宁', value: 25315.35 },
{ name: '陕西', value: 24438.32 },
{ name: '江西', value: 21984.78 },
{ name: '重庆', value: 20363.19 },
{ name: '广西', value: 20352.51 },
{ name: '天津', value: 18809.64 },
{ name: '云南', value: 17881.12 },
{ name: '内蒙古', value: 17289.22 },
{ name: '山西', value: 16818.11 },
{ name: '黑龙江', value: 16361.62 },
{ name: '吉林', value: 15074.62 },
{ name: '贵州', value: 14806.45 },
{ name: '新疆', value: 12199.08 },
{ name: '甘肃', value: 8246.07 },
{ name: '海南', value: 4832.05 },
{ name: '宁夏', value: 3705.18 },
{ name: '青海', value: 2865.23 },
{ name: '西藏', value: 1477.63 }

    ];
    var option = {
        title: {
            text: name_title,
            x: 'center',
            textStyle: {
                fontSize: 24
            },                
        },
        tooltip: {
            trigger: 'item',
            formatter: function(params) {                        
                    var toolTiphtml = ''
        if (isNaN(params.value)){
                    toolTiphtml = params.name + '家'
        }else{
        toolTiphtml = params.name + '数量： ' + params.value + '家'
        }
                    //console.log(toolTiphtml)                        
                    return toolTiphtml;                   
            }
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        visualMap: {
            show: true,
            left: 'left',
            top: 'bottom',
            seriesIndex: [0],
            type:'piecewise',
            pieces:[
                {min:1200, color: 'rgb(254,57,101)'},
                {min:900, max:1199, color: 'rgb(243, 11, 30)'},
                {min:600, max:899, color: 'rgb(249,205,173)'},
                {min:100, max:599, color: 'rgb(14, 153, 155)'},
                {min:0, max:99, color: 'rgb(31, 106, 171)'},
            ],            
            textStyle: {
                color: '#000000'
            }
        },            
        geo: {
            show: true,
            map: mapName,
            label: {
                normal: {
                    show: true,
                    fontSize:12,
                },
                emphasis: {
                    show: false,
                }
            },
            roam: false,
            itemStyle: {
                normal: {
                    areaColor: '#FFFFFF',
                    borderColor: '#666666',
                },
                emphasis: {
                    areaColor: '#0099CC',
                }
            }
        },
        series: [
            {
                type: 'map',
                map: mapName,
                geoIndex: 0,           
                animation: false,
                data: [
    { name: '广东', value: 1184},
{ name: '江苏', value: 265},
{ name: '山东', value: 751},
{ name: '浙江', value: 559 },
{ name: '河南', value: 270 },
{ name: '四川', value: 395},
{ name: '湖北', value: 371},
{ name: '湖南', value: 301},
{ name: '河北', value: 95},
{ name: '福建', value: 718 },
{ name: '上海', value: 68 },
{ name: '北京', value: 39 },
{ name: '安徽', value: 218},
{ name: '辽宁', value: 136},
{ name: '陕西', value: 51 },
{ name: '江西', value: 148 },
{ name: '重庆', value: 217 },
{ name: '广西', value: 84},
{ name: '天津', value: 27},
{ name: '云南', value: 91},
{ name: '内蒙古', value: 27 },
{ name: '山西', value: 58 },
{ name: '黑龙江', value: 125 },
{ name: '吉林', value: 137 },
{ name: '贵州', value: 92 },
{ name: '新疆', value: 19},
{ name: '甘肃', value: 30},
{ name: '海南', value: 597 },
{ name: '宁夏', value: 14 },
{ name: '青海', value: 12 },
{ name: '西藏', value: 5}

    ]
            },
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

  }
)();

(
  function(){var chartDom = document.getElementById('chart10');
    var myChart = echarts.init(chartDom);
    var option;
    
    option = {
      title:{text:'2023年抖音各直播间销售额占比情况',
        link:'https://dy.feigua.cn/article/detail/890.html',
        subtext:'来源：飞瓜',
        sublink:'https://dy.feigua.cn/article/detail/890.html',

      },
      series: [
        {
          type: 'treemap',
          data: [
            {
              name: '右',
              value: 8,
              children: [
                {
                  name: '个体店',
                  value: 55
                },
                {
                  name: '旗舰店',
                  value: 21
                },
                {
                  name: '企业店',
                  value: 1
                }
              ]
            },
            {
              name: '左',
              value: 12,
              children: [
                {
                  name: '官方旗舰店',
                  value: 17
                },
                {
                  name: '专卖店',
                  value: 4
                },
                {
                  name: '专营店',
                  value: 3
                }
              ]
            },
          ]
        }
      ]
    };
    
    option && myChart.setOption(option);
    
    
    

  }
)();

(
  function(){var chartDom = document.getElementById('chart11');
    var myChart = echarts.init(chartDom);
    var option;
    
    option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // Use axis to trigger tooltip
          type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
        }
      },
      legend: {},
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value'
      },
      yAxis: {
      
        type: 'category',
        data: ['2023', '2022', '2021', ]
      },
      series: [
        {
          name: '直播',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [89, 83, 80,]
        },
        {
          name: '视频',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [6, 3, 4, ]
        },
        {
          name: '商品卡',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [5, 13, 16, ]
        },
        
      ]
    };
    
    option && myChart.setOption(option);
    

})();

(
  function(){var chartDom = document.getElementById('chart12');
    var myChart = echarts.init(chartDom);
    var option;
    
    option = {
      graphic: {
        elements: [
          {
            type: 'text',
            left: 'center',
            top: 'center',
            style: {
              text: '直播电商',
              fontSize: 80,
              fontWeight: 'bold',
              lineDash: [0, 200],
              lineDashOffset: 0,
              fill: 'transparent',
              stroke: '#000',
              lineWidth: 1
            },
            keyframeAnimation: {
              duration: 3000,
              loop: true,
              keyframes: [
                {
                  percent: 0.7,
                  style: {
                    fill: 'transparent',
                    lineDashOffset: 200,
                    lineDash: [200, 0]
                  }
                },
                {
                  // Stop for a while.
                  percent: 0.8,
                  style: {
                    fill: 'transparent'
                  }
                },
                {
                  percent: 1,
                  style: {
                    fill: 'black'
                  }
                }
              ]
            }
          }
        ]
      }
    };
    
    option && myChart.setOption(option);
    

  })();