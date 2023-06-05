import User from "../models/userModel.js"

const registerUser =  async (req, res) => {
    try {
      const { name, email,mobileNumber, password } = req.body;
      const existingUser = await User.findOne({ email: email });
  
      if (existingUser) {
        res.send({ message: "User already registered" });
      } else {
        const newUser = new User({
          name,
          email,
          mobileNumber,
          password
        });
        await newUser.save();
        res.send({ message: "Successfully registered, please login now." });
      }
    } catch (err) {
      res.status(500).send({ message: "Error occurred during registration" });
    }
  };

const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email: email });
  
      if (!user) {
        res.send({ message: "User not found" });
      } else {
        if (user.password === password) {
          res.send({ message: "Login successful" });
        } else {
          res.send({ message: "Incorrect password" });
        }
      }
    } catch (err) {
      res.status(500).send({ message: "Error occurred during login" });
    }
  };

  const getUsers = async (req, res) => {
    try {
      const { page = 1, limit = 10, search = "" } = req.query;
      const query = {
        $or: [
          { name: { $regex: search, $options: 'i' } },
          { email: { $regex: search, $options: 'i' } },
          { mobileNumber: { $regex: search, $options: 'i' } }
        ]
      };
  
      const users = await User.find(query)
        .skip((page - 1) * limit)
        .limit(parseInt(limit)).sort({"name":1, "email":1,});
  
      const totalCount = await User.countDocuments(query);
  
      res.send({
        data: users,
        page: parseInt(page),
        limit: parseInt(limit),
        total: totalCount
      });
    } catch (err) {
      res.status(500).send({ message: "Error occurred while fetching users" });
    }
  };
  
  
  const getsingUser = async (req, res) => {
    try {
      const { page = 1, limit = 10, search = '', sortBy = 'name', sortOrder = 'asc' } = req.query;
  
      // Prepare the search query
      const searchQuery = {
        $or: [
          { name: { $regex: search, $options: 'i' } },
          { email: { $regex: search, $options: 'i' } },
          { mobileNumber: { $regex: search, $options: 'i' } }
        ]
      };
  
      // Prepare the sort query
      const sortQuery = {};
      sortQuery[sortBy] = sortOrder === 'asc' ? 1 : -1;
  
      // Count the total number of matching users
      const totalCount = await User.countDocuments(searchQuery);
  
      // Fetch the users with pagination and sorting
      const users = await User.find(searchQuery)
        .sort(sortQuery)
        .skip((page - 1) * limit)
        .limit(parseInt(limit));
  
      res.send({
        data: users,
        page: parseInt(page),
        limit: parseInt(limit),
        total: totalCount
      });
    } catch (err) {
      res.status(500).send({ message: 'Error occurred while fetching users' });
    }
  };
  
  
  
  
  
  

export {registerUser,loginUser,getUsers,getsingUser};