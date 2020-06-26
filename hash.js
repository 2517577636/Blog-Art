const bcrypt = require('bcrypt');

async function createPw(pwd, saltRounds = 10){
    // create salt
    const salt = await bcrypt.genSalt(saltRounds);

    // create passwod Ser
    const pwds = await bcrypt.hash(pwd, salt);

    return pwds;
}