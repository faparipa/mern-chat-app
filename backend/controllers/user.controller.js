import User from '../models/user.model.js';

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    //const allUsers = await User.find() //összes user
    //({_id: { $ne: loggedInUserId }) //minden usert kérünk akinek az id -je nem egyenlő a bejelentkezett user id-jével.
    // ).select("-password") a jelszót nem kéri le.
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select('-password');

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error('Error in getUsersForSidebar: ', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};
