const port = 1818;
const morganBody = require('morgan-body');
const cors = require("cors");
const path = require('path');
const parshaRoute=require('./parshas')
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(
    fileUpload({
        createParentPath: true,
    }));
morganBody(app);
app.use(express.static(path.resolve(__dirname, "../innrvue-client", "build")));
app.get("*", (req, res, next) => {
    // Serve index.html file if it doesn't recognize the route
    res.sendFile(path.resolve(__dirname, "../innrvue-client", "build", "index.html"));
});
app.use('/parshas', awsRoutes)

app.listen(process.env.PORT || port);