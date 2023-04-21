
import upload_doc from "./upload.js";

const constructorMethod = (app) => {
    app.use("/upload", upload_doc)
    app.use('*', (req, res) => {
        res.redirect("/");
    });
};

export default constructorMethod;
