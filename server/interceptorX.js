const interceptor1 = (req, res, next) => {
  if (req.query.token1 == "iconext1") {
    next();
  } else {
    res.end("unauthorized 1");
  }
};
const interceptor2 = (req, res, next) => {
  if (req.query.token2 == "iconext2") {
    next();
  } else {
    res.end("unauthorized 2");
  }
};

const interceptor3 = (req, res, next) => {
  if (req.query.token3 == "iconext3") {
    next();
  } else {
    res.end("unauthorized 3");
  }
};

module.exports = { interceptor1, interceptor2, interceptor3 };
