import dbConnect from '@/lib/dbConnect';
import Action from '@/models/Action';

export async function GET(req) {
  await dbConnect();
  console.log('gettio brolio')
  const actions = await Action.find({});
  return new Response(JSON.stringify({ success: true, data: actions }), {
    status: 200,
  });
}

export async function POST(req) {
  await dbConnect();
  const data = await req.json();
  const newAction = new Action(data);
  await newAction.save();
  return new Response(JSON.stringify({ success: true, data: newAction }), {
    status: 201,
  });
}