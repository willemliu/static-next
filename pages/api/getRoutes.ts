export default (req, res) => {
    console.log(req.query);
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(
        JSON.stringify([
            { params: { slug: "static-generated" } },
            { params: { slug: "static-generated2" } }
        ])
    );
};
