import Cors from "micro-cors";
const cors = Cors({ allowMethods: ["GET", "HEAD"] });

function test(req, res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(
        JSON.stringify({
            name: "Home",
            date: new Date().toLocaleString()
        })
    );
}

export default cors(test);
