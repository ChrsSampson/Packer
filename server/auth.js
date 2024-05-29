// authentication middle ware

// use the pocket base token to validate the request

// headers.bearer = PB.token

// verifies user token is valid and refreshes the auth expiration if valid
// else request goes in trash
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

    const result = await fetch(
        `http://localhost:8090/api/collections/users/auth-refresh`,
        {
            method: "POST",
            headers: {
                authorization: `Bearer ${token}`,
            },
        }
    );

    if (result.status !== 200) {
        res.status(401).send();
        return;
    }

    next();
}

export default auth_middleware;
