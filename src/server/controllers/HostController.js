const db = require('../models/database.js');

const hostController = {
  createEvent(req, res, next) {
    db.query('INSERT INTO event SET ?', {
      host_id: req.params.host_id,
      time: req.body.event_time,
      location: req.body.location,
      max_attend: req.body.max_attend,
      event_name: req.body.event_name,
    }, (err, results) => {
      if (err) throw err;
      res.locals.eventId = results.insertId;
      db.end();
      next();
    });
  },

  getAllEvent(req, res, next) {
    db.query('SELECT * from event', (err, results) => {
      if (err) throw err;
      res.locals.results = results;
      db.end();
      next();
    });
  },
};


module.exports = hostController;