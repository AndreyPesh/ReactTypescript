export enum TypeForm {
  Authorization = 'auth',
  Registration = 'registration',
}

export enum MessageErrorFormField {
  emptyField = 'Поле не заполнено!',
  fewLength = 'Не менее 5 символов',
  incorrectEmail = 'Некорректный e-mail адрес',
  comparePassword = 'Пароли не совпадают'
}