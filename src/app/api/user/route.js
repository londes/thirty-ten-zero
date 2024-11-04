import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';

export async function GET(req) {
  await dbConnect();
  const users = await User.find({});
  return new Response(JSON.stringify({ success: true, data: users }), {
    status: 200,
  });
}

export async function POST(req) {
  await dbConnect();
  const data = await req.json();
  const newUser = new User(data);
  await newUser.save();
  return new Response(JSON.stringify({ success: true, data: newUser }), {
    status: 201,
  });
}