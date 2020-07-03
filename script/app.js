// motivationnal quotes
const quotes = [
    {
      id: 1,
      img:
        "./img/quote1.jpg",
      text:
        "Your limitation it’s only your imagination.",
    },
    {
      id: 2,
      img:
        "./img/quote2.jpg",
      text:
        "Sometimes later becomes never. Do it now.",
    },
    {
      id: 3,
      img:
        "./img/quote3.png",
      text:
        "Great things never come from comfort zones.",
    },
    {
      id: 4,
      img:
        "./img/quote4.png",
      text:
        "Dream it. Wish it. Do it.",
    },
    {
      id: 5,
      img:
        "./img/quote5.png",
      text:
        "Success doesn’t just find you. You have to go out and get it.",
    },
    {
      id: 6,
      img:
        "./img/quote6.png",
      text:
        "Do something today that your future self will thank you for.",
    },
    {
      id: 7,
      img:
        "./img/quote7.png",
      text:
        "We generate fears while we sit. We overcome them by action.",
    },
    {
      id: 8,
      img:
        "./img/quote8.png",
      text:
        "The man who has confidence in himself gains the confidence of others.",
    },
 
  ];

  const profilImg = document.getElementById("profil-img");
  const quoteText = document.getElementById("quote");

  const prevBtn = document.querySelector(".left-btn");
  const nextBtn = document.querySelector(".right-btn");
  const randomBtn = document.querySelector(".random-btn");

  // set starting quote
  let currentQuote = 0;

  // load initial FullQuote
  window.addEventListener('DOMContentLoaded', function(){
      showFullQuote();
  });

  // showQuote
  function showFullQuote(){
      const quote = quotes[currentQuote];
      profilImg.src = quote.img;
      quoteText.textContent = quote.text;
  }

  // show next quote
  nextBtn.addEventListener('click', function(){
      currentQuote++;
      if(currentQuote > quotes.length -1) {
          currentQuote = 0;
      }
      showFullQuote(currentQuote);
  });

  // show prev quote
  prevBtn.addEventListener('click', function(){
      currentQuote--;
      if(currentQuote < 0) {
          currentQuote = quotes.length -1;
      }
      showFullQuote(currentQuote);
  });

  // show random quote
  randomBtn.addEventListener('click', function(){
      currentQuote = Math.floor(Math.random() * quotes.length);
      showFullQuote();
  });