import Joi from 'joi';
import { ILogin } from '../interfaces/ILogin';

const loginValidation = (userLogin: ILogin) => {
  const loginSchema = Joi.object({
    username: Joi
      .string().required().messages({
        'any-required': '"username" is required',
      }),

    password: Joi
      .string().required().messages({
        'any-required': '"password" is required',
      }),
  });
  const { error } = loginSchema.validate(userLogin);

  if (error) { 
    const e = new Error(error.message);
    e.name = 'ValidationError';
    throw e;
  }
};

export default loginValidation;