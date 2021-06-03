addEventListener('load',getAll,false);
 var random=parseInt(Math.random() * (671 - 1) + 1);
 console.log(random);

function getAll(){
    
    $.ajax({
        url:"https://rickandmortyapi.com/api/character/"+random,
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
    random=parseInt(Math.random() * (671 - 1) + 1);
    $.ajax({
        url:"https://rickandmortyapi.com/api/character/"+random,
        method: 'GET',
        dataType: 'Json',
        headers: {
            'Accept':'application/json'
        },
        contentType: 'application/x-www-form-urlencoded',
        success: function(data){
            console.log(data);
            document.getElementById("img2").src=data.image;
            $("#title2").html(data.name);
        },
        error: function (error){
            console.log(error);
        }
    })
    random=parseInt(Math.random() * (671 - 1) + 1);
    $.ajax({
        url:"https://rickandmortyapi.com/api/character/"+random,
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
    random=parseInt(Math.random() * (671 - 1) + 1);
    $.ajax({
        url:"https://rickandmortyapi.com/api/character/"+random,
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
    random=parseInt(Math.random() * (671 - 1) + 1);
    $.ajax({
        url:"https://rickandmortyapi.com/api/character/"+random,
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
    random=parseInt(Math.random() * (671 - 1) + 1);
    $.ajax({
        url:"https://rickandmortyapi.com/api/character/"+random,
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