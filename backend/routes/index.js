import upload_doc from "./upload.js";
import chat from "./chat.js";

const constructorMethod = (app) => {
  app.use("/upload", upload_doc);
  app.use("/document", chat);
  app.use("*", (req, res) => {
    res.redirect("/");
  });
};

export default constructorMethod;
