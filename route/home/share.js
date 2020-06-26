const {Article} = require('../../model/article')

const { Counts } = require('../../model/counts');

const  pagination = require('mongoose-sex-page');

module.exports = async function (req, res){
    let currentPage = req.query.page || 1;

    const tags = req.url.slice(1);
    
    // res.send(tags)
    const articles =  await pagination(Article).page(currentPage).size(8).display(3).find({tag: tags}).populate('author').exec();
    // res.send(articles)

    // Get the  user information
    const userInfo = req.app.locals.userInfo;

    // Get all the counts
    // const counts = await Counts.find().populate('aid');
    // console.log(counts);
    // let shareCounts = createTagsCounts(counts)


    // console.log('default: ', counts);
    // sortCounts(counts)

    res.render('/home/share', {
        articles,
        userInfo,
        // shareCounts
    })
}

// 将counts进行排序
function sortCounts(counts){
    counts.sort((fir, sec)=>{
        return sec.likes - fir.likes
        // console.log('fir:', fir, "sec: ", sec);
    })
}

// 筛选全为share类型的Counts
function createTagsCounts(counts){
    let newCounts = [];
    for(let item in counts){
        if(item.aid.tag && item.aid.tag == 'share'){
            newCounts.push(item)
        }
    }
    return newCounts;
}