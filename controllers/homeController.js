const homeItem = require("./../homeModel");
var item = "";
//-----------------------------------------------------------------------------------
//GET request for home route
exports.getHomeTasks = async (req, res) => {
  const today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  var day = today.toLocaleDateString("en-US", options);
  var dbItem = await homeItem.find({});
  res.render("list", {
    listTitle: day,
    newListItems: dbItem,
  });
};
//-----------------------------------------------------------------------------------
//POST request
exports.postHomeTasks = async (req, res) => {
  item = await req.body.newItem;
  if (item !== null && item !== "") {
    await homeItem.create({ name: item });
  } else {
    console.log("item is empty");
  }
  res.redirect("/");
};
//-----------------------------------------------------------------------------------
//DELETE item on check
exports.deleteOnCheck = async (req, res) => {
  try {
    var idOfItem = await req.body.checkbox;
    homeItem.findByIdAndRemove(idOfItem).then(() => {
      res.redirect("/");
    });
  } catch {
    console.log("error occured");
  }
};
//-----------------------------------------------------------------------------------
