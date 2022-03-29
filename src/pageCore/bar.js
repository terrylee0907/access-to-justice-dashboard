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
    var myChart = echarts.init(document.getElementById('bar'));
     var option = {
        title: {
            text: 'Number of Total case in each subject',
        },
        color:['#9D7DF9'],
        xAxis: {
            type: 'category',
            data: ['Housing', 'Debt','income', 'child', 'Family', 'other',],
            axisLabel: {
                textStyle:{
                    color: '#000'
                }
            },
            axisLine: {
                lineStyle:{
                    width:0,color:'#fff'
                }
            }
        },
        yAxis: {
            type: 'value',show:false,
            splitLine:{
                show:false
             }
        },
        series: [{
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            barWidth: 40,
            itemStyle: {
                normal: {
                      barBorderRadius:4
                }
           }, 
        }]
    };
    myChart.setOption(option); 
    window.addEventListener("resize",function(){
        myChart.resize();
    });


}
render() {
    return (
        <div id="bar" style={{ height: 400 }}></div>
    );
}
}

export default Test;