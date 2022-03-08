

export interface ILoyaltyInfo {
    points_earned?: number;
    points_spend?: number;
    remaining_point?: number;
    overnight_stay?: number;
    target_night_stay?: number;
    earned_night_stay?: number;
    room_type?: string;
    menu_item_id?: number;
}

export interface IGuestDetails {
    id?: number;
    hotel_id?: number;
    first_name?: string;
    last_name?: string;
    profile_pic_url?: string;
    locale?: string;
    room_no?: string;
    sales_date?: Date;
    entry_date?: Date;
    release_date?: Date;
    phone_no?: string;
    booking_date?: Date;
    date_of_birth?: Date;
    document_issued_on?: Date;
    e_mail?: string;
    live_support_is_active_until_this_time?: Date;
    check_room_no?: boolean;
    next_payload_after_check_room?: string;
    created_at?: Date;
    updated_at?: Date;
    privacy_policy?: boolean;
    personal_data?: boolean;
    id_no?: string;
    wedding_anniversary?: Date;
    allergy?: boolean;
    allergy_description?: string;
    vehicle_no?: string;
    passport_front_image_url?: string;
    passport_back_image_url?: string;
    email_permission?: boolean;
    invoice_info?: boolean;
    company_name?: string;
    invoice_id_no?: string;
    tax_area?: string;
    tax_no?: string;
    company_address?: string;
    invoice_mail?: string;
    staff_name?: string;
    arrival_hour?: Date;
    guest_status?: string;
    child_person?: boolean;
    signature?: string;
    block_sms?: boolean;
    block_email?: boolean;
    interest?: string;
    is_active?: boolean;
    anniversary_date?: Date;
    birth_day?: number;
    birth_month?: number;
    is_eligible_for_account?: boolean;
    privilege_card_no?: string;
    post_code?: string;
    only_newsletter?: boolean;
    loyalty_card_id?: number;
    loyalty_card_no?: string;
    loyalty_card_family_id?: number;
    loyalty_card_family_name?: string;
    loyalty_card_family_content_id?: number;
    special_loyalty_member?: boolean;
    loyalty_info?: ILoyaltyInfo;
    referenced_profile_id?: number;
    referenced_profile_name?: string;
    badge?: number;
    last_badge_time?: Date;
    badge_a?: number;
    last_badge_a_time?: Date;
    verification_code?: string;
    verification_code_created?: Date;
    pillow_type?: string;
    bed_type?: string;
    black_list?: boolean;
    black_list_date?: Date;
    black_list_comment?: string;
    black_list_approved?: number;
    black_list_approved_name?: string;
    vip_code?: string;
    vip_description?: string;
    vip_list_date?: Date;
    vip_list_approved?: number;
    vip_list_approved_name?: string;
}



