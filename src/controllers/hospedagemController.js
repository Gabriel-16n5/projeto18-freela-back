import { db } from "../database/database.connection.js";

export async function getHospedagemId(req, res) {
    const {id} = req.params;
    try{
        const getCityId = await db.query(`
            SELECT *
                FROM hospedagens WHERE id = $1;
        `, [id]);
    if(getCityId.rows[0] === undefined) return res.sendStatus(404);
        res.status(200).send(getCityId.rows);
    } catch (erro){
        res.send(erro.message)
    }
}

export async function getHospedagem(req, res) {
    try{
        const getCitys = await db.query(`
            SELECT *
                FROM hospedagens;
        `);
    if(getCitys.rows[0] === undefined) return res.sendStatus(404);
        res.status(200).send(getCitys.rows);
    } catch (erro){
        res.send(erro.message)
    }
}