import { IAuth, IUser } from "../interfaces/user";
import UserModel from "../models/user";
import { encryptPassword, verifyPassword } from "../utils/bcrypt.handle";
import { signToken } from "../utils/jwt.handle";
// service for authentication

export const registerNewUser = async (user: IUser): Promise<IUser | string> => {
  const checkIsUser = await UserModel.findOne({ where: { email: user.email } });
  if (checkIsUser) throw new Error("USER_ALREADY_EXISTS");
  const passwordHash = await encryptPassword(user.password);
  const registerUser = await UserModel.create({
    ...user,
    password: passwordHash,
  });
  return registerUser;
};

export const loginUser = async ({ email, password }: IAuth) => {
  const checkIsUser = await UserModel.findOne({ where: { email } });

  if (!checkIsUser) throw new Error("USER_NOT_FOUND");

  const passwordHash = checkIsUser.password;

  const isCorrectPassword = await verifyPassword(password, passwordHash);

  if (!isCorrectPassword) throw new Error("INCORRECT_PASSWORD");

  const token = signToken(checkIsUser.email);

  return token;
};
