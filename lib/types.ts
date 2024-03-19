import { User } from "next-auth";

export interface IResponse {
    data: User;
    token: string;
    message: string;
  }
  
  export interface IUser {
    id: number;
    first_name: string;
    middle_name: string;
    last_name: string;
    email: string;
    email_verified_at: string;
    date_of_birth: string;
    country: string;
    state: string;
    city: string;
    phone_number: string;
    membership_id?: any;
    profile_picture?: any;
    career_status: string;
    created_at: string;
    updated_at: string;
    deleted_at?: any;
  }


  interface SignupResponse {
    data: TSignupUser;
    status: boolean;
    message: string;
  }
  
  interface TSignupUser {
    name: string;
    email: string;
    date_of_birth: string;
    phone_number: string;
  }