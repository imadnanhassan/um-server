import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Application, Request, Response } from "express";
import { StudentRoutes } from "./app/module/student/student.router";

const app: Application = express();

//parsers
app.use(express.json());
app.use(cookieParser());

app.use(cors({ origin: ["http://localhost:5173"], credentials: true }));

// application routes
app.use("/api/v1/students", StudentRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send(
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>PM University Management Server</title>
      <style>
        body {
          font-family: "Arial", sans-serif;
          background: linear-gradient(135deg, #4b6cb7, #182848);
          color: white;
          height:100vh;
          
          text-align: center;
          padding: 50px;
          margin: auto;
        }
        .container {
          background: rgba(255, 255, 255, 0.1);
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.2);
          display: inline-block;
          width: 80%;
          max-width: 600px;
        }
        h1 {
          font-size: 28px;
          color: #fff;
        }
        p {
          font-size: 18px;
          color: #ddd;
          line-height: 1.6;
        }
        .btn {
          display: inline-block;
          padding: 12px 25px;
          margin-top: 20px;
          font-size: 16px;
          font-weight: bold;
          text-decoration: none;
          color: white;
          background: #ff9800;
          border-radius: 5px;
          transition: 0.3s;
        }
        .btn:hover {
          background: #e68900;
        }
        footer {
          margin-top: 30px;
          font-size: 14px;
          color: #bbb;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🚀 Welcome to PM University Management Server</h1>
        <p>This is the API backend for managing PM University, built with Express.js and TypeScript.</p>
        <a href="https://pmuniversity.com" class="btn">Visit PM University</a>
      </div>
      <footer>&copy; 2024 PM University Management. All Rights Reserved.</footer>
    </body>
    </html>
      `
  );
});

export default app;
