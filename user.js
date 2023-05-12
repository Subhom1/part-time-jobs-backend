// Create new user
app.post("/create-users", async (req, res) => {
  try {
    const user = {
      firstName: req.body["firstName"],
      lastName: req.body["lastName"],
      email: req.body["email"],
      qualification: req.body["qualification"],
      experience: req.body["experience"],
      address: req.body["address"],
      cv: req.body["cv"],
    };

    const newDoc = await db.collection(userCollection).add(user);
    res.status(201).send(`Created a new user: ${newDoc.id}`);
  } catch (error) {
    res
      .status(400)
      .send(
        `User should cointain firstName, lastName, email, qualification, experience, address, cv`
      );
  }
});
