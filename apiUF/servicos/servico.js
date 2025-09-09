import colecaoUF from "../dados/dados.js"; 

export const buscarUfs = () => {
    return colecaoUF;
};

export const buscarUfsPorNome = (nomeUF) => {
    return colecaoUF.filter(uf => 
        uf.nome.toLowerCase().includes(nomeUF.toLowerCase())
    );
};

export const buscarUfsPorId = (id) => {
    const idUF = parseInt(id);
    return colecaoUF.find(uf => uf.id === idUF);
};


export const buscarUfPorSigla = (sigla) => {
    return colecaoUf.find(uf => uf.uf.toLowerCase() === sigla.toLowerCase());
};


export const buscarUfsPorInicial = (letra)=> {
    return colecaoUF.find(uf => uf.uf.toLowerCase().startsWith(letra.toLowerCase()));
};