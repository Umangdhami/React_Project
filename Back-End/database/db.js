const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/Ecommerce').then(() => {
    console.log(`Database Connected Successfully.....`);
}).catch((err) => {
    console.log('database Error', err);
})

module.exports = mongoose