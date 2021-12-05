/* 
PIE CHART
================================================ */
var pieData = {
  labels: ['Webデザイナー', 'Webデベロッパー', 'サーバーエンジニア', '営業職'],
  series: [14, 9, 8, 6]
};

var pieOptions = {
  width: '100%'
};
var responsivePieOptions = [
  ['screen and (min-width: 600px)', {
    height: '400px'
  }],
  ['screen and (max-width: 599px)', {
    height: '220px'
  }]
];

new Chartist.Pie('.pie-chart', pieData, pieOptions, responsivePieOptions);

/* 
BAR CHART
================================================ */
var barData = {
  labels: ['2018年', '2019年', '2020年'],
  series: [[10, 16, 29]]
};

var barOptions = {
  axisY: {
    offset: 60,
    scaleMinSpace: 50,
    labelInterpolationFnc: function(value) {
      return value + '人'
    }
  },
  width: '100%'
};
var responsiveBarOptions = [
  ['screen and (min-width: 600px)', {
    height: '400px'
  }],
  ['screen and (max-width: 599px)', {
    heght: '220px'
  }]
];

new Chartist.Bar('.bar-chart', barData, barOptions, responsiveBarOptions);