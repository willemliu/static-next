import Cors from "micro-cors";
const cors = Cors({ allowMethods: ["GET", "HEAD"] });

export async function getPretendApiData() {
    return {
        ...(await getData()),
    };
}

async function getData() {
    return {
        date: new Date().toLocaleString(),
    };
}

async function test(req, res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(await getPretendApiData()));
}

export default cors(test);
