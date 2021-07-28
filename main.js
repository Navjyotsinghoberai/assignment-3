const textBox = document.getElementById('movie-input-text')
const movieButton = document.getElementById('movieSearch')

console.log(movieButton);
movieButton=addEventListener('click',()=>{
  const movieName=textBox.value
    const xhr= new XMLHttpRequest();
    const url=`https://api.themoviedb.org/3/search/movie?api_key=abdca3eea1b7fb0c1f10423e2fc33135&query=$(movieName)`  
    xhr.open('GET',url)
    xhr.onreadystatechange= ()=>{
        if(xhr.readyState==4 && xhr.status=200)
        {
            const userData=JSON.parse(xhr.responseText)
        }
    }
})