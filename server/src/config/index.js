module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'tab-tracker',
        user: process.env.USER || 'tab-tracker',
        password: process.env.DB_PASS || 'tab-tracker',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './tab-tracker.sqlite'
        }
    }
}
