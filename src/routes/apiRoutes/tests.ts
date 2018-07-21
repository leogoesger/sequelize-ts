import { Router } from "express";
const test = Router();

test.route("/").get((_, res) => res.status(200).send("something"));

export default test;
