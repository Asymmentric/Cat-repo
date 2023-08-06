const catImage=document.getElementsByTagName('img')
getCatImage()
function getCatImage() {
    fetch('https://api.thecatapi.com/v1/images/search')
.then(response=>response.json())
.then(data=>{
    console.log(data)
    catImage[0].setAttribute('src',data[0].url)

})
}