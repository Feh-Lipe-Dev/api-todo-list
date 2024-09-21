import sqlite3 from "sqlite3";

const SQLite3 = sqlite3.verbose();   //verbose fornece mais detalhes no console sobre as operações

    /* 
=> Database: classe para conexão com BD.
    Deve ser instanciada com a variável que contém a importação do BD
=> 'banco.db': deve ser passado como parâmetro o arquivo 'db' do projeto
=> OPEN_READWRITE => propriedade SQLite que permite leitura e escrita
=> aceita funções como parâmetros
    */

const db = new SQLite3.Database('banco.db', SQLite3.OPEN_READWRITE, function(err){
    if (err){
        return console.log(`Erro ao concatenar com o banco: ${err.message}`);
    }
})

export {db};