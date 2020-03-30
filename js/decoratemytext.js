"use strict";
window.onload = () => {
    let decorateButton = document.getElementById('decorate');
    let textArea = document.getElementById('textArea');
    let bling = document.getElementById('bling');
    let convertButton = document.getElementById('convert');
    let replaceButton = document.getElementById('replace');
    decorateButton.onclick = () => {
        setInterval(() => {
            textArea.style.fontSize = parseInt(textArea.style.fontSize) +  2 + "pt";
        }, 500);
    }
    bling.onchange = () => {
        textArea.className = bling.checked? "bling" : "";
        document.body.style.backgroundImage = bling.checked? `url('../images/hundred-dollar-bill.jpg')`: "";
    }
    convertButton.onclick = () => {
        let text = textArea.value.toString().trim();
        let vowel = 'aeiou';
        if(text) {
            let words = text.split(' ');
            text = '';
            for(let word of words) {
                if(!isNaN(word)) {
                    text += word + " ";
                    continue;
                }
                if(word) {
                    if(vowel.indexOf(word.charAt(0).toLowerCase()) > -1)
                    text += word + "ay" + " ";
                else
                    text += word.substring(1, word.length) + word.charAt(0) + "ay" + " ";
                }
            }
            textArea.value = text;
        }
    }
    replaceButton.onclick = () => {
        let text = textArea.value.toString().trim();
        if(text) {
            let words = text.split(' ');
            text = '';
            for(let word of words) {
                if(!isNaN(word)) {
                    text += word + " ";
                    continue;
                }
                if(word) 
                    if(word.length >= 5)
                        text += "Malkovitch ";
                else
                    text += word + " ";
            }
            textArea.value = text;
        }
    }
}