//import { Request, Response } from 'express'
import { Request, Response } from 'express'
const axios = require('axios');
import { prismaClient } from '../database/prismaClient';




export class LicitacaoController {
    async migrationApi(request: Request, response: Response) {
        //const { orgao, titulo, estado, cidade, objeto, datas } = request.body;
    
        await axios.get('http://nadic.ifrn.edu.br/api/dou/2022-02-08/?usuario=dev_nadic')
        .then(function(resposta){
            console.log(resposta.data) //caso retorne um sucesso
        //.catch(error => console.log(error)) //caso ocorra algum erro    
        
        //console.log(response);


        return response.json();
           
        })
    }
}

