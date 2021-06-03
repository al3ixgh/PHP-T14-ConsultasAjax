addEventListener('load',inicializarEventos,false);

function inicializarEventos(){
    getAll();
}

function getAll(){
    $.ajax({
        url:"https://rickandmortyapi.com/api/character/326",
        method: 'GET',
        dataType: 'Json',
        headers: {
            'Accept':'application/json'
        },
        contentType: 'application/x-www-form-urlencoded',

        success: function(data){
            console.log(JSON.stringify(data));
            document.getElementById("img1").src.innerHTML=data.image;
        },
        error: function (error){
            console.log(error);
        }
    })
}