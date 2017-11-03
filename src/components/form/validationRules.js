const rules = {
    validateLength: (min, max, value) => {
        if (!value) return false;
        return (value.length >= min) && (value.length <= max);
    },

    validateRange: (min, max, value) => {
        if (!value) return false;
        return (value >= min) && (value <= max);
    },

    validateEmpty: (value) => {
        return value === '';
    },

    validateUrl: () => {},

    validateInclude: () => {},

    validateStartWith: () => {},

    validateEndWith: () => {}
};

export default rules;
