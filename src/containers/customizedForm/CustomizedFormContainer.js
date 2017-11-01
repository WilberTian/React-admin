import React, { PureComponent } from 'react';

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
    async componentWillMount() {
        const { queryFormData } = this.props;
        await queryFormData();
    }

    render() {
        const { formItems } = this.props;

        return (
            <div className="customized-form-container">
                {formItems.length > 0 && formItems.map((formItem, index) => {
                    return (<FormItem data={formItem} key={index} />);
                })}
            </div>
        );
    }
}
