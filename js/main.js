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
            console.log(data.image);
            document.getElementById("img1").src=data.image;
            // document.getElementById("img1").attr('src',data.image);
            document.getElementById("title1").innerHTML=data.name;

        },
        error: function (error){
            console.log(error);
        }
    })
}