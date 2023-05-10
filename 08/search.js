const $searchForm = document.getElementById('searchForm');
const $searchInput = document.getElementById('searchInput');
// const $searchResult = document.getElementById('.columns is-multiline');
const $items = document.getElementById('items');

const apiUrl = 'https://dapi.kakao.com/v2/search/';
const KAKAO_API_KYE = `9db659e0e5d3922078001cc7576a3b49`;
const options = {
  headers: {
    Authorization: `KakaoAK ${KAKAO_API_KYE}`,
  },
};

let page = 1;
$searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('submit');

  const query = $searchInput.value;
  const url = `${apiUrl}web?query=${query}&size=10&page=${page}`;
  fetch(url, options)
    .then((response) => response.json())
    .then((json) => {
      renderItems(json.documents[1]);
    });
});

function renderItems(document) {
  let text = `
    <div class="column is-one-third">
          <div class="card">
            <div class="card-content">
              <p class="title">${document.title}</p>
               <p class="subtitle"${document.datetime}</p>
              <div class="content">${document.contents}</div>
            </div>
          </div>
    `;
  console.log(text);
  console.log($items);
  $items.innerHTML += text;
}
