import React, { PureComponent } from 'react';
import { Button } from 'antd';

import DomainComponentCreator from '../../utils/DomainComponentCreator';
import DomainMapper from '../../utils/DomainMapper';
import CustomizedFormDomain from './CustomizedFormDomain';

import FormItem from '../../components/form/FormItem';

import './customized-form-container.less';

const mapper = {
    modelMapper: (model) => {
        return {
            formItems: model.formItems
        };
    },
    actionMapper: (action) => {
        return {
            queryFormData: action.queryFormData
        };
    }
};

@DomainComponentCreator(CustomizedFormDomain)
@DomainMapper(mapper)
export default class CustomizedFormContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.formItemInstanceList = [];
    }

    async componentWillMount() {
        const { queryFormData } = this.props;
        await queryFormData();
    }

    _validateForm() {

    }

    _submitForm() {
        let submitData = {};
        this.formItemInstanceList.forEach((formItemInstance) => {
            submitData = { ...submitData, ...formItemInstance.getValue() };
        });

        console.log(submitData);
    }

    render() {
        const { formItems } = this.props;

        return (
            <div className="customized-form-container">
                {formItems.length > 0 && formItems.map((formItem, index) => {
                    return (
                        <FormItem
                          data={formItem}
                          key={index}
                          ref={(formItemInstance) => { this.formItemInstanceList.push(formItemInstance); }}
                        />
                    );
                })}
                <Button className="submit-btn" type="primary" onClick={::this._submitForm}>Submit</Button>
            </div>
        );
    }
}
