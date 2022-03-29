import React from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/markLine';


class Test extends React.Component {
  componentDidMount() {
    // 初始化
    var myChart = echarts.init(document.getElementById('line'));
    
    var option = {
        title: {
            text: 'Cases'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            itemHeight:2, //圆点大小
            itemWidth:50, 
            align:"right"
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage1: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed','Thu','Fri' ]
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: 'Total Case',
                type: 'line',
                stack: '总量',
                itemStyle:{ color:'#7CADF8'},
                data: [120, 132, 101, 134, 90, 230, 210] 
            },
            {
                name: 'Poverty Law',
                type: 'line',
                stack: '总量',
                itemStyle:{ color:'#75CBA6'},
                data: [220, 182, 191, 234, 290, 330, 310]
                
            },
            {
                name: 'Fimaly Law',
                type: 'line',
                stack: '总量',
                itemStyle:{ color:'#FFD57F'},
                data: [150, 232, 201, 154, 190, 330, 410]
            }, 
        ]
    };
    myChart.setOption(option); 
    window.addEventListener("resize",function(){
        myChart.resize();
    });


}
render() {
    return (
        <div id="line" style={{ width: '100%', height: 500 }}></div>
    );
}
}

export default Test;