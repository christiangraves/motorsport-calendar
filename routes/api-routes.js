const User = require('../models/User');
const Series = require('../models/Series');
const passport = require('../passport');


module.exports = function (app) {

  app.get('/api/series', function (req, res) {
    Series.find({})
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });


  app.post('/api/reg', function (req, res) {
    console.log('user signup');

    const { username, password } = req.body

    User.findOne({ username: username }, (error, user) => {
      if (error) {
        console.log('user.js post error: ', error)
        res.json(error);
      } else if (user) {
        console.log("else if");
        res.json({ error: `Username: ${username} already taken` })
      }
      else {
        console.log("else");
        const regUser = new User({
          username: username,
          password: password
        })
        regUser.save((err, savedUser) => {
          console.log("else regUser.save");
          if (error) return res.json(err)
          res.json(savedUser)
        })
      }
    })
  });

  app.post('/api/login', function (req, res) {
    console.log("user login");
    User.findOne({
      username: req.body.username
    })
      .then(function (data) {
        console.log(data);
        res.json(data);
      })
      .catch(function (err) {
        console.log(err);
        res.json(err);
      });
  });
}