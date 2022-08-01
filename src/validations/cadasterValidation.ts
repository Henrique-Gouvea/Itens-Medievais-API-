import Joi from 'joi';
import { IProduct } from '../interfaces/IProduct';

const loginSchema = Joi.object({
  name: Joi
    .string().min(3).required().messages({
      'string-base': '"name" must be a string',
      'string-min': '""name" length must be at least 3 characters long',
      'any-required': '"name" is required',
    }),
  amount: Joi
    .string().min(3).required().messages({
      'string-base': '"amount" must be a string',
      'string-min': '""amount" length must be at least 3 characters long',
      'any-required': '"amount" is required',
    }),
});

const cadasterValidation = (user: IProduct) => {
  const { error } = loginSchema.validate(user);

  if (error) {
    const verifyRequired = error.message === '"amount" is required'
    || error.message === '"name" is required';
    const e = new Error(error.message);
    e.name = verifyRequired ? 'ValidationError' : 'UnprocessableEntity';
    throw e;
  }
};

export default cadasterValidation;