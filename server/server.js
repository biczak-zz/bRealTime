const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
let d;

app.get('/', (req, res) => {
  if (req.query.q === 'Puzzle') {
    d = req.query.d;
  }

  res.redirect(req.query.q);
});

app.get('/Ping', (req, res) => {
  res.send('OK');
});

app.get('/Name', (req, res) => {
  res.send('Alex Biczak');
});

app.get('/Email%20Address', (req, res) => {
  res.send('alex.biczak@gmail.com');
});

app.get('/Phone', (req, res) => {
  res.send('908-887-3837');
});

app.get('/Position', (req, res) => {
  res.send('Frontend Systems Engineer');
});

app.get('/Years', (req, res) => {
  res.send('2');
});

app.get('/Referrer', (req, res) => {
  res.send('Michael Grosinger via Hired.com');
});

app.get('/Degree', (req, res) => {
  res.send('N/A');
});

app.get('/Resume', (req, res) => {
  res.send('Resume: https://drive.google.com/file/d/0B_ZtNm8hOb6rSnlaSkpNal8xbTQ/view?usp=sharing \n Cover Letter: https://docs.google.com/document/d/1CkLl1M96CUJVdmmqodvKkxI1eTs7gHvxy6BtzHqbdQY/edit?usp=sharing');
});

app.get('/Source', (req, res) => {
  res.send('GitHub: https://github.com/biczak/bRealTime');
});

app.get('/Status', (req, res) => {
  res.send('Yes');
});

app.get('/Puzzle', (req, res) => {
  let equalIndex;
  let solution;
  let row1 = [];
  let row2 = [];
  let row3 = [];
  let row4 = [];
  let row5 = [];
  const solRow1 = [];
  const solRow2 = [];
  const solRow3 = [];
  const solRow4 = [];
  const solRow5 = [];
  const split = d.split('\n');

  // Split each row to get individual elements
  for (let i = 0; i < split.length; i++) {
    if (i === 1) {
      row1.push(split[i]);
    }
    if (i === 2) {
      row2.push(split[i]);
    }
    if (i === 3) {
      row3.push(split[i]);
    }
    if (i === 4) {
      row4.push(split[i]);
    }
    if (i === 5) {
      row5.push(split[i]);
    }
  }
  row1 = row1[0].split('');
  row2 = row2[0].split('');
  row3 = row3[0].split('');
  row4 = row4[0].split('');
  row5 = row5[0].split('');

  // Check to see where the equal sign is in the Puzzle Hint
  if (row2.indexOf('=') !== -1) {
    equalIndex = row2.indexOf('=');
  }
  if (row3.indexOf('=') !== -1) {
    equalIndex = row3.indexOf('=');
  }
  if (row4.indexOf('=') !== -1) {
    equalIndex = row4.indexOf('=');
  }
  if (row5.indexOf('=') !== -1) {
    equalIndex = row5.indexOf('=');
  }
    // Fill in what is given to us (Letters and Diagonal equal signs)
    solRow2[0] = 'A';
    solRow2[1] = '='
    solRow3[0] = 'B';
    solRow3[2] = '='
    solRow4[0] = 'C';
    solRow4[3] = '='
    solRow5[0] = 'D';
    solRow5[4] = '=';

    // Fill in remaining known places from Puzzle Hint
    if (row2.indexOf('<') !== -1) {
      solRow2[equalIndex] = '<';
      solRow2[row2.indexOf('<')] = '<';
    } else if (row2.indexOf('>') !== -1) {
      solRow2[equalIndex] = '>';
      solRow2[row2.indexOf('>')] = '>';
    } else {
      solRow2[equalIndex] = '=';
      solRow2[row2.indexOf('=')] = '=';
    }

    if (row3.indexOf('<') !== -1) {
      solRow3[equalIndex] = '<';
      solRow3[row3.indexOf('<')] = '<';
    } else if (row3.indexOf('>') !== -1) {
      solRow3[equalIndex] = '>';
      solRow3[row3.indexOf('>')] = '>';
    } else {
      solRow3[equalIndex] = '=';
      solRow3[row3.indexOf('=')] = '=';
    }

    if (row4.indexOf('<') !== -1) {
      solRow4[equalIndex] = '<';
      solRow4[row4.indexOf('<')] = '<';
    } else if (row4.indexOf('>') !== -1) {
      solRow4[equalIndex] = '>';
      solRow4[row4.indexOf('>')] = '>';
    } else {
      solRow4[equalIndex] = '=';
      solRow4[row4.indexOf('=')] = '=';
    }

    if (row5.indexOf('<') !== -1) {
      solRow5[equalIndex] = '<';
      solRow5[row5.indexOf('<')] = '<';
    } else if (row5.indexOf('>') !== -1) {
      solRow5[equalIndex] = '>';
      solRow5[row5.indexOf('>')] = '>';
    } else {
      solRow5[equalIndex] = '=';
      solRow5[row5.indexOf('=')] = '=';
    }
    
    // Find the row with only 1 missing piece, and fill the entire piece's column with '<'
    if (solRow2.length === 4) {
      for (let i = 0; i < solRow2.length; i++) {
        if (solRow2[i] === undefined) {
          solRow2[i] = '>';
          solRow3[i] = '>';
          solRow4[i] = '>';
          solRow5[i] = '>';
        }
        if (i === 2) {
          solRow3[i] = '=';
        } else if (i === 3) {
          solRow4[i] = '=';
        } else if (i === 4) {
          solRow5[i] = '=';
        }
      }
    } else if (solRow3.length === 4) {
      for (let i = 0; i < solRow3.length; i++) {
        if (solRow3[i] === undefined) {
          solRow2[i] = '>';
          solRow3[i] = '>';
          solRow4[i] = '>';
          solRow5[i] = '>';
        }
        if (i === 1) {
          solRow2[i] = '=';
        } else if (i === 3) {
          solRow4[i] = '=';
        } else if (i === 4) {
          solRow5[i] = '=';
        }
      }
    } else if (solRow4.length === 4) {
      for (let i = 0; i < solRow4.length; i++) {
        if (solRow4[i] === undefined) {
          solRow2[i] = '>';
          solRow3[i] = '>';
          solRow4[i] = '>';
          solRow5[i] = '>';
        }
        if (i === 1) {
          solRow2[i] = '=';
        } else if (i === 2) {
          solRow3[i] = '=';
        } else if (i === 4) {
          solRow5[i] = '=';
        }
      }
    } else {
      for (let i = 0; i < solRow5.length; i++) {
        if (solRow5[i] === undefined) {
          solRow2[i] = '>';
          solRow3[i] = '>';
          solRow4[i] = '>';
          solRow5[i] = '>';
        }
        if (i === 1) {
          solRow2[i] = '=';
        } else if (i === 2) {
          solRow3[i] = '=';
        } else if (i === 3) {
          solRow4[i] = '=';
        }
      }
    }
    // Finally, fill in all remaining spaces with '<';

  solution = solRow1.join('').toString() + '\n' + solRow2.join('').toString() + '\n' + solRow3.join('').toString() + '\n' + solRow4.join('').toString() + '\n' + solRow5.join('').toString();
  res.send(solution);
});

app.listen(port, () => {
  console.log('Listening on Port:', port);
});