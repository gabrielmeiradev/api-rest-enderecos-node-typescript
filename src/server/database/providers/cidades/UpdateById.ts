import { Knex } from "../../knex";
import { ETableNames } from "../../ETableNames";
import { ICidade } from "../../models";

export const updateById = async (id: number, cidade: Omit<ICidade, "id">): Promise<void | Error> => {
    try {
        const result = await Knex(ETableNames.cidade)
            .update(cidade)
            .where("id", "=", id);

        if(result > 0) return;

        return new Error("Erro ao atualizar registro");
    } catch (err) {
        console.log(err);
        return new Error("Erro ao atualizar registro");
    }
}