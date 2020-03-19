echo "📦  Building staging the application ..."!
webpack --mode production --env.ENVIRONMENT=staging --config ./webpack.config.js