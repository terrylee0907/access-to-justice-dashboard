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
    var myChart = echarts.init(document.getElementById('barBG'));
     var option = {
        color:['#9D7DF9'],
        title: {
            text: 'Monthly',
        },
        xAxis: {
            type: 'category',show:true,
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Dec','Nov']
        },
        yAxis: {
            type: 'value',show:false,
            splitLine:{
                show:false
             }
        }, 
        series: [{
            data: [120, 200, 150, 80, 70, 110, 130, 90, 80, 70, 100, 60],
            type: 'bar',
            barWidth: 40,
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
            },
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
        <div id="barBG" style={{  height: 400 }}></div>
    );
}
}

export default Test;