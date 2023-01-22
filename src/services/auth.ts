import { IAuth, IUser } from "../interfaces/user";
import UserModel from "../models/user";
import { encryptPassword, verifyPassword } from "../utils/bcrypt.handle";
import { signToken } from "../utils/jwt.handle";
// service for authentication

export const registerNewUser = async (user: IUser): Promise<IUser | string> => {
  const checkIsUser = await UserModel.findOne({ where: { email: user.email } });
  if (checkIsUser) return "USER_ALREADY_EXISTS";
  const passwordHash = await encryptPassword(user.password);
  const registerUser = await UserModel.create({
    ...user,
    password: passwordHash,
  });
  return registerUser;
};

export const loginUser = async ({ email, password }: IAuth) => {
  const checkIsUser = await UserModel.findOne({ where: { email } });

  if (!checkIsUser) return "NOT_FOUND_USER";

  const passwordHash = checkIsUser.password;

  const isCorrectPassword = await verifyPassword(password, passwordHash);

  if (!isCorrectPassword) return "INCORRECT_PASSWORD";

  const token = signToken(checkIsUser.email);

  return token;
};
