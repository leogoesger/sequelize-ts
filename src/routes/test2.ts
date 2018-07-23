import { Router } from "express";
import { Location, Book } from "../models";

const test = Router();

test.route("/").get((_, res) => {
    Location.findAll().then(data => res.status(200).send(data));
});

test.route("/abc").get((_, res) => {
    Book.findAll().then(data => res.status(200).send(data));
});

export default test;
