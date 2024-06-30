const express = require("express");
const cors = require('cors');
const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")

dotenv.config();

mongoose
.connect(process.env.MONGO_URL)
.then(()=> console.log("DB Connected"))
.catch((err)=>{
    console.log(err)
});

//Enable CORS for all routes
app.use(cors({
    origin: 'https://bookishwear-client.vercel.app/'
}));

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);



app.listen(process.env.PORT, () => {
    console.log(`Backend Server is running at ${process.env.PORT}`);
});