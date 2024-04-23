
const mw = async (req , res , next) => {
    console.log('hello from my middleware');
    next();
}


module.exports = {
    mw
}