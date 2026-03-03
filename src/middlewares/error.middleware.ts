import type { Request, Response, NextFunction } from "express";

export const errorMiddleware = (
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const statusCode = error.message.includes('não encontrado') ? 404 : 400;

    console.error(`[Erro]: ${error.message}`);

    return res.status(statusCode).json({
        message: error.message || 'Erro interno do servidor'
    })
}