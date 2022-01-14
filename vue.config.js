module.exports = {
    devServer: {
        disableHostCheck: true,
        proxy: {
            '^/api': {
                target: 'http://localhost:3080',
                changeOrigin: true
            }
        }
    }
}