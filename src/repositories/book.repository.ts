import { prisma } from '../../database/prisma.js';

export async function createBook(title: string, author: string, userId: string) {
    return prisma.book.create({
        data: {
            title,
            author,
            userId 
        }
    });
}

export async function findBooksByUser(userId: string) {
    return prisma.book.findMany({
        where: { userId }
    });
}

export async function findBookById(id: string){
    return prisma.book.findUnique({
        where: {id}
    });
}

export async function deleteBook(id: string){
    return prisma.book.delete({
        where: {id}
    })
}