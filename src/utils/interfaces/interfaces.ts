export interface ValuesAuth {
  email: string;
  password: string;
}

export interface ValuesRegistration  {
  email: string;
  password: string;
  name: string;
}

export interface ErrorsForm {
  email?: string;
  password?: string;
  name?: string;
}