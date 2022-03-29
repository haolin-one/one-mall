import registerProperties from './register-properties';

export function globalRegister(app) {
  app.use(registerProperties);
}
