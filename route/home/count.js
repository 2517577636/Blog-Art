const {Counts} = require('../../model/counts')

module.exports = async (req, res) => {
    let {aid, uid, likes} = req.body;
    
    let isExist = await Counts.findOne({aid: aid});

    // the counts is exist 判断当前couns表是否存在
    if(isExist){ 

        let clickHandle = isExist.uid.includes(uid)
        // the article is or no likes  判断当前用户是否点赞过，没有点赞则添加进去
        if(!clickHandle){

            let count = await Counts.findOneAndUpdate({aid: aid}, {$push: {uid: uid}})

            likes = count.uid.length + 1;

            // console.log(likes);
            
            await Counts.findOneAndUpdate({aid:aid}, {$set: {likes: likes}})
        
        }
        // else{
        //     likes--

        //     await Counts.findOneAndUpdate({aid: aid}, {$set: {likes: likes}})
        // }
        
    }else{
        
        likes = 1

        await Counts.create({
            aid,
            uid,
            likes
        })
    }

    // console.log();
    
    res.redirect('/home/article?id=' + aid)
}