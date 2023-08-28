
const texts = [
    "Hello, There!",
    "I'm Bishal",
    "computer enthusiast"
  ];
  const delay = 70; // Delay in milliseconds between each character
  let currentTextIndex = 0;

  const typewriterDiv = document.getElementById("typewriter");

  function typeWriter() {
    const text = texts[currentTextIndex];
    let i = 0;

    function type() {
      if (i < text.length) {
        typewriterDiv.innerHTML = text.substr(0, i + 1);
        i++;
        setTimeout(type, delay);
      } else {
        setTimeout(erase, 1000); // Wait 1 second before erasing
      }
    }

    function erase() {
      if (i >= 0) {
        typewriterDiv.innerHTML = text.substr(0, i);
        i--;
        setTimeout(erase, delay);
      } else {
        currentTextIndex = (currentTextIndex + 1) % texts.length;
        setTimeout(typeWriter, delay);
      }
    }

    type();
  }
  typeWriter();




  // Add this script before </body>

  const skillCards = document.querySelectorAll('.skill-card');

  function checkScroll() {
    skillCards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (cardTop < windowHeight * 0.75) {
        card.classList.add('animated');
      }
    });
  }

  window.addEventListener('scroll', checkScroll);
  window.addEventListener('load', checkScroll);


  var body = document.getElementsByTagName("body")[0];
  body.style.backgroundColor = "black";
  
  function setBackground(scroll) {
    if (scroll < 400) {
      body.style.background = "radial-gradient(circle, #001f3f, #0074d9)";
    } else if (scroll >= 400 && scroll < 800) {
      body.style.background = "linear-gradient(to top, #001f3f, #008000)";
    } else if (scroll >= 800 && scroll < 1200) {
      body.style.background = "radial-gradient(circle, #0074d9, #000000)";
    }
  }
  
  window.addEventListener("scroll", function(e) {
    var scroll = window.scrollY;
    console.log(scroll);
  
    setBackground(scroll);
  });
  
  var prevScroll = window.scrollY;
  
  window.addEventListener("scroll", function(e) {
    var scroll = window.scrollY;
  
    if (scroll < prevScroll) {
      setBackground(scroll);
    }
    
    prevScroll = scroll;
  });
  







  