import { REG_EXP_EMAIL } from '../constants/constants';
import { MessageErrorFormField } from '../enum/enum';
import { ErrorsAuth, ValuesAuth } from '../interfaces/interfaces';

export const validateAuthorization = (values: ValuesAuth) => {
  const errors: Partial<ErrorsAuth> = {};
  if (!values.email) {
    errors.email = MessageErrorFormField.emptyField;
  } else if (values.email.length < 5) {
    errors.email = MessageErrorFormField.fewLength;
  } else if (!REG_EXP_EMAIL.test(values.email)) {
    errors.email = MessageErrorFormField.incorrectEmail;
  }
  if (!values.password) {
    errors.password = MessageErrorFormField.emptyField;
  } else if (values.password.length < 5) {
    errors.password = MessageErrorFormField.fewLength;
  }
  return errors;
};
