const app = require(".");
const connect = require("./configs/db");

app.listen(2525, async() => {
    try{
        await connect();
        console.log("Listening on the port 2525");
    } catch(err) {
        console.log(err);
        console.log("Falied to connect");
    }
})