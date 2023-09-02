import express from "express";
const app = express();
import multer from "multer";
import authRoutes from './routes/Auth.js'
import usersRoutes from './routes/Users.js'
import commentRoutes from './routes/Comments.js'
import postRoutes from './routes/Post.js'
import likesRoutes from './routes/Likes.js'
import cookieParser from "cookie-parser";
import cors from "cors"
app.use(express.json())
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

const corsOptions = {
  origin: "http://localhost:5174",
  methods: 'GET, POST, PUT, DELETE',
  allowedHeaders: 'Content-Type, Authorization',
};

app.use(cors());
app.use(cookieParser());
  
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use("/api/auth",authRoutes)
app.use("/api/user",usersRoutes)
app.use("/api/comment",commentRoutes)
app.use("/api/posts",postRoutes)
app.use("/api/likes",likesRoutes)
app.listen(8800, ()=>{
    console.log("API working!");
})