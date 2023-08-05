var {app, PORT} = require('./server');
app.listen(PORT, () => {
    console.log(`
    ExpressJS Blog API is now running!

    Congrats!
    `);
});
//