const express = require('express')
const app = express();

catRoutes = require('./routes/cats')
const peopleRoutes = require('./routes/people')
const cookieRoutes =require('./routes/cookie')


 

app.use('/cats', catRoutes);
app.use('/people', peopleRoutes)
app.use('/', cookieRoutes);
app.listen(3000, () => {
console.log('Listening to localhost 3000')
});