import { Router } from "express";
const router = Router();
import userMiddleware from "../middleware/user.js";
import  User from "../db/index.js"


// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username
    const password = req.body.password

    User.create({

    })
    
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

export default router