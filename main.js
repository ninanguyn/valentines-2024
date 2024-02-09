document.addEventListener('DOMContentLoaded', function() {
  // Show instruction screen when the page loads
  const instructionScreen = document.getElementById('instruction-screen');
  instructionScreen.style.display = 'flex'; // Show screen initially

  const envelope = document.querySelector('.envelope-wrapper');
  const letter = document.querySelector('.letter');
  const heart = document.querySelector('.heart-stamp');
  envelope.addEventListener('click', () => {
    envelope.classList.toggle('flap');
    
    if (envelope.classList.contains('flap')) {
      letter.style.opacity = '1';
      heart.style.opacity = '0';
      envelope.style.transform = 'translateY(150px)';
    }
    else {
      letter.style.opacity = '0';
      heart.style.opacity = '1';
      envelope.style.transform = 'translateY(0)';
    }
  });
});

let noButtonClickCount = 0;

function noButton() {
  console.log("No Button clicked")
  noButtonClickCount++;

  let messageID = '';

  switch (noButtonClickCount) {
    case 1:
      messageID = 'message-1';
      break;
    case 2:
      messageID = 'message-2';
      break;
    case 3:
      messageID = 'message-3';
      break;
    case 4:
      messageID = 'message-4';
      break;
    default:
      messageID = 'message-0';
  }
  const popupMessage = document.getElementById(messageID);
  popupMessage.classList.add('show');

  setTimeout(function() {
    popupMessage.classList.remove('show');
  }, 1000); // Set the timeout duration to 1500 milliseconds
}

function createHeart() {
  const container = document.querySelector('.container');
  const heart = document.createElement('img');
  heart.src = 'pixel-heart.png';
  heart.classList.add('falling-heart');
  container.appendChild(heart);

  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.top = '0';
  heart.style.animationDuration = Math.random() * 3 + 2 + 's';

  heart.addEventListener('animationend', function() {
    heart.remove();
  });
}

function generateHearts() {
  setInterval(createHeart, 250);
  console.log("GenerateHearts called");
}


function yesButton() {
  const yayScreen = document.getElementById('yay-screen');
  yayScreen.classList.add('show');

  const envelope = document.querySelector('.envelope-wrapper');
  const heart = document.querySelector('.heart-stamp');
  envelope.style.display = 'none';
  heart.style.display = 'none';

  const buttonsContainer = document.querySelector('.buttons-wrapper');
  buttonsContainer.style.display = 'none';

  const pixelHeart = document.createElement('img');
  pixelHeart.src = 'pixel-heart.png'; // Set the source of the image
  pixelHeart.classList.add('pixel-heart'); // Add a class for styling
  envelope.appendChild(pixelHeart); // Append the heart to the envelope
  generateHearts();
}

function continueButton() {
  console.log("Continue button clicked");
  const instructionScreen = document.getElementById('instruction-screen');
  instructionScreen.classList.add('fade-out');
  const audio = document.querySelector('audio');
  audio.play(); // Play audio when users interacts
  setTimeout(function() {
    instructionScreen.style.display = 'none';
    // const audio = document.querySelector('audio');
    // audio.play(); // Play audio when users interacts
    }, 500);
}