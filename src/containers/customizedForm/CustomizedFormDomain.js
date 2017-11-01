import services from '../../services/customizedFormService';

const domain = {
    model: {
        formItems: []
    },
    action: {
        queryFormData: async () => {
            const result = await services.queryFormData();
            domain.dispatch((model) => {
                return {
                    ...model,
                    formItems: result.data.formItems
                };
            });
        }
    }
};

export default domain;
