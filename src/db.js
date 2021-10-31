const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/firebaseauth", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection Estalished...."))
  .catch((err) => console.log(err));

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cid: {
    type: String,
  },
});

const customer = new mongoose.model("Customer", customerSchema);

const insertdata = (username, userid) => {
  const entryinsert = new customer({
    name: username,
    cid: userid,
  });
  entryinsert.save();
};

const readdata = async (userid) => {
  try {
    //const executeQuery = await customer.find();
    const executeQuery = await customer.find({ cid: { $eq: userid } });
    console.log(executeQuery);
    if (executeQuery.length > 0) return true;
    else return false;
  } catch (err) {
    console.log(err);
  }
};

const getdata = async (userid) => {
  try {
    //const executeQuery = await customer.find();
    const executeQuery = await customer.find({ cid: { $eq: userid } });
    console.log(executeQuery);
    return executeQuery;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { insertdata, readdata, getdata };
