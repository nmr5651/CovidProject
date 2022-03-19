const express = require('express');
const mongodb = require('mongodb');

const router = express.Router()

// Get Posts

router.get('/', async (req, res) => {
    // let query = req.params.county;
    // console.log(req);
    const posts = await loadPostsCollection();
    res.send(await posts.find({iso3: "GUM"}).limit(5).toArray());
});

// This is search by the county only
router.get('/search', async (req, res) => {
    //let query = req.query[0];
    //console.log(query + "alskdjfklasdjlkf");
    console.log(req.query.county)
    const posts = await loadPostsCollection();
    res.send(await posts.find({Admin2: req.query.county}).limit(5).toArray());
});


// Method

async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect('mongodb://localhost:27017/CovidCases', {
        useNewUrlParser: true
    });

    return client.db('CovidCases').collection('Data');
}


module.exports = router;