import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';

import dotenv from 'dotenv';

//require('dotenv').config(); // Optional: to load EMAIL + PASSWORD from .env

const app = express();
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD   
  }
});

app.post('/api/contact', async (req, res) => {
  const { email, message } = req.body;

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL,
      subject: 'new msg',
      text: message,

    });
    res.status(200).send('email sent');
  } catch (err) {

    console.error(err);
    res.status(500).send('error');
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('Server running on http://localhost:3000'));


//I am trying to implament importing .env files for vite, this implamentation is for webpack
