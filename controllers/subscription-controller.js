const subscriptionListen = async (req, res, next) => {
    let status;

    if (req.query && req.query.validationToken) {
        res.send(req.query.validationToken);
        status = 200;
    }
}

const subscriptionSend = async(req, res, next) => {
    return res.json({ body: req.body })
}

exports.subscriptionListen = subscriptionListen
exports.subscriptionSend = subscriptionSend