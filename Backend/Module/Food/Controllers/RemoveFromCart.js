let CDBS = require("../../../Model/Cart.model");

module.exports = (req, res) => {
  let { name } = req.params;
  console.log("Delete", name);

  CDBS.deleteOne({ foodname: name })
    .then((data) => {
      res.json({
        status: true,
        msg: "Item Removed!",
      });
    })
    .catch((e) => {
      res.json({
        status: false,
        msg: "Error",
      });
    });
};
