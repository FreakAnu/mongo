import { Router } from "express";
import models from "../db/index.js";
import adminMiddleware from "../middleware/admin.js";

const { Admin, Course } = models;
const router = Router();


// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password

   await Admin.create({
        username,
        password
    })

    res.json({
        msg:"Admin created successfully"
    })
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const title = req.body.title
    const description = req.body.description
    const imageLink = req.body.imageLink
    const price = req.body.price

    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })

    res.json({
        message:'Course created successfully', courseId: newCourse._id 
    })

});

router.get('/courses', async(req, res) => {
    // Implement fetching all courses logic
    const allCourses = await Course.find({})

    res.json({
        course:allCourses
    })
});

export default router;