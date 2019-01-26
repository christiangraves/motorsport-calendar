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
    
    const {username, password} = req.body

    User.findOne({username: username}, (error, user)=> {
      if(error){
        console.log('user.js post error: ', error)
      } else if (user){
        res.json({error:`Username: ${username} already taken` })
        // {error:`Username: ${username} already taken` }
      }
      else{
        const regUser = new User({
          username: username,
          password: password
        })
        regUser.save((err, savedUser) => {
          if(error) return res.json(err)
          res.json(savedUser)
        })
      }
    })
  });

  app.post('/api/login', function (req, res) {
    User.findOne({
      username: req.body.username
    }, function(err, user) {
      if (err) throw err;
  
      if (!user) {
        res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
      } else {
        // check if password matches





        // user.comparePassword(req.body.password, function (err, isMatch) {
        //   if (isMatch && !err) {
        //     // return the information including token as JSON
        //     res.json({success: true});
        //   } else {
        //     res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
        //   }
        // });
      }
    });
  })
}