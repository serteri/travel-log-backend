var {app, PORT,HOST} = require('./server');
app.listen(PORT,HOST, () => {
    console.log(`
    ExpressJS Blog API is now running!

    Congrats!
    `);
});
//