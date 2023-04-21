import upload_doc from "./upload.js";
import chat from "./chat.js";
import flags from "./flags.js";

const constructorMethod = (app) => {
  app.use("/upload", upload_doc);
  app.use("/document", chat);
  app.use("/flags", flags);
  app.use("*", (req, res) => {
    res.redirect("/");
  });
};

export default constructorMethod;
