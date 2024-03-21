interface RootObject {
    data: Data;
    status: boolean;
    message: string;
  }
  
  interface Data {
    name: string;
    email: string;
    date_of_birth: string;
    phone_number: string;
  }

interface RootObject {
    data: Data;
    token: string;
    message: string;
  }
  
  interface Data {
    id: number;
    first_name: string;
    middle_name?: any;
    last_name: string;
    email: string;
    email_verified_at: string;
    date_of_birth: string;
    country: string;
    city_state_province: string;
    phone_number: string;
    membership_id?: any;
    profile_picture?: any;
    interests: any[];
    created_at: string;
    updated_at: string;
    deleted_at?: any;
  }

type User = {
    name: string;
    email: string;
    date_of_birth?: string;

}

export interface Product  {
  id: string;
  productId?: string;
  image: string ;
  title: string;
  description?: string;
  price: number;
  quantity: number;
  color: string;
  subtotal: number;
  size: string;
};