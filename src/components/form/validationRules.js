const rules = {
    validateLength: ({ ...ruleObj }, value) => {
        if (!value) return false;
        return (value.length >= ruleObj.min) && (value.length <= ruleObj.max);
    },

    validateLength4Field: ({ ...ruleObj }, obj) => {
        if (!obj[ruleObj.key]) return false;
        return (obj[ruleObj.key].length >= ruleObj.min) && (obj[ruleObj.key].length <= ruleObj.max);
    },

    validateRange: ({ ...ruleObj }, value) => {
        if (!value) return false;
        return (value >= ruleObj.min) && (value <= ruleObj.max);
    },

    validateEmpty: ({ ...ruleObj }, value) => {
        return value === '';
    },

    validateUrl: () => {},

    validateInclude: () => {},

    validateStartWith: () => {},

    validateEndWith: () => {}
};

export default rules;
