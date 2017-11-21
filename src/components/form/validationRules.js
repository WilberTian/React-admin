const rules = {
    validateLength: ({ ...ruleObj }, value) => {
        if (!value) return false;
        return (value.length >= ruleObj.value[0]) && (value.length <= ruleObj.value[1]);
    },

    validateLength4Field: ({ ...ruleObj }, obj) => {
        if (!obj[ruleObj.key]) return false;
        return (obj[ruleObj.key].length >= ruleObj.value[0]) && (obj[ruleObj.key].length <= ruleObj.value[1]);
    },

    validateRange: ({ ...ruleObj }, value) => {
        if (!value) return false;
        return (value >= ruleObj.value[0]) && (value <= ruleObj.value[1]);
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
