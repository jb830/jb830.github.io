
console.log('hello there');

//welcome animation
document.addEventListener('DOMContentLoaded', function() {
  var message = "Hi, I'm Jo,<br>I like to design and build web applications";
  var typedText = document.querySelector('.header-style'); 
  var index = 0;

  function typeLetter() {
    if (index < message.length) {
      var nextChar = message.charAt(index);
      if (message.substring(index).startsWith('<br>')) {
        nextChar = '<br>';
        index += 3; 
      }
      typedText.innerHTML += nextChar;
      index++;
      setTimeout(typeLetter, 70); 
    }
  }

  setTimeout(typeLetter, 1000); 
});


