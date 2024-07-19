// src/services/authService.js

const { getUsers, createUser } = require('./api');

// Fetch all users
const fetchUsers = async () => {
  try {
    const users = await getUsers();
    console.log('Fetched users:', users);
    return users;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

// Register a new user
const registerUser = async (userData) => {
  try {
    const newUser = await createUser(userData);
    console.log('User created:', newUser);
    return newUser;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

// Export functions
module.exports = {
  fetchUsers,
  registerUser,
};
