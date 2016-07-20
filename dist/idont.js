var idonts = [{
    verbSelf: 'играю',
    verbThem: 'играют',
    subjects: [
        "в покемонов",
        "в компьютерные игры",
        "в настолки",
        "в онлайн-игры",
        "в покер",
        "в рулетку",
        "в связывание"
    ]
},{
    verbSelf: 'смотрю',
    verbThem: 'смотрят',
    subjects: [
        "&laquo;игру престолов&raquo;",
        "&laquo;остаться в живых&raquo;",
        "&laquo;дом 2&raquo;",
        "телевизор",
        "кино",
        "в даль",
        "&laquo;во все тяжкие&raquo;"
    ]
},{
    verbSelf: 'читаю',
    verbThem: 'читают',
    subjects: [
        "новости",
        "соцсети",
        "агрегаторы",
        "книги",
        "комиксы",
        "газеты",
        "журналы"
    ]
},{
    verbSelf: 'бегаю',
    verbThem: 'бегают',
    subjects: [
        "марафон",
        "10 км",
        "5 км",
        "зомби забег",
        "трусцой",
        "за каждой юбкой",
        "вокруг дома"
    ]
},{
    verbSelf: 'ем',
    verbThem: 'едят',
    subjects: [
        "мясо",
        "овощи",
        "бургеры",
        "органическое",
        "пельмени",
        "сладкое",
        "после семи"
    ]
},{
    verbSelf: 'пью',
    verbThem: 'пьют',
    subjects: [
        "водку",
        "крафт",
        "обычное пиво",
        "вино",
        "коньяк",
        "одеколон",
        "по пятницам"
    ]
},{
    verbSelf: 'стригусь',
    verbThem: 'стригутся',
    subjects: [
        "в парикмахерской",
        "в барбершопе",
        "налысо",
        "у ахмета",
        "перед экзаменом",
        "дорого",
        "дешево"
    ]
},{
    verbSelf: 'пишу',
    verbThem: 'пишут',
    subjects: [
        "на ангуляре",
        "на реакте",
        "на свифте",
        "в тумблр",
        "в блогр",
        "в твиттер",
        "в фейсбучек"
    ]
},{
    verbSelf: 'сфоткал',
    verbThem: 'сфоткали',
    subjects: [
        "грозу",
        "потоп",
        "раммштайн",
        "закат",
        "облака",
        "еду",
        "себяшку"
    ]
}]

var idonts_en = [{
    verbSelf: 'play',
    verbThem: 'play',
    subjects: [
        "Pokémon GO",
        "video games",
        "board games",
        "MMORPG",
        "Lineage",
        "poker",
        "backgamon"
    ]
},{
    verbSelf: 'watch',
    verbThem: 'watch',
    subjects: [
        "Game of Thrones",
        "House MD",
        "Orange is the new Black",
        "House of Cards",
        "Harry Potter",
        "news",
        "TV"
    ]
},{
    verbSelf: 'read',
    verbThem: 'read',
    subjects: [
        "news",
        "social networks",
        "reddit",
        "books",
        "comic books",
        "newspapers",
        "magazines"
    ]
},{
    verbSelf: 'run',
    verbThem: 'run',
    subjects: [
        "marathone",
        "10k",
        "5k",
        "for election",
        "after noon",
        "at all",
        "around the hpuse"
    ]
},{
    verbSelf: 'eat',
    verbThem: 'eat',
    subjects: [
        "meat",
        "cabbage",
        "gluten",
        "carbohydrates",
        "pizza",
        "beacon",
        "after 7pm"
    ]
},{
    verbSelf: 'drink',
    verbThem: 'drink',
    subjects: [
        "vodka",
        "craft beer",
        "beer",
        "red wine",
        "white wine",
        "bourbon",
        "brandy"
    ]
},{
    verbSelf: 'use',
    verbThem: 'use',
    subjects: [
        "AngularJS",
        "ReactJS",
        "Swift",
        "Tumblr",
        "Bloggr",
        "Twitter",
        "Facebook"
    ]
}]

var starString = 'Так странно, что еще не повылезали те, которые &laquo;я не %dont1%&raquo;. Наверное, все еще заняты тем, что не %dont2%'
var starString_en = '"I don\'t %dont1%" is the new "I don\'t %dont2%"'

var buttonString = 'Еще!'
var buttonString_en = 'Moar!'

function getLang(){
    var result = /^#(\w+)$/.exec(window.location.hash);
    if(result && window['idonts_'+result[1]]) {
        return '_'+result[1];
    }
    return '';
}

function getRandom(){
    var lang = getLang();
    var idontsTemp = window['idonts'+lang].slice(0);
    var dont1 = idontsTemp.splice(Math.round(Math.random()*(idontsTemp.length-1)), 1)[0];
    var dont11 = dont1.subjects[Math.round(Math.random()*(dont1.subjects.length-1))];

    var dont2 = idontsTemp[Math.round(Math.random()*(idontsTemp.length-1))];
    var dont21 = dont2.subjects[Math.round(Math.random()*(dont2.subjects.length-1))];
    return [dont1, dont11, dont2, dont21];
}

function getStartString(){
    var lang = getLang();
    var idontStart = window['idonts'+lang]
    return getString([idontStart[0], idontStart[0].subjects[0], idontStart[1], idontStart[1].subjects[0]]);
}

function getString(input) {
    var lang = getLang();
    var resultString = window['starString'+lang].replace('%dont1%', input[0].verbSelf+' '+input[1]);
    resultString = resultString.replace('%dont2%', input[2].verbThem+' '+input[3]);
    return resultString;
}
// console.log(getString(getRandom()));