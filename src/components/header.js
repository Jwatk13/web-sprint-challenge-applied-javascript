const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  //ELEMENTS SET
  const headingWrapper = document.createElement("div");
  const headingDate = document.createElement("span");
  const headingTitle = document.createElement("h1");
  const headingTemp = document.createElement("span");

  //CLASSES AND CONTENT SET
  headingWrapper.classList.add("header");
  headingDate.classList.add("date");
  headingDate.textContent = date;
  headingTitle.textContent = title;
  headingTemp.classList.add("temp");
  headingTemp.textContent = temp;

  //HIERARCHY SET
  headingWrapper.appendChild(headingDate);
  headingWrapper.appendChild(headingTitle);
  headingWrapper.appendChild(headingTemp);

  return headingWrapper;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  document.querySelector(selector).appendChild(Header("WHAT'S GOING ON TODAY!", "05/13/2022", "13*C"));
}

export { Header, headerAppender }
