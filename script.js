var text = 'Cititul este una dintre cele mai valoroase activități pe care le poate practica un individ. În timp ce navigăm prin multitudinea de informații disponibile astăzi, capacitatea de a citi și de a înțelege texte complexe devine din ce în ce mai esențială. Cititul nu doar că ne ajută să acumulăm cunoștințe, dar ne și dezvoltă gândirea critică și abilitățile de analiză. Fiecare carte citită deschide noi orizonturi și ne oferă perspective variate asupra lumii';

var textDiv = document.getElementById('main-body');
var arrayOfWords = text.split(" ");

textDiv.innerHTML = '';

arrayOfWords.forEach(function(word){
    var span = document.createElement('span');
    span.textContent = word + ' ';
    textDiv.append(span);
});

var button = document.getElementById('btn');
var isRunning = false;

button.addEventListener('click', function() {
    if (!isRunning){
        isRunning = true;
        const spans = textDiv.querySelectorAll('span');
        let index = 0;
    
        const interval = setInterval(function() {
            if (index < spans.length) {
                if (index > 0)
                    spans[index - 1].classList.remove('active');
    
                spans[index].classList.add('active');
                index++;
            } else {
                clearInterval(interval);
                setTimeout(function() {
                    if (spans.length > 0)
                        spans[spans.length - 1].classList.remove('active');
                }, 100);
                isRunning = false;
            }
        }, 100);
    }
});
