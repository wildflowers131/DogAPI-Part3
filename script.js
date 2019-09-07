function getDogImage(breed){
    fetch('https://dog.ceo/api/breed/'+breed+'/images/random')
    .then(response => response.json())
    .then(data => displayResult(data))
    .catch(error => alert('Something went wrong. Try again'));
}

function displayResult(data){
    if(data.code == 404){
        alert('unable to find an image of your requested breed. Try another');  
        return;
    }

    $('.results-img').replaceWith(`<img src = '${data.message}' class = 'results-img'>`)
    $('.results').removeClass('hidden');
}

function watchForm(){
    $('form').submit(function(e){
        e.preventDefault();
        let breed = $('#breedName').val();
        breed = breed.toLowerCase();
        $('#breedName').val('');
        getDogImage(breed);
    });
}

$(function(){
    console.log('App loaded! Waiting for Submit!')
    watchForm();
});