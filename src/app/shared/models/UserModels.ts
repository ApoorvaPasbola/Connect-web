export interface User{
firstName:string,
lastName:string,
userCredentials:UserCredentials
}

export interface UserCredentials{
  username:string,
  password:string,
  email:string
}
