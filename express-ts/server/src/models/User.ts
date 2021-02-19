export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  createdAt: Date;
}
const User: IUser[] = [
  {
    firstName: 'Mack',
    lastName: 'Bautista',
    email: 'test@test.com',
    age: 28,
    createdAt: new Date(),
  },
];
export default User;
