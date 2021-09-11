const searchBar = document.getElementById('search-bar');
const searchButton = document.getElementById('search-button');
const newsContainer = document.getElementById('news-container');
const encodedSearchBar = encodeURIComponent(searchBar);

searchButton.addEventListener('click', (e) => {
  e.preventDefault();
  fetch('https://newsapi.org/v2/everything?q=apple&apiKey=896b083e621c4284840d562188196480')
    .then(response => {
      return response.json();
    })
    .then(data => {
      const newsData = data.articles;
      // console.log(newsData);
      renderArticles(newsData);
    })
})

function renderArticles(newsArr) {
  newsArr.map((newsArrValue) => {
    const newsDiv = document.createElement('div');
    newsDiv.setAttribute('class', 'card d-flex flex-column align-items-center mb-3');
    newsDiv.innerHTML = `
      <div class="card-body">
        <h5 class="card-title text-center">${newsArrValue.title}</h5>
        <p class="card-text">${newsArrValue.description}</p>
        <a href="${newsArrValue.url}" class=" btn btn-primary card-text" target="_blank">Vist Website</a>
        </div>
    `
    newsContainer.append(newsDiv);
    // console.log(newsArrValue);
  })
}