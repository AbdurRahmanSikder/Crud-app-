import express from 'express';
import {create, getAll, getOne, update, Delete} from '../controller/userController.js';
const route = express.Router();

route.post("/user", create);
route.get("/getall", getAll);
route.get("/getone/:id", getOne);
route.get("/delete/:id", Delete);
route.post("/update/:id", update);

export default route;
