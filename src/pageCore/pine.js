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
    var myChart = echarts.init(document.getElementById('pine'));
    
    var option = {
        title: {
            text: 'Gender',
            subtext: '',
            left: 'left'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient:'horizontal' ,
            left: 'center',
            bottom:'bottom', 
            icon:'circle',
            itemHeight:10, //圆点大小
            itemWidth:10, 
        },
        
        series: [
            {
                name: 'Gender',
                type: 'pie',
                radius: '50%',
                label: {
                    show: false,
                    position: 'center'
                },
                data: [
                    {value: 1048, name: 'Male' ,itemStyle:{ color:'#855CF8'}},
                    {value: 735, name: 'Female',itemStyle:{ color:'#B085FF'}},
                    {value: 580, name: 'Other' ,itemStyle:{ color:'#503795'}},
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
    myChart.setOption(option); 
    window.addEventListener("resize",function(){
        myChart.resize();
    });


}
render() {
    return (
        <div id="pine" style={{ width: 300, height: 200 }}></div>
    );
}
}

export default Test;