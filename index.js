import express from 'express';
import bodyParser  from'body-parser';
const app = express();
import adminRouter from "./routes/admin.js"
import userRouter from "./routes/user.js";

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin", adminRouter)
app.use("/user", userRouter)

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
