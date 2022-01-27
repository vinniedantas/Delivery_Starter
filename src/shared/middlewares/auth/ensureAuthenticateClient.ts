import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken"
import { IPayload } from "./IPayload";


export async function ensureAuthenticateClient(request: Request, response: Response, next: NextFunction) {

    const authHeader = request.headers.authorization;

    if (!authHeader) {
        return response.status(401).json({
            message: 'Before start, you should register'
        })
    }

    const [, token] = authHeader.split(' ');

    try {
        const { sub } = verify(
            token,
            "yourkeyhere"
        ) as IPayload;

        request.id_client = sub;



        return next();
    } catch (error) {
        return response.status(401).json({
            message: 'Invalid Token'
        })
    }
}


