import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'minha_chave_teste';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ error: 'Token não enviado' });
    }

   
    const [, token] = authHeader.split(' ');

    if(!token){
        return res.status(401).json({error: 'Token malformatado'})
    }
        const decoded = jwt.verify(token, SECRET_KEY);  
};