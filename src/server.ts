import mongoose from "mongoose";
import config from "./app/config";
import app from "./app";

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("Connected to MongoDB");
    app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

bootstrap();
