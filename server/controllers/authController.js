const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

/**
 * Generate JWT token
 */
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });
};

/**
 * @route   POST /api/auth/register
 * @desc    Register a new user
 * @access  Public
 */
const register = async (req, res, next) => {
  try {
    // TODO: Implement registration logic
    // 1. Validate request body
    // 2. Check if user already exists
    // 3. Hash password with bcrypt
    // 4. Create user in DB
    // 5. Generate JWT and return

    res.status(200).json({
      success: true,
      message: 'Register route working',
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @route   POST /api/auth/login
 * @desc    Login user and return token
 * @access  Public
 */
const login = async (req, res, next) => {
  try {
    // TODO: Implement login logic
    // 1. Validate email & password from body
    // 2. Find user by email (include password field)
    // 3. Compare password with bcrypt
    // 4. Generate JWT and return

    res.status(200).json({
      success: true,
      message: 'Login route working',
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @route   GET /api/auth/me
 * @desc    Get current logged-in user profile
 * @access  Private (requires JWT)
 */
const getMe = async (req, res, next) => {
  try {
    // TODO: Return req.user after protect middleware attaches it
    res.status(200).json({
      success: true,
      message: 'GetMe route working',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login, getMe };
