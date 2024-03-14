import app from "./core/app.ts";
import router from "./routes/mod.ts";

app.use(router);

app.listen(8000);