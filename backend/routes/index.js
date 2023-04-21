import upload_doc from "./upload.js";
import chat from "./chat.js";
import summary from "./summary.js";
import flags from "./flags.js";

const constructorMethod = (app) => {
  app.use("/upload", upload_doc);
  app.use("/chat", chat);
  app.use("/summary", summary);
  app.use("/flags", flags);
  app.use("*", (req, res) => {
    res.redirect("/");
  });
};

export default constructorMethod;
