import User from './user.model';

export async function signUp(req, res) {
  console.log('====================================');
  console.log(req.body);
  console.log('====================================');
  try {
    const user = await User.create(req.body);
    return res.status(201).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
}
