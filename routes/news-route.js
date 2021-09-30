const { default: axios } = require('axios');

const Router = require('express').Router();

const NEWSAPIKEY = process.env.NEWSAPIKEY;
const baseUrl = "https://newsapi.org/v2/";

Router.get('/top-headlines', async (req, res) => {
    try {
        let topHeadlines = await axios.get(`${baseUrl}top-headlines?country=us&category=technology&apiKey=${NEWSAPIKEY}`);
        if (topHeadlines.status != 200) throw new Error("Bad Request");
        return res.json(topHeadlines.data);
    }
    catch (err) {
        console.error(err);
    }
});

Router.get('/find', async (req, res) => {
    try{
        let theme = req.query.theme;
        let data = await axios.get(`${baseUrl}everything?q=${theme}&language=en&apiKey=${NEWSAPIKEY}`);
        if (data.status != 200) throw new Error("Bad Request");
        return res.json(data.data);
    }
    catch(err){
        console.error(err);
    }
});

module.exports = Router;