import React, { PureComponent } from 'react';
import ReactEcharts from 'echarts-for-react';

import './barchart-container.less';

export default class BarchartContainer extends PureComponent {
    getOption() {
        const option = {
            color: ['#3398DB'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '直接访问',
                    type: 'bar',
                    barWidth: '60%',
                    data: [10, 52, 200, 334, 390, 330, 220]
                }
            ]
        };
        return option;
    }

    render() {
        return (
            <div className="barchart-container">
                <ReactEcharts
                  option={::this.getOption()}
                  style={{ height: '350px', width: '100%' }}
                  className="barchart-component"
                />
            </div>
        );
    }
}
