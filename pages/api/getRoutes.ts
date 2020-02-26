export default (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(
        JSON.stringify([
            { params: { slug: "hello-world" } },
            { params: { slug: "hello-world2" } }
        ])
    );
};
