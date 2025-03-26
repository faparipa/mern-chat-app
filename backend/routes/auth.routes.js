import express from 'express';
import { login, logout, signup } from '../controllers/auth.controller.js';

const router = express.Router();
//ezek a controllers.js fileba lesznek. Jobban átlátható
// router.get('/signup', (req, res) => {
//   res.send('Signup Route');
// });

// router.get('/login', (req, res) => {
//   res.send('Login Route');
// });

// router.get('/logout', (req, res) => {
//   res.send('Logout Route');
// });

router.post('/signup', signup);

router.post('/login', login);

router.post('/logout', logout);

export default router;
