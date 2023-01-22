import { hash, compare } from "bcryptjs";

// encrypt and verify password

export const encryptPassword = async (password: string): Promise<string> => {
  const hashPassword = await hash(password, 10);
  return hashPassword;
};

export const verifyPassword = async (
  password: string,
  hash: string
): Promise<boolean> => {
  const verify = await compare(password, hash);
  return verify;
};
