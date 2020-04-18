'use strict'




function onInit(){
    init();

}


function onSearchValue(){
    var inputValue = document.querySelector('.input').value
    getVideos(inputValue)

    document.querySelector('.input').value = ''
}




function renderSongs(items){
    var strHTMLs = items.map(item =>{
        return `<div class="song" onclick="renderVideo('${item.id.videoId}')">
        <img src="${item.snippet.thumbnails.medium.url}"
            alt="">
        <h3 class="song-info">${item.snippet.title}</h3>
    </div>`
    })
    document.querySelector('.list-container').innerHTML = strHTMLs.join('')
}



function renderVideo(etag){
    console.log(etag)
    document.querySelector('.video').innerHTML = 
    ` <iframe width="420" height="315" src="https://www.youtube.com/embed/${etag}">
    </iframe>`
}