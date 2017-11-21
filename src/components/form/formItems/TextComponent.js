import React, { PureComponent } from 'react';
import { Input } from 'antd';

import validationRules from '../validationRules';
import scrollTo from '../scrollTo';

import './text-component.less';

export default class TextComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            textValue: this.props.formItemData.value,
            validationErrMsg: ''
        };
    }

    getValue() {
        const { key } = this.props.formItemData;
        return {
            [key]: this.state.textValue
        };
    }

    validateValue() {
        const { validate } = this.props.element.recording.description;
        for (let i = 0; i < validate.length; i += 1) {
            const { name, errMsg } = validate[i];
            const validator = validationRules[name];

            if (!validator(validate[i], this.state.value)) {
                this.setState({
                    validationErrMsg: errMsg
                });

                return false;
            }
        }

        this.setState({
            validationErrMsg: ''
        });
        return true;
    }

    scrollTo() {
        const container = document.querySelector('.app-container .ant-layout');

        scrollTo(container, this.el);
    }

    _textChange(e) {
        this.setState({
            textValue: e.target.value
        }, () => {
            this.validateValue();
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
            <div className={`${className} text-component`} ref={(el) => { this.el = el; }}>
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
                    {this.state.validationErrMsg &&
                        <span className="validation-fail-msg">{this.state.validationErrMsg}</span>
                    }
                </div>
            </div>
        );
    }
}
