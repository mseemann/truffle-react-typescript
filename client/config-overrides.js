module.exports = function override(config) {
  const fallback = config.resolve.fallback || {};
  Object.assign(fallback, {
    crypto: require.resolve("crypto-browserify"),
    stream: require.resolve("stream-browserify"),
    assert: require.resolve("assert"),
    http: require.resolve("stream-http"),
    https: require.resolve("https-browserify"),
    os: require.resolve("os-browserify"),
    url: require.resolve("url"),
  });
  config.resolve.fallback = fallback;

  // avoid a bunch of warnigs regarding xhr2-cookies and @ethersproject source map loadings
  // webpack tries to load the ts.map file but there is only a js.map file
  config.ignoreWarnings = [/Failed to parse source map/];
  return config;
};
