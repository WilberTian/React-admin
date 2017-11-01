import React, { PureComponent } from 'react';
import FormItems from './formItems';

export default class FormItem extends PureComponent {
    constructor(props) {
        super(props);
        this.wrappedInstance = null;
    }

    getValue() {
        return this.wrappedInstance.getValue();
    }

    validateValue() {
        return this.wrappedInstance.validateValue();
    }

    render() {
        const { data } = this.props;
        const { formItemType, formItemData } = data;

        return React.createElement(FormItems[formItemType], {
            formItemData,
            ref: (formItemInstance) => { this.wrappedInstance = formItemInstance; }
        });
    }
}
