import upload_doc from "./upload.js";
import documentEndpoint from "./document_endpoint.js";

const constructorMethod = (app) => {
  app.use("/upload", upload_doc);
  app.use("/document", documentEndpoint);
  app.use("*", (req, res) => {
    res.redirect("/");
  });
};

export default constructorMethod;
