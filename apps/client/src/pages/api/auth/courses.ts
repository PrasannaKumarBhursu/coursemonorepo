



import type { NextApiRequest, NextApiResponse } from 'next'
import { Admin, Course } from "db";

import dbConnect from '../../../lib/db';

import { getUser } from '@/lib/middleware';




export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    await dbConnect();
   
    
    const authHeader = req.headers.authorization;
    
    
    
    

    if (authHeader) {
        const token = authHeader.split(' ')[1];
        getUser(token, async (userId) => {
            console.log(userId);
            
            if (!userId) {
                res.status(403).json({});
                return
            }
            const courses = await Course.find({});
            res.json({ courses });

        });
    }









}



