addEventListener("load",inicializarEventos,false);

function inicializarEventos(){
    getAll();
}

function getAll(){
    $.ajax({
        url:"https://rickandmortyapi.com"
    })
}