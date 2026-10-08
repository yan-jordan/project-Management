const bcrypt = require('bcrypt')

async function isHashMatchPlainPassword(user , plainPassword){
    return await bcrypt.compare(plainPassword , user.password)
}

module.exports = isHashMatchPlainPassword