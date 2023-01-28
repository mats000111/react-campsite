export const validateUserLoginForm = (values) => {
    const errors = {}

    if (!values.username) {
        errors.username = "required";
    } else if (values.username.length < 6) {
        errors.username = "must be at least 6 characters";
    } else if (values.username.length > 15) {
        errors.username = "must be 15 characters or less";
    }

    if (!values.password) {
        errors.password = "required";
    } else if (values.password.length < 8) {
        errors.password = "must be at least 8 characters";
    }

    return errors;

};
