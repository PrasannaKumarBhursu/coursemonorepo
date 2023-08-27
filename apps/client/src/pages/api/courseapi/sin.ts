



import type { NextApiRequest, NextApiResponse } from 'next'
import { Course } from "db";

import dbConnect from '@/lib/db';
import { useRouter } from 'next/router'
import { getUser } from '@/lib/middleware';




export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    await dbConnect();

    console.log("helloafljdfkjlh");
    

    const router = useRouter();
    const authHeader = req.headers.authorization;
    console.log("router mjhghjgjh",router);
    



    // if (authHeader) {
    //     const token = authHeader.split(' ')[1];
    //     getUser(token, async (userId) => {
    //         console.log(userId);

    //         if (!userId) {
    //             res.status(403).json({});
    //             return
    //         }
    //         const course = await Course.findByIdAndUpdate(, req.body, {
    //             new: true,
    //           });
            
    //           if (course) {
    //             res.json({ message: "Course updated successfully" });
    //           } else {
    //             res.status(404).json({ message: "Course not found" });
    //           }

    //     });
    // }









}



