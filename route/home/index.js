const {Article} = require('../../model/article');
const { Counts } = require('../../model/counts');

const  pagination = require('mongoose-sex-page');

module.exports = async function(req, res){
    let currentPage = req.query.page || 1;
    
    // Get all articles
    const articles =  await pagination(Article).page(currentPage).size(8).display(3).find().populate('author').exec();
    
    // Get the  user information
    const userInfo = req.app.locals.userInfo;

    // Get all the counts
    const counts = await Counts.find().populate('aid');

    // console.log('default: ', counts);
    sortCounts(counts)
    
    // console.log(articles);    
    let records = articles.records;

    sortArticles(records);


    console.log(records);
    

    res.render('home/default', {
        articles,
        userInfo,
        counts
    });
}

// 将counts进行排序
function sortCounts(counts){
    counts.sort((fir, sec)=>{
        return sec.likes - fir.likes
        // console.log('fir:', fir, "sec: ", sec);
    })
}

// 将Articles按照创建时间进行排序
function sortArticles(articles){
    articles.sort((fir, sec) => {
        let a = Date.parse(fir),
              b = Date.parse(sec);

        return b -a
    })
}