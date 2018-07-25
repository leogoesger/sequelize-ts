import { Router } from "express";
import { locationController } from "../controllers";

const location = Router();

location.route("/countries").get(locationController.getCountries);
location.route("/country/:id").get(locationController.getCountry);
location.route("/state/:id").get(locationController.getState);
location.route("/region/:id").get(locationController.getRegion);
location.route("/place/:id").get(locationController.getPlace);
location.route("/area/:id").get(locationController.getArea);
location.route("/section/:id").get(locationController.getSection);

export default location;
