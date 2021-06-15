const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.get('/posts', (req, res) => {
    res.send({
        id: 1,
        title: "Lorem ipsum dolor sit amet",
        description: "kfokfokfokfofkofko kokjdf isjidjf idj"
    })
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
} )