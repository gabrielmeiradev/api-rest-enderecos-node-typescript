import { RequestHandler } from "express";
import * as yup from "yup";
import { StatusCodes } from "http-status-codes";
import { validation } from "../../shared/Validation";

interface ICidade {
    nome: string
}

export const createValidation = validation((getSchema) => ({
    body: getSchema<ICidade>(yup.object().shape({
        nome: yup.string().required().min(3)
    }))
}));

export const create: RequestHandler = async (req, res) => {
    return res.status(StatusCodes.CREATED).json(1);
}; 