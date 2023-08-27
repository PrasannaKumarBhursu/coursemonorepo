import { Button, Card, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import { useRouter } from "next/router";

import axios from "axios";

type coursetype = {
    _id?: string,
    title?: string,
    description?: string,
    price?: Number,
    imageLink?: string,
    published?: Boolean
};



function Courses() {
    const [courses, setCourses] = useState<coursetype[]>([]);

    const init = async () => {
        const response = await axios.get('/api/auth/courses/', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        setCourses(response.data.courses)
    }
    useEffect(() => {
        init();
    }, []);

    return <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {courses.map(course => {
            return <Course course={course} key={course._id} />
        }
        )}
    </div>
}

export function Course({ course }: { course: coursetype }) {
    const router = useRouter();

    return <Card style={{
        margin: 10,
        width: 300,
        minHeight: 200,
        padding: 20
    }}>
        <Typography textAlign={"center"} variant="h5">{course.title}</Typography>
        <Typography textAlign={"center"} variant="subtitle1">{course.description}</Typography>
        <img src={course.imageLink} alt={course.imageLink} style={{ width: 300 }} ></img>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
            <Button variant="contained" size="large" onClick={() => {
                router.push("/course/" + course._id);
            }}>Edit</Button>
        </div>
    </Card>

}

export default Courses;