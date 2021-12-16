var elForm = document.querySelector("#form_submit");
var elInputTitle = document.querySelector("#input_title");
var elList = document.querySelector("#movie_list");
var elSearchHeading = document.querySelector("#search_result");

var elTemleteItem = document.querySelector("#movie_item_template").content


// function renderMovies(moviesArr, wrapper) {
//     var movieItem = document.createDocumentFragment()

//     moviesArr.forEach(item => {
//         var movieLi = elTemleteItem.cloneNode(true);
//         movieLi.querySelector("#movie_img").src = item.Poster;
//         movieLi.querySelector("#movie_heading").textContent = item.Title;
//         movieLi.querySelector("#movie_year").textContent = item.Year;
//         movieLi.querySelector("#movie_imdbid").textContent = item.imdbID;
//         movieItem.appendChild(movieLi);
//     })
//     wrapper.innerHTML = null;
//     wrapper.appendChild(movieItem);
// }


// async function fetchData() {
//     var response = await fetch("https://www.omdbapi.com/?apikey=73119f16&s=iron&page=4")

//     var data = await response.json()
//     renderMovies(data.Search, elList)
// }

// fetchData()
// bu yol bilan searchchi ishlatishshi bilomadm!


// -------------------------
var twoMovies = movies;

function renderMovies(moviesArr, wrapper) {
    var movieItem = document.createDocumentFragment()

    moviesArr.forEach(item => {
        var movieLi = elTemleteItem.cloneNode(true);
        movieLi.querySelector("#movie_img").src = item.Poster;
        movieLi.querySelector("#movie_heading").textContent = item.Title;
        movieLi.querySelector("#movie_year").textContent = item.Year;
        movieLi.querySelector("#movie_imdbid").textContent = item.imdbID;
        movieItem.appendChild(movieLi);
    })
    wrapper.innerHTML = null;
    wrapper.appendChild(movieItem);

    elSearchHeading.textContent = `Search result: ${moviesArr.length}`;
}

renderMovies(twoMovies, elList);


elForm.addEventListener("click", (evt) => {
    evt.preventDefault();

    var pushNewMoviesArr = [];
    var newImg = document.createElement("img")
    newImg.setAttribute("href", "")

    var searchInput = elInputTitle.value.trim();
    var inputKeyTitle = new RegExp(searchInput, "gi");
    twoMovies.forEach(movieItem => {
        var searchInfo = movieItem.Title.match(inputKeyTitle)
        if (searchInfo) {
            pushNewMoviesArr.push(movieItem)
        }
    })
    if (pushNewMoviesArr.length > 0) {
        elList.innerHTML = null;
        renderMovies(pushNewMoviesArr, elList);    
    }else {
        elList.innerHTML = "Kino yo'q"

    }
})
