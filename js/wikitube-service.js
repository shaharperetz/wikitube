'use strict'





function init() {
    getVideos('beatles')
    getInfo('beatles')
}







function getVideos(searchValue) {

    axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet
    &videoEmbeddable=true&type=video&key=AIzaSyDdrOp9dEzjmZ4B1lqvrGh_rMhqmTkryG8&q=${searchValue}`)
        .then(res => res.data.items)
        .then(items => {
            renderSongs(items)
            console.log('items' , items)
            return items[0]

        })
        .then(item =>{
            renderVideo(item.id.videoId)
        })

}



function getInfo(searchValue){
    axios.get(`https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&s
    earch=${searchValue}&limit=5`)
    .then(items => console.log('wikiItems' , items))
}