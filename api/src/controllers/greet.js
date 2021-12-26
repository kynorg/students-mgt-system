import { User } from '../../db/models';

export default async (req, res) => {
  try {
    const user = await User.create({ username: 'Abdulfatai2', password: 'testpassword2' })
    const count = await User.count();

    res.end(`Request was handled successfully - ${user.id} - ${count}`);
  } catch(error) {
    console.log(error);
    res.status(500).end('Internal server error');
  }
}
