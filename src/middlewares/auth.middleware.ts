import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'minha_chave_teste';


interface UserPayload {
    id: string;
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ error: 'Token não enviado' });
    }

    const [, token] = authHeader.split(' ');

    if (!token) {
        return res.status(401).json({ error: 'Token malformatado' });
    }

    try {
       
        const decoded = jwt.verify(token, SECRET_KEY) as UserPayload;  
        
        
        req.user = { id: decoded.id };

        return next();

    } catch (err: any) {
     
        return res.status(401).json({ error: 'Token inválido ou expirado' });
    }
};