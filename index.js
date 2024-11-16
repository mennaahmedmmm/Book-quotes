
var Quotes = 
[
    {
'author' : 'Oscar Wilde',
'quote': 'Be yourself; everyone else is already taken.'
    },
    {
        'author' : 'Marilyn Monroe',
        'quote': ' know you are in love when you canot fall asleep because reality is finally better than your dreams.'
            },
            {
                'author' : 'Marcus Tullius Cicero',
                'quote': 'A room without books is like a body without a soul.'
                    },
                    {
                        'author' : 'Mahatma Gandhi',
                        'quote': 'Be the change that you wish to see in the world.'
                            },
                            {
                            'author' : 'Mark Twain',
                        'quote': 'If you tell the truth, you donot have to remember anything.'
                            }
];
function Quote(){
    var random = Math.floor(Math.random() * Quotes.length);
    document.getElementById('quote').innerHTML = `"${Quotes[random].quote}"`;
    document.getElementById('author').innerHTML = `-${Quotes[random].author}`;
}

