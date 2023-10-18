const createUser = (req, res) => {
  res.send(req.body);
};
const findUser = (req, res) => {
  res.send("user found");
};

module.exports = {
  createUser,
  findUser,
};
