import React, { PureComponent } from 'react';
import { Input } from 'antd';

import './text-component.less';

export default class TextComponent extends PureComponent {
    getValue() {
        return null;
    }

    validateValue() {
        return true;
    }

    render() {
        const { formItemData } = this.props;
        const {
            isRequired,
            value,
            rules,
            caption,
            note,
            placeholder
        } = formItemData;

        return (
            <div className="text-component">
                text-component
            </div>
        );
    }
}
