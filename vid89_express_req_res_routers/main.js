const express = require('express')

const blog = require('./routes/blog')
const shop = require('./routes/shop')
 


const app = express()
const port = 3000

app.use(express.static("public"))


//This tells Express:
// "For any request starting with /blog, use the routes defined in the blog router."
app.use('/blog', blog)


//The syntax app.use('/shop', shop) in Express means:

// For any HTTP request whose path starts with /shop, use the routes and middleware defined in the shop router.
// The shop variable is expected to be an Express router module (imported from ./routes/shop).
// For example, if shop defines a route for /cart, then a request to /shop/cart will be handled by that route.


app.use('/shop', shop)

app.get('/', (req, res) => {
    console.log("Hey its a get request")
    res.send('Hello World21!')
}).post('/', (req, res) => {
    console.log("Hey its a post request")
    res.send('Hello World post!')
})

app.put('/', (req, res) => {
    console.log("Hey its a put request")
    res.send('Hello World put!')
})

app.get("/index", (req, res) => {
    console.log("Hey its index")
    res.sendFile('templates/index.html', { root: __dirname })
})

app.get("/api", (req, res) => {
    res.json({ a: 1, b: 2, c: 3, d: 4, name: ["harry", "jerry"] })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})