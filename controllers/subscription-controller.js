let resource;

const subscriptionListen = async (req, res, next) => {
    let status;

    if (req.query && req.query.validationToken) {
        res.send(req.query.validationToken);
        status = 200;
    }

    if (req.body) {
        resource = req.body.value
    }
}

const subscriptionSend = async(req, res, next) => {
    if (resource) {
        res.send({ data: resource })
    } else {
        res.send({ data: false })
    }
}

exports.subscriptionListen = subscriptionListen
exports.subscriptionSend = subscriptionSend