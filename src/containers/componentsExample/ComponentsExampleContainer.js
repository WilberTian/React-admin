import React, { PureComponent } from 'react';

import ButtonDemoComponent from './components/ButtonDemoComponent';
import DatePickerDemoComponent from './components/DatePickerDemoComponent';


export default class ComponentsExampleContainer extends PureComponent {
    render() {
        return (
            <div className="components-example-container">
                <ButtonDemoComponent />
                <DatePickerDemoComponent />
            </div>
        );
    }
}
