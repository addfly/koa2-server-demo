const {userRegister,loginUser} = require('../../dblink/')


const user = router => {
    router.post('/userRegister', userRegister);
    router.post('/userLogin',loginUser);
}
module.exports = user;