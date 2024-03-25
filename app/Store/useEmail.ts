import { create } from "zustand";

interface IUserData {
  email: string;
}

export type TUserEmail = string | undefined;

type TSignupStoreState = {
  email:string;
    addUserEmail: (email: string) => void;
};