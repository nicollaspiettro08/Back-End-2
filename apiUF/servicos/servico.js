import colecaoUF from "../dados/dados.js"; 

export const buscarUfs = () => colecaoUF;

export const buscarUfsPorNome = nomeUF => 
    colecaoUF.filter(uf => uf.nome.toLowerCase() === nomeUF.toLowerCase());

export const buscarUfsPorId = idUF => 
    colecaoUF.find(uf => uf.id === parseInt(idUF));

export const buscarUfPorSigla = siglaUF => 
    colecaoUF.find(uf => uf.sigla.toLowerCase() === siglaUF.toLowerCase());

export const buscarUfsPorInicial = inicialUF => 
    colecaoUF.filter(uf => uf.inicial.toLowerCase() === inicialUF.toLowerCase());
