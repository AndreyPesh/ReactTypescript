export interface ValuesAuth {
  email: string;
  password: string;
}

export interface ValuesRegistration  {
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface ErrorsForm {
  email?: string;
  password?: string;
  passwordConfirm?: string;
}