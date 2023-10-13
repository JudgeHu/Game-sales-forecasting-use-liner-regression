option = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '30%',
    left: 'center',
    // doesn't perfectly work with our tricks, disable it
    selectedMode: false
  },
  series: [
    {
      name: 'Steam Player GPU Share',
      type: 'pie',
      radius: ['40%', '70%'],
      center: ['50%', '70%'],
      // adjust the start angle
      startAngle: 180,
      label: {
        show: true,
        formatter(param) {
          // correct the percentage
          return param.name + ' (' + param.percent * 2 + '%)';
        }
      },
      data: [
        { value: 77, name: 'NVIDIA' },
        { value: 14.79, name: 'AMD' },
        { value: 7.89, name: 'INTEL' },
        { value: 0.32, name: 'OTHER' },
        {
          // make an record to fill the bottom 50%
          value: 77 + 14.39 + 7.89 + 0.32,
          itemStyle: {
            // stop the chart from rendering this piece
            color: 'none',
            decal: {
              symbol: 'none'
            }
          },
          label: {
            show: false
          }
        }
      ]
    }
  ]
};