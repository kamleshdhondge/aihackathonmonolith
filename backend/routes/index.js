import upload_doc from "./upload.js";
import documentEndpoint from "./document_endpoint.js";

const constructorMethod = (app) => {
  try{
    app.use("/upload", upload_doc);
    app.use("/document", documentEndpoint);
    app.use("*", (req, res) => {
      res.redirect("/");
    }); 
  }catch(e){
    console.log(e);
  }


};

export default constructorMethod;
