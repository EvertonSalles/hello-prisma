export interface CreateBookDTO {
    title: string;
    author: string;
}

export interface BookResponseDTO {
    id: string;
    title: string;
    author: string;
    userId: string;
}