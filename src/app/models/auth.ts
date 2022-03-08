export interface IAuth {
    username: string;
    password: string;
    hotel_id?: number;
}
export interface IUser {
    token_val: string;
    expire: string;
    id: number;
    profile_visit_id: number;
    hotel_id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone_no: string;
    room_no: string;
    point: number;
    guest_status: string;
    check_in_date: Date;
    check_out_date: Date;
    profile_pic_url: string;
    locale: string;
    gender: string;
    date_of_birth: Date;
    verify: boolean;
}