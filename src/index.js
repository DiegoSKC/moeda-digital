import e from "express";
import transaction_router from "./routers/transaction_router.js";
import user_router from "./routers/user_router.js";
import wallet_router from "./routers/wallet_router.js";
import "dotenv/config";
import "./config/db.js";

const app = e();

app.use(e.json());

app.use("/transaction", transaction_router);
app.use("/user", user_router);
app.use("/wallet", wallet_router);

app.listen(process.env.API_PORT, () =>
  console.log("Servidor conectado com sucesso!")
);