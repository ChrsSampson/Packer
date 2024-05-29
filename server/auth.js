// authentication middle ware

// use the pocket base token to validate the request

// headers.bearer = token

async function auth_middleware(req, res, next) {
    const { authorization } = req.headers;

    if (!authorization) {
        res.status(401).send();
        return;
    }

    const token = authorization.replace("Bearer ", "");

    if (!token) {
        res.status(401).send();
        return;
    }

    const body_data = { token };

    const result = await fetch(
        `http://localhost:8090/api/collections/users/auth-refresh`,
        {
            method: "POST",
            body: JSON.stringify(body_data),
        }
    );

    if (result.status !== 200) {
        res.status(401).send();
        return;
    }

    next();
}

export default auth_middleware;
