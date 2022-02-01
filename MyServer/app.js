const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
<<<<<<< HEAD
=======
const cors = require('cors');

const MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://tvezzani:kczttnmbPE3G5zhA@cse341cluster-3dwlw.mongodb.net/test?retryWrites=true&w=majority";
const options = {
  family: 4
}; 
>>>>>>> 0dbb3c830334e8b44155375fde73d723fc546dd9

const errorController = require('./controllers/error');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
<<<<<<< HEAD
  User.findById('5baa2528563f16379fc8a610')
=======
  User.findById('5bab316ce0a7c75f783cb8a8')
>>>>>>> 0dbb3c830334e8b44155375fde73d723fc546dd9
    .then(user => {
      req.user = new User(user.name, user.email, user.cart, user._id);
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect(
<<<<<<< HEAD
    'mongodb+srv://tvezzani:DUPiT0zOZ5rgfGyZ@cluster0.cubsi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  )
  .then(result => {
    app.listen(3000);
=======
    MONGODB_URL, options
  )
  .then(result => {
    User.findOne().then(user => {
      if (!user) {
        const user = new User({
          name: 'Timothy',
          email: 'tvezzani@gmail.com',
          cart: {
            items: []
          }
        });
        user.save();
      }    
    });
    app.listen(PORT);
>>>>>>> 0dbb3c830334e8b44155375fde73d723fc546dd9
  })
  .catch(err => {
    console.log(err);
  });

const corsOptions = {
    origin: "https://tvezzani-store.herokuapp.com/",
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
