import { Request, Response, NextFunction } from 'express';
import UserModel from '../models/user';
import log from '../services/logger';

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email, first_name, last_name } = req.body;
    if (!email || !first_name || !last_name) {
      log({
        level: 'error',
        user: 'Unknown User',
        url: req?.method + ': ' + req?.originalUrl,
        message: '*** createUser: Invalid data ***',
      });
    }
    const user = new UserModel({
      email,
      first_name,
      last_name,
    });
    const newUser = await user.save();

    log({
      level: 'info',
      user: 'Unknown User',
      url: req?.method + ': ' + req?.originalUrl,
      message: '*** createUser: new user created ***',
    });

    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const users = await UserModel.find({});
    res.status(201).json(users);
  } catch (error) {
    next(error);
  }
};

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.query;
  try {
    const users = await UserModel.find({ _id: id });
    res.status(201).json(users);
  } catch (error) {
    next(error);
  }
};
