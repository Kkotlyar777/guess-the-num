let randomNumber = Math.trunc (Math.random() * 100) + 1;
let score = 20;
let highScore = 0;


document.querySelector('.check').addEventListener('click', function(){
    const guessingNumber = Number(document.querySelector('.number-input').value);
    document.querySelector ('.score').textContent = score;
    
    // нет ввода
    if (!guessingNumber){
    document.querySelector('.guess-message').
    textContent = 'Введите число !';

    // если угадал
    }  else if (guessingNumber === randomNumber){
        document.querySelector('.guess-message').
        textContent = 'Правильно !';
        document.querySelector ('body').style.backgroundColor = 'rgb(9, 250, 21)';
        document.querySelector ('.question').style.width = '85rem';
        document.querySelector ('.question').textContent = randomNumber;

        if(score > highScore) {
            highScore = score;
            document.querySelector ('.highscore').textContent = highScore;
        }

        // если не угадал
    } else if (guessingNumber !== randomNumber)
    if (score > 0){
        document.querySelector ('.guess-message').
        textContent = guessingNumber > randomNumber ? 'Слишком много !'  : 'Слишком мало !';
        score --;
        
    } else {
        document.querySelector ('.guess-message').
        textContent = 'Вы проиграли !';
        document.querySelector ('body').style.backgroundColor = 'rgb(184, 17, 17)';
        document.querySelector ('.question').textContent = randomNumber;
    }
});



    // Сначала 
document.querySelector('.again').addEventListener( 'click', function(){

    randomNumber = Math.trunc (Math.random() * 100) + 1;
    score = 20;

    document.querySelector ('body').style.backgroundColor = 'rgb(0, 0, 0)';
    document.querySelector ('.question').style.width = '25rem';
    document.querySelector ('.question').textContent = '???';
    document.querySelector ('.score').textContent = score;
    document.querySelector ('.number-input').value = '';
    document.querySelector ('.guess-message').textContent = 'Начни угадывать';
    
});