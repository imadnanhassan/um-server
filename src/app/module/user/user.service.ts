import config from "../../config";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";
import { User } from "./user.mode";

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  //   create user object
  const userData: Partial<TUser> = {};

  // if passwprd is not given, use default password
  userData.password = password || (config.default_password as string);

  //  set student role
  userData.role = "student";

  // set manually generated id
  userData.id = "2030100001";

  const newUser = await User.create(userData);

  if (Object.keys(userData).length) {
    studentData.id = newUser.id;
    studentData.user = newUser._id;

    const newStudent = await Student.create(studentData);
    return newStudent;
  }
};

export const UserServices = {
  createStudentIntoDB,
};
