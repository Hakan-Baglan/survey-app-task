export interface ISurveyLine {
    id: number;
    hotel_id: number;
    survey_header_id: number;
    survey_result: ISurvey;
    question_group: string;
    question: string;
    question_type: string;
    description: string;
    priority: number;
    created_at: Date;
    updated_at: Date;
}

export interface ISurvey {
    id: number;
    hotel_id: number;
    hotel_name: string;
    question_groups: string[];
    name: string;
    description: string;
    status: string;
    notify_type: string;
    sending_result_type: string;
    emails: string;
    positive_redirect_urls: string[];
    thanks_message_for_positive_reviews: string;
    thanks_message_for_negative_reviews: string;
    ask_note_after_survey: boolean;
    created_at: Date;
    updated_at: Date;
    survey_lines: ISurveyLine[];
}


export interface ISurveyHeader {
    id: number;
    hotel_id: number;
    hotel_name: string;
    question_groups: string[];
    name: string;
    description: string;
    status: string;
    notify_type: string;
    sending_result_type: string;
    emails: string;
    positive_redirect_urls: string[];
    thanks_message_for_positive_reviews: string;
    thanks_message_for_negative_reviews: string;
    ask_note_after_survey: boolean;
    created_at: Date;
    updated_at: Date;
    survey_lines?: any;
    groups?: any;
}

export interface ISurveyHeaderObject {
    id: number;
    hotel_id: number;
    hotel_name: string;
    profile_id: number;
    profile_name: string;
    survey_header_id: number;
    survey_header_name: string;
    survey_header: ISurveyHeader;
    survey_header_description: string;
    survey_result: number;
    profile_note: string;
    assessing_user_id: number;
    assessing_user_name: string;
    user_note: string;
    survey_answers?: any;
}
    
    