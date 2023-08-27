// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Admin } from "db";
import jwt from "jsonwebtoken";
import dbConnect from '@/lib/db';
import { SECRET } from "@/lib/config";

type Data = {
    message?: string,
    token?: string,
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    await dbConnect();
    const { email, password } = req.body;
    let username = email;
    console.log(username)
    console.log(password)

    const admin = await Admin.findOne({ username, password });
    if (admin) {
        const token = jwt.sign({ username, role: 'admin' }, SECRET, { expiresIn: '11h' });
        res.json({ message: 'Logged in successfully', token });
    } else {
        res.status(403).json({ message: 'Invalid username or password' });
    }




}

