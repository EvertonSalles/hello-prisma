import type { Request, Response } from 'express'; 
import * as bookService from '../services/book.services.js'


export async function create(req: Request, res: Response) {
    try {
        const data = req.body;
        
        const userId = (req as any).user.id; 

        const book = await bookService.createBook(data, userId);

        return res.status(201).json(book);
    } catch (error: any) {
        return res.status(400).json({ error: error.message });
    }
}

export async function remove(req: Request, res: Response) {
  try {
    const { id } = req.params; 

  
    const userIdFromToken = (req as any).user.id;

    if (!id || typeof id !== 'string') {
      return res.status(400).json({ error: 'ID inválido' });
    }

    
    await bookService.deleteBook(id, userIdFromToken);

    return res.status(204).send();
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
}