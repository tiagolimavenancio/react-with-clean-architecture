export interface IUserParams {
  id: string;
  password: string;
}

export interface IUserDTO {
  readonly id: string;
  readonly password: string;
}

class UserDTO implements IUserDTO {
  readonly id: string;
  readonly password: string;

  constructor(params: IUserParams) {
    this.id = params.id;
    this.password = params.password;
  }
}

export default UserDTO;
