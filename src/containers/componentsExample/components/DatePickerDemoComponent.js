import React, { PureComponent } from 'react';

import { DatePicker } from 'antd';

import './datepicker-demo-component.less';

export default class DatePickerDemoComponent extends PureComponent {
    onChange() {}

    render() {
        const { MonthPicker, RangePicker } = DatePicker;

        return (
            <div className="datepicker-demo-component">
                <div className="datepicker-basic-demo">
                    <span className="header">datepicker-basic-demo</span>
                    <DatePicker onChange={::this.onChange} />
                    <br />
                    <MonthPicker onChange={::this.onChange} placeholder="Select month" />
                    <br />
                    <RangePicker onChange={::this.onChange} />
                </div>
            </div>
        );
    }
}
