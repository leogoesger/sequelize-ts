import { Router } from "express";
import db from "../models";

const test = Router();

test.route("/").get((_, res) => {
    db.Product.findAll().then(data => res.status(200).send(data));
});

test.route("/abc").get((_, res) => {
    db.Product.findAll().then(data => res.status(200).send(data));
});

export default test;
