import React, { PureComponent } from 'react';
import { Input } from 'antd';

import './text-component.less';

export default class TextComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            textValue: this.props.formItemData.value
        };
    }
    getValue() {
        const { key } = this.props.formItemData;
        return {
            [key]: this.state.textValue
        };
    }

    validateValue() {
        return true;
    }

    _textChange(e) {
        this.setState({
            textValue: e.target.value
        });
    }

    render() {
        const { formItemData, className } = this.props;
        const {
            isRequired,
            key,
            value,
            rules,
            caption,
            note,
            placeholder
        } = formItemData;

        return (
            <div className={`${className} text-component`}>
                <div className="label-wrapper">
                    <span className="is-required">*</span>
                    <span className="caption">{caption}</span>
                </div>
                <div className="content-wrapper">
                    <div className="component-wrapper">
                        <Input
                          placeholder={placeholder}
                          value={this.state.textValue}
                          onChange={::this._textChange}
                        />
                    </div>
                    <span className="note">{note}</span>
                    <span className="validation-fail-msg">验证失败</span>
                </div>
            </div>
        );
    }
}
