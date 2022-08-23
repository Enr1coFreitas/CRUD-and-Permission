import express from "express";
import sessionRouter from "./routes/sessions.routes";
import userRouter from "./routes/users.routes";

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/login", sessionRouter);

app.listen(3000);

export default app;