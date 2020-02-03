export default {
  /**
   * @param {String} attributeName The attribute name
   * @param {String} backEndAttributeKey The attribute key in the back end API
   * @param {Object} attributeValidator The attribute's validator object from vuelidate
   * @param {Object} backEndValidationMessages (optional) The object containing back end API
   * validation messages for the attribute
   * @return {String} The message to be shown in case there is an error or an empty string if there
   * is no error
   */
  getMessageFor: (
    attributeName: string,
    backEndAttributeKey: string,
    attributeValidator: any,
    backEndValidationMessages: any = {},
  ) => {
    let message = '';
    let backEndValidationMessage = '';
    const validator = { ...attributeValidator };

    if (validator.$dirty) {
      if (Object.prototype.hasOwnProperty.call(validator, 'required') && !validator.required) {
        message += ` O campo ${attributeName} é obrigatório.`;
      }
      if (Object.prototype.hasOwnProperty.call(validator, 'email') && !validator.email) {
        message += ` O campo ${attributeName} deve ser um endereço de e-mail válido.`;
      }
      if (Object.prototype.hasOwnProperty.call(validator, 'minLength') && !validator.minLength) {
        message += ` O campo ${attributeName} deve ter no mínimo ${validator.$params.minLength.min} caracteres.`;
      }
      if (Object.prototype.hasOwnProperty.call(validator, 'maxLength') && !validator.maxLength) {
        message += ` O campo ${attributeName} deve ter no máximo ${validator.$params.maxLength.max} caracteres.`;
      }
    }

    if (Object.prototype.hasOwnProperty.call(backEndValidationMessages, backEndAttributeKey)) {
      backEndValidationMessage = ` ${backEndValidationMessages[backEndAttributeKey]}`;
    }

    return (message + backEndValidationMessage).trim();
  },
};
