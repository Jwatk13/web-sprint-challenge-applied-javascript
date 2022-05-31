import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.

  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const cardsWrapper = document.createElement("div");
  const cardHeadline = document.createElement("div");
  const cardAuthor = document.createElement("div");
  const cardImgContainer = document.createElement("div");
  const cardImg = document.createElement("img");
  const cardAuthorName = document.createElement("span");

  cardsWrapper.classList.add("card");
  cardHeadline.classList.add("headline");
  cardAuthor.classList.add("author");
  cardImgContainer.classList.add("img-container");

  cardHeadline.textContent = article.headline;
  cardAuthorName.textContent = article.authorName;
  cardImg.src = article.authorPhoto;
  
  
  

  cardsWrapper.appendChild(cardHeadline);
  cardsWrapper.appendChild(cardAuthor);
  cardAuthor.appendChild(cardImgContainer);
  cardImgContainer.appendChild(cardImg);
  cardAuthor.appendChild(cardAuthorName);

    cardHeadline.addEventListener("click", () => {
    console.log(cardHeadline);
  })

  
  

  console.log(article)

  return cardsWrapper;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  axios.get(`http://localhost:5001/api/articles/`)
    .then((res) => {
      // console.log(res.data.articles);
      const apiData = res.data.articles.javascript.concat(res.data.articles.bootstrap.concat(res.data.articles.node.concat(res.data.articles.technology.concat(res.data.articles.jquery))));
      console.log(apiData)
      apiData.forEach(card => {
        document.querySelector(selector).appendChild(Card(card));
      })
      
      })
    .catch((err) => {
      console.error(err);
    })
}

export { Card, cardAppender }
