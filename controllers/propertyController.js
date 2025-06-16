import Property from "../models/Property.js";
import Agent from "../models/Agent.js";
import getCoordinates from "../services/propertyService.js";

let properties = [];

async function createProperty(req, res) {
  const { title, price, address, agentName, agency } = req.body;

  console.log("Creating property with data:", req.body);
  const location = await getCoordinates(address);

  const agent = new Agent(agentName, agency);
  const newProperty = new Property(
    properties.length + 1,
    title,
    price,
    address,
    location,
    agent
  );

  properties.push(newProperty);
  res.status(201).json(newProperty);
}

function getAllProperties(req, res) {
  res.json(properties);
}

export { createProperty, getAllProperties };
