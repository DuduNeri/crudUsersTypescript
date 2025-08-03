import app from "./app";
import { sequelize } from "./config/database";

const PORT = process.env.PORT || 8080;

const FORCE_SYNC = false; 

(async () => {
  try {
    await sequelize.authenticate();
    console.log("DB connected!");

    await sequelize.sync({ force: FORCE_SYNC });
    console.log(FORCE_SYNC ? "Tabelas recriadas com sucesso." : "Tabelas sincronizadas.");

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
