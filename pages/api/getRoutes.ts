import Cors from "micro-cors";
const cors = Cors({ allowMethods: ["GET", "HEAD"] });

function getRoutes(req, res) {
    console.log(req.query);
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(
        JSON.stringify([
            { params: { slug: "static-generated" } },
            { params: { slug: "static-generated2" } }
        ])
    );
}

export default cors(getRoutes);
