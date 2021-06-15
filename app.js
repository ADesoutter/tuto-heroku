const express = require('express');
// Importe Sequelize
const {DataTypes, Sequelize} = require('sequelize');
const dotenv = require('dotenv');

const app = express();
const port = process.env.PORT || 3000;

// Je suis en local
if(!process.env.NODE_ENV)
{
    // CHaque variable dans le .env en local devient
    // une variable process.env.LENOMDEMAVAR
    dotenv.config(); 
}
const sequelize = new Sequelize(process.env.DATABASE_URL);


// Créer le modèle des claviers
const Keyboard = sequelize.define('Keyboard', {
    brand: {
        type: DataTypes.STRING,
        allowNull: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

app.get('/posts', (req, res) => {
    res.send({
        id: 1,
        title: "Lorem ipsum dolor sit amet",
        description: "kfokfokfokfofkofko kokjdf isjidjf idj"
    })
});

// Tester si la connexion à la BDD est bonne
sequelize.authenticate()
.then(() => {
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    })
})
