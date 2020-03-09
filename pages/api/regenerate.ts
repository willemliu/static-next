import Cors from "micro-cors";
import "isomorphic-unfetch";
const cors = Cors({ allowMethods: ["GET", "HEAD"] });

async function regenerate(req, res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    const response = await fetch(
        "https://api.zeit.co/v1/integrations/deploy/QmNYzrk6Y9P1qL6PWVTnp9fForR7FuZp8JTfFyZ71CnVVS/3qWMRbPwMg"
    ).then((res) => res.json());
    res.end(JSON.stringify(response));
}

export default cors(regenerate);
