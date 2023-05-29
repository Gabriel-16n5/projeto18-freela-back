import { db } from "../database/database.connection.js";

export async function getCidade(req, res) {
    try{
        const getCity = await db.query(`
            SELECT *
                FROM cidades;
        `);
    if(getCity.rows[0] === undefined) return res.sendStatus(404);
        res.status(200).send(getCity.rows);
    } catch (erro){
        res.send(erro.message)
    }
}

export async function getPassagens(req, res) {
    try{
        const getPassagens = await db.query(`
            SELECT *
                FROM passagens;
        `);
    if(getPassagens.rows[0] === undefined) return res.sendStatus(404);
        res.status(200).send(getPassagens.rows);
    } catch (erro){
        res.send(erro.message)
    }
}

export async function getPassagensCity(req, res) {
    const {id} = req.params;
    try{
        const getPassagemId = await db.query(`
            SELECT *
                FROM passagens WHERE cidades_id = $1;
        `, [id]);
    if(getPassagemId.rows[0] === undefined) return res.sendStatus(404);
        res.status(200).send(getPassagemId.rows);
    } catch (erro){
        res.send(erro.message)
    }
}