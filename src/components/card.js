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
  cardHeadline.textContent = article.headline;
  cardAuthor.classList.add("author");
  cardImgContainer.classList.add("img-container");
  cardImg.src = article.authorPhoto;
  cardAuthorName.textContent = article.authorName;

  cardsWrapper.appendChild(cardHeadline);
  cardsWrapper.appendChild(cardAuthor);
  cardAuthor.appendChild(cardImgContainer);
  cardImgContainer.appendChild(cardImg);
  cardAuthor.appendChild(cardAuthorName);

    cardHeadline.addEventListener("click", () => {
    console.log(cardHeadline);
  })

  for (let i = 0; i < article.length; i++) {
    cardHeadline.textContent = article[i][0].headline;
    cardImg.src = article[i][0].authorPhoto;
    cardAuthorName.textContent = article[i][0].authorName; 
  
  }

  for (let i = 0; i < article.length; i++) {
    cardHeadline.textContent = article[i][1].headline;
    cardImg.src = article[i][1].authorPhoto;
    cardAuthorName.textContent = article[i][1].authorName; 
  
  }

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
  
  axios.get(`http://localhost:5001/api/articles`)
    .then((res) => {
      const articleApiData = res.data.articles;
      const articleDataOrganized = Object.values(articleApiData);
      articleDataOrganized.forEach(element => {
        const newArray1 = Array(element);
        Card({article: element})
        console.log(newArray1);
        document.querySelector(selector).appendChild(Card(newArray1));
      });
        
        // console.log(articleDataOrganized)
      })
     
      .catch((err) => {
        console.error(err);
      })
}

export { Card, cardAppender }
