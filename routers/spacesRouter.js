const { Router } = require("express");
// we use const because needs to be immutable (immutability) as we work with async function
// require the models
const Space = require("../models/").space;
const Story = require("../models/").story;

const router = new Router();
// you can only register same path for endpoint if other method used (GET, POST, PATCH, DELETE)
// Get all spaces endpoint: (example httpie request: http GET :4000/spaces)
router.get("/", async (req, res, next) => {
  // try and catch so that we can catch the error if something wrong with api
  try {
    // declare var Spaces that hold all Spaces that comes from your Space "Model"
    const Spaces = await Space.findAll();
    // responsebody is an "object" with 1 "property" with "Name" Spaces and "Value" Spaces
    const responseBody = {
      Spaces: Spaces,
    };
    // we send responseBody
    res.send(responseBody);
    // we log the value of the property with Name Spaces from the object responseBody to console
    console.log(responseBody.Spaces);
  } catch (error) {
    // if database down we get this error / migration not runned
    console.log(error);
    // status code so that we get somethiung back in console / httpie terminal and know whats wrong
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

// Get stories by spaceId: (examples httpie requests:
// http GET :4000/spaces/1
// http :4000/spaces name=Karla email=karla@codaisseur.com (use quotes when space, "Karla Codaiss")
// F2.1. Set up endpoint for this
router.get("/:id", async (req, res, next) => {
  // declare var id (by destructuring=unpacking values from object) that holds the value req.params
  // params is the :id
  const { id } = req.params;
  // clg id to see if you get the right value
  console.log(id);
  // declare var "Space" that holds the value Story by space id
  // .findByPk is find by private key. Here you define what you want to do
  // methods such as .create to create a user etc can also be used
  const space = await Space.findByPk(id, {
    // include Story array
    include: [Story],
    // define order in backend instead of in frontend
    order: [[Story, "createdAt", "DESC"]],
  });
  res.send(space);
});

module.exports = router;
