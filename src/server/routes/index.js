'use strict';

const express = require('express');
const path = require('path');
const moment = require('moment');

const router = express.Router();
const cloudant = require('../shared/cloudant');

router.get('/api/v1/squads', (req, res, next) => {
  cloudant.dBase('howru-general')
    .then(resolvedDb => {
      resolvedDb.get('squadlist', (err, body) => {
        if (err) {
          res.status(500).json({ msg: 'Internal server error' });
        } else {
          res.status(200).json(body);
        }
      });
    });
});

router.post('/api/v1/dashboard', (req, res, next) => {
  console.log(req.body.squadName);
  cloudant.dBase('howru-general')
    .then(resolvedDb => {
      resolvedDb.view('squads','bySquadName', {key: req.body.squadName, include_docs: true},(err, body) => {
        if (err) {
          console.log(err);
          res.status(500).json({ msg: 'Internal server error'});
        } else {
          const data = body.rows.map(item => {
             return {
               week: moment(item.doc.timestamp.toString(), 'YYYY-MM-DD').isoWeek(),
               mood: item.doc.newMoodScore,
             }
          });
          data.sort((a, b) => {
             if (a.week < b.week) {
               return -1;
             }
             if (a.week > b.week) {
               return 1;
             }
             return 0;
          });
          const start = data[0].week;
          const end = data[data.length -1].week;
          const result = [];
          for (let i = start; i <= end; i++) {
            const weekData = data.filter(item => item.week ===i);
            let sum = 0;
            weekData.forEach(item => {
              sum += item.mood;
            });
            if (weekData.length !== 0) {
              const averageMood = sum / weekData.length;
              result.push({ week: i,  mood: averageMood });
            }
          }
          res.status(200).json({ data: result});
        }
      });
    });
});

router.post('/api/v1/submit', (req, res, next) => {
  cloudant.dBase('howru-general')
    .then(resolvedDb => {
      req.body.timestamp = new Date();
      req.body.type = 'moodRecord';
      console.log(req.body);
      resolvedDb.insert(req.body, (err, body) => {
        if (err) {
          res.status(500).json({ msg: 'Oh snap, something went wrong' });
        } else {
          res.status(201).json({ msg: 'Thank you'});
        }
     });
    });
});

router.get('/*', (req, res, next) => {
  console.log('Serving React client');
  res.sendFile(path.resolve('build/index.html'));
});

module.exports = router;
