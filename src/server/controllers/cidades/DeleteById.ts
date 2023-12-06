import { RequestHandler } from "express";
import * as yup from "yup";
import { StatusCodes } from "http-status-codes";
import { validation } from "../../shared/Validation";

interface IParamProps {
    id?: number
}

export const deleteByIdValidation = validation((getSchema) => ({
    params: getSchema<IParamProps>(yup.object().shape({
        id: yup.number().integer().required().moreThan(0)
    }))
}));

export const deleteById: RequestHandler = async (req, res) => {
    res.send(req.params);
}; 