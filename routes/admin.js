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

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', (req, res) => {
    // Implement fetching all courses logic
    res.send("hello")
});

export default router;