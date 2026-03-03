import * as bookRepository from '../repositories/book.repository.js';
import * as userRepository from '../repositories/user.repository.js'
import type { CreateBookDTO } from '../dtos/book.dto.js';

export async function createBook(data: CreateBookDTO, userId: string) {
    if (!data.title || !data.author) {
        throw new Error("Título e Autor são obrigatórios");
    }
    return bookRepository.createBook(data.title, data.author, userId);
}

export async function deleteBook(bookId: string, userIdFromToken: string) {
  
    const book = await bookRepository.findBookById(bookId);

    if (!book) {
        throw new Error('Livro não encontrado');
    }

   
    if (book.userId !== userIdFromToken) {
        throw new Error('Você não tem permissão para deletar este livro');
    }

 
    return bookRepository.deleteBook(bookId);
}