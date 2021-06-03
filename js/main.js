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
            document.getElementById("img1").src=data.image;
            $("#title1").html(data.name);

        },
        error: function (error){
            console.log(error);
        }
    })
    $.ajax({
        url:"https://rickandmortyapi.com/api/character/316",
        method: 'GET',
        dataType: 'Json',
        headers: {
            'Accept':'application/json'
        },
        contentType: 'application/x-www-form-urlencoded',
        success: function(data){
            console.log(JSON.stringify(data));
            document.getElementById("img2").src=data.image;
            $("#title2").html(data.name);

        },
        error: function (error){
            console.log(error);
        }
    })
    $.ajax({
        url:"https://rickandmortyapi.com/api/character/306",
        method: 'GET',
        dataType: 'Json',
        headers: {
            'Accept':'application/json'
        },
        contentType: 'application/x-www-form-urlencoded',
        success: function(data){
            console.log(JSON.stringify(data));
            document.getElementById("img3").src=data.image;
            $("#title3").html(data.name);

        },
        error: function (error){
            console.log(error);
        }
    })
    $.ajax({
        url:"https://rickandmortyapi.com/api/character/206",
        method: 'GET',
        dataType: 'Json',
        headers: {
            'Accept':'application/json'
        },
        contentType: 'application/x-www-form-urlencoded',
        success: function(data){
            console.log(data);
            document.getElementById("img4").src=data.image;
            $("#title4").html(data.name);

        },
        error: function (error){
            console.log(error);
        }
    })
    $.ajax({
        url:"https://rickandmortyapi.com/api/character/256",
        method: 'GET',
        dataType: 'Json',
        headers: {
            'Accept':'application/json'
        },
        contentType: 'application/x-www-form-urlencoded',
        success: function(data){
            console.log(data);
            document.getElementById("img5").src=data.image;
            $("#title5").html(data.name);

        },
        error: function (error){
            console.log(error);
        }
    })
    $.ajax({
        url:"https://rickandmortyapi.com/api/character/276",
        method: 'GET',
        dataType: 'Json',
        headers: {
            'Accept':'application/json'
        },
        contentType: 'application/x-www-form-urlencoded',
        success: function(data){
            console.log(data);
            document.getElementById("img6").src=data.image;
            $("#title6").html(data.name);

        },
        error: function (error){
            console.log(error);
        }
    })
}