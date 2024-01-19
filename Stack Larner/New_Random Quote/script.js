
let quotesArray = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",

    "The way to get started is to quit talking and begin doing. -Walt Disney",

    "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other  people's thinking. -Steve Jobs",

    "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",

    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey",

    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron",

    "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one. -John Lennon ",

    "You must be the change you wish to see in the world. -Mahatma Gandhi",

    "Spread love everywhere you go. Let no one ever come to you without leaving happier. -Mother Teresa",

    "The only thing we have to fear is fear itself. -Franklin D. Roosevelt",

    "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that. -Martin Luther King Jr.",

    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. -Helen Keller",

    "It is during our darkest moments that we must focus to see the light. -Aristotle",

    "Do not go where the path may lead, go instead where there is no path and leave a trail. -Ralph Waldo Emerson",

    "In this life we cannot do great things. We can only do small things with great love. -Mother Teresa"

]


    window.onload = function(){
        main()
    }

    function main(){
        let quoteGenerateBtn = document.querySelector('.quote-div_head button');
        let showQuote = document.querySelector('.quote-div_show p')
            showQuote.innerHTML = quotesArray[0];
        quoteGenerateBtn.addEventListener('click', handleQuoteGenerate(showQuote))
    }




   
        /**
         * This function is to handle Random quote generate
         * @param {*} showQuote 
         * @returns {function name(showQuote) {
            
         }}
         */
   function handleQuoteGenerate(showQuote){
        return function(){
            let len = quotesArray.length;
            let randomNumber = Math.floor(Math.random()* len);
            console.log(quotesArray[randomNumber], randomNumber);
            showQuote.innerHTML = `"${quotesArray[randomNumber]}"`;            
        }        
    }

    //console.log(Math.round(Math.random(10)*10));
    