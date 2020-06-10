const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const UserController = require('./controller/UserController');
const SpotController = require('./controller/SpotController');
const ProfileController = require('./controller/ProfileController');
const ReservaController = require('./controller/ReservaController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/user', UserController.store);
routes.get('/user', UserController.index);
routes.put('/:id/update', UserController.update);

routes.post('/spot', upload.single('img'), SpotController.store);
routes.get('/spots', SpotController.index);


routes.get('/profile', ProfileController.show);

routes.post('/spots/:spot_id/reserva', ReservaController.store);


module.exports = routes;