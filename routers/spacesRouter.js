const { Router } = require("express");
// we use const because needs to be immutable (immutability) as we work with async function
const Space = require("../models/").space;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const Spaces = await Space.findAll();
    const responseBody = {
      Spaces: Spaces,
    };
    res.send(responseBody);
    console.log(responseBody.Spaces);
  } catch (error) {
    // if database down we get this error / migration not runned
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;
