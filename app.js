anime({
  targets: "article ul",
  translateY: -20,
  opacity: 1,
  delay: anime.stagger(80)
});
var firstTime = true;
var message = "Cool. You tried it!";
var later =
  "\n\nThis is the real easter egg.\n\nThe first message isn't a real easter egg because the Commit Message says what to do.\n\nThis one, however, is a message revealed only if the number '3' is hovered over more than once.\n\n";
function MouseoverMessageInAlertBox() {
  if (firstTime) {
    alert(message);
  } else {
    alert(later);
  }
  firstTime = false;
}
function imgClicked() {
  imgClicked.count += 1;
  if (imgClicked.count === 10) {
    var v = document.getElementById("profile_image");
    v.className += "spinner";
  }
  if (imgClicked.count === 11) {
    var v = document.getElementById("profile_image");
    v.classList.remove("spinner");
    imgClicked.count = 1;
  }
}
imgClicked.count = 0;

let string =
  "I'm an unemployed Software Developer soon starting to look for jobs in Gothenburg Sweden.";
let str = string.split("");
let phraseElement = document.querySelector(".phrase");
(function animate() {
  str.length > 0
    ? (phraseElement.innerHTML += str.shift())
    : clearTimeout(running);
  let running = setTimeout(animate, 90);
})();

function addPx(initial, amount) {
  return parseInt(initial.substring(0, initial.length - 1)) + amount + "px";
}

function onClickO(amount) {
  var img = document.getElementById("circle-profile-img");
  img.style["height"] = addPx(getComputedStyle(img)["height"], amount);
  img.style["max-width"] = addPx(getComputedStyle(img)["max-width"], amount);
  img.style["border-radius"] = addPx(
    getComputedStyle(img)["border-radius"],
    amount
  );
}

var options = {
  strings: [
    "I'm glad you visited...",
    "Welcome to my shitt",
    "Welcome to my creepy",
    "Welcome to my wonderful portfolio."
  ],
  typeSpeed: 40,
  backSpeed: 20,
  smartBackspace: true,
  backDelay: 300
};

var typed = new Typed("#typed", options);

const trololol = (function() {
  const honkify = (elementToHonkify = false) => {
    if (typeof window === "undefined") {
      console.warn("honkify only works in the browser.");
      console.warn("I mean... honk!");
      return;
    }

    //check if the user is on iOS Safari, if they are, we initiate the safari audio "hack"
    const ua = window.navigator.userAgent;
    const iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
    const webkit = !!ua.match(/WebKit/i);
    const iOSSafari = iOS && webkit && !ua.match(/CriOS/i);

    const audio = new Audio(
      "https://res.cloudinary.com/jlengstorf/video/upload/q_auto/v1569957993/honk-sound.mp3"
    );

    /**
     * if the platform is iOS Safari, we quickly play, pause, reset the audio object
     * this allows it to be playable the next time an user clicks a link
     */

    if (iOSSafari) {
      console.log("Honk! This is safari");
      document.body.addEventListener("touchstart", () => {
        audio.play();
        audio.pause();
        audio.currentTime = 0;
      });
    }

    const links = (elementToHonkify || document).querySelectorAll("a");

    const honk = event => {
      event.preventDefault();
      event.stopImmediatePropagation();

      audio.play();

      return false;
    };

    links.forEach(link => {
      link.addEventListener("click", honk);
    });

    const dehonk = () => {
      links.forEach(link => {
        link.removeEventListener("click", honk);
      });
    };

    return dehonk;
  };


  var typed = new Typed('#typed', options);

//  --------  discount easter egg
function close_discount_easter_egg() {
  document.getElementById("overlay").style.display = "none";
}

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let buffer = [];
    let lastKeyTime = Date.now();
    let flag = true;

    document.addEventListener('keydown', event => {
        const charList = 'abcdefghijklmnopqrstuvwxyz ';
        const key = event.key.toLowerCase();

        // we are only interested in alphanumeric keys
        if (charList.indexOf(key) === -1) return;

        const currentTime = Date.now();

        if (currentTime - lastKeyTime > 1000) {
            buffer = [];
        }

        buffer.push(key);
        lastKeyTime = currentTime;

        if( buffer.join('') === 'easter egg' && flag) {
          document.getElementById("overlay").style.display = "block";
          flag = false;
        }

    });
});
// -------- /. discount easter egg

  const toggleBtn = document.querySelector("#leHonk");

  let func = false;

  toggleBtn.addEventListener("click", () => {
    if (!func) {
      func = honkify();

      toggleBtn.innerText = "No Honk";
    } else {
      func();
      func = false;
      toggleBtn.innerText = "Honk";
    }
  });
})();

