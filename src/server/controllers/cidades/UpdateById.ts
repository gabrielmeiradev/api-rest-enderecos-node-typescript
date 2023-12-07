import { RequestHandler } from "express";
import * as yup from "yup";
import { StatusCodes } from "http-status-codes";
import { validation } from "../../shared/Validation";
import { ICidade } from "../../database/models";

interface IParamProps {
    id?: number
}

interface IBodyProps extends Omit<ICidade, "id">{}

export const updateByIdValidation = validation((getSchema) => ({
    params: getSchema<IParamProps>(yup.object().shape({
        id: yup.number().integer().required().moreThan(0)
    })),
    body: getSchema<IBodyProps>(yup.object().shape({
        nome: yup.string().required().min(3)
    }))
}));

export const updateById: RequestHandler = async (req, res) => {
    res.send(req.params);
}; 