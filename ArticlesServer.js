
// **** Kiana's Article Server Assignment *** //

const express = require('express'); // Importing the express package
const ArticleFinder = express(); 
ArticleFinder.use(express.json()); //Using .Json here to be able to recieve data in a JSON Format!

const http = require('http')
const PORT = 2223; //Setting the port number to 2223


let ArticlesList = [
    {
        id: 1,
        title: 'Avengers',
        topic: 'Movies and Series',
        description: 'Avengers r saving the world!',
        author: 'Kiana'
    },

    {
        id: 2,
        title: 'AI',
        topic: 'Tech',
        description: 'AI is smart and is the future!',
        author: 'Kiana'
    },

    {
        id: 3,
        title: 'Clash Of Clans',
        topic: 'Games',
        description: 'One of the very fun nostalgic games which I still play to this day and is super popular!',
        author: 'Kiana'
    },

    {
        id: 4,
        title: 'Clash Royale',
        topic: 'Games',
        description: 'Like Clash Of Clans this game is from supercell but newer and more challenging!',
        author: 'Kiana'
    },

    {
        id: 5,
        title: 'Castelvania',
        topic: 'Movies and Series',
        description: 'Castelvania is so fun to watch and is one of if not the only western anime ever created!' ,
        author: 'Kiana'
    },

    {
        id: 6,
        title: 'Game of Thrones',
        topic: 'Movies and Series',
        description: 'Game Of Thrones AKA GOT is/was one of the most popular and best selling Series based off of A Song of Ice And Fire book series by George R.R.Martin' ,
        author: 'Kiana'
    },

    {
        id: 7,
        title: 'House Of The Dragon',
        topic: 'Movies and Series',
        description: 'House Of The Dragon AKA HOTD is the prequel of GOT' ,
        author: 'Kiana'
    }
]


ArticleFinder.get("/",(req,res) => {
    res.send(" Welcome to Kiana's Articles server...   this blog's all about my fav tech, games, movies and series :) ")
});// = http://localhost:2222/

/* .get: */

ArticleFinder.get('/articles', (req, res) => {
    res.send(ArticlesList);
})


//Rsponsile for POST API ARTICLES
ArticleFinder.post('/articles/create', (req, res) => {
    const newArticle = {
        id: ArticlesList.length + 1,
        title: req.body.title,
        description: req.body.description,
        author: req.body.author
    };
    ArticlesList.push(newArticle);
    res.send(newArticle);
});

//Rsponsile for DELETE API ARTICLES
ArticleFinder.delete('/articles/delete/:id', (req, res) => {
    let id = req.params.id;
    ArticlesList = ArticlesList.filter((article) => {
        if (article.id != id) {
            return true;
        }
    })
    res.send(ArticlesList);
});



// Using .listen  to start our server at port 2223
ArticleFinder.listen(PORT, () => {
    console.log ("Server Sucess : being excuted on port" + " " + PORT);
})
