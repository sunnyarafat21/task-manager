const app=require("./app");
import("./.env")

const PORT = process.env.PORT || 8080 ;
app.listen(PORT,function () {
    console.log(`App Run @${PORT}`)
})
