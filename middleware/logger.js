export const logger = (req, res, next) => {
  const startTime = Date.now();

  res.on('finish', () => {
    const elapsed = Date.now() - startTime;
    console.log(`${req.method} ${req.originalUrl} ${res.statusCode} ${elapsed}ms`);
  });

  next();
};
