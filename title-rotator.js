setInterval(() => {
  document.title = document.title.toLowerCase().split('').map(function(c){
return Math.random() < .5? c : c.toUpperCase();
}).join('');
}, 500);
