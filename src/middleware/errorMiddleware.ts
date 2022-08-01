// import { Request, Response } from 'express';
// import { IError } from '../interfaces/IError';
// import { IErrorStatus } from '../interfaces/IErrorStatus';

// enum Errors {
//   ValidationError = 400,
//   Unauthorized = 401,
//   NotFound = 404,
//   Conflict = 409,
//   InternalServer = 500,
// }

// export default ({ name, message }:IError, req: Request, res: Response) => {
//   const status = Errors[name];
//   if (!status) return res.sendStatus(Errors.InternalServer);
//   res.status(status).json({ message });
// };

import { ErrorRequestHandler } from 'express';

export const errorMiddleware: ErrorRequestHandler = async (err, _req, res, next) => {
  const { name, message } = err;
  console.log(`name: ${name}`);

  switch (name) {
    case 'ValidationError':
      res.status(400).json({ message });
      break;
    case 'Unauthorized':
      res.status(401).json({ message });
      break;
    case 'NotFoundError':
      res.status(404).json({ message });
      break;
    default:
      console.error(err);
      res.sendStatus(500);
  }
  next();
};

export default errorMiddleware;