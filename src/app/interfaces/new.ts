
export interface New {
    _id?: string;
    title?: string;
    subtitle?: string;
    author?: string;
    img_new?: string;
    img_author?: string;
    paragraph1?: string;
    paragraph2?: string;
    paragraph3?: string;
    paragraph4?: string;
    created?: Date;
}

export interface NewResponse {
    ok: boolean;
    page: number;
    news: New[];
}



