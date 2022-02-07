import { REG_EXP_EMAIL } from '../constants/constants';
import { MessageErrorFormField } from '../enum/enum';
import { ErrorsForm, ValuesAuth, ValuesRegistration } from '../interfaces/interfaces';

const checkEmail = (email: string, errors: ErrorsForm): ErrorsForm => {
  if (!email) {
    errors.email = MessageErrorFormField.emptyField;
  } else if (email.length < 5) {
    errors.email = MessageErrorFormField.fewLength;
  } else if (!REG_EXP_EMAIL.test(email)) {
    errors.email = MessageErrorFormField.incorrectEmail;
  }
  return errors;
};

const checkPassword = (password: string, errors: ErrorsForm): ErrorsForm => {
  if (!password) {
    errors.password = MessageErrorFormField.emptyField;
  } else if (password.length < 5) {
    errors.password = MessageErrorFormField.fewLength;
  }
  return errors;
};

const comparePassword = (password: string, passwordConfirm: string, errors: ErrorsForm): ErrorsForm => {
  if (password !== passwordConfirm) {
    errors.passwordConfirm = MessageErrorFormField.comparePassword;
  }
  return errors;
};

export const validateAuthorization = (values: ValuesAuth) => {
  const errors: ErrorsForm = {};
  return { ...checkEmail(values.email, errors), ...checkPassword(values.password, errors) };
};

export const validateRegistration = (values: ValuesRegistration) => {
  const errors: ErrorsForm = {};
  return {
    ...checkEmail(values.email, errors),
    ...checkPassword(values.password, errors),
    ...comparePassword(values.password, values.passwordConfirm, errors),
  };
};
