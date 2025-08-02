import app from "./app";
import { sequelize } from "./database";

const PORT = process.env.PORT || 3333;

(async () => {
  try {
    await sequelize.authenticate();
    console.log("DB connected!");

    await sequelize.sync(); 
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
