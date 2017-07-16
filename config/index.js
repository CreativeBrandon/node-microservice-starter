'use strict'

const required = [
    'APP_KEY',
    'APP_PORT',
    'NODE_ENV'
]
required.forEach((name) => {
    if (!process.env[name]) {
        throw new Error(`Environment variable ${name} is missing`)
    }
})

const config = {
    base_url: process.env.BASE_URL || 'http://localhost:3000',
    bcrypt: {
        saltRounds: process.env.BCRYPT_SALT_ROUNDS
    },
    env: process.env.NODE_ENV,
    port: Number(process.env.APP_PORT) || 3000,
    secret: process.env.APP_KEY
}

module.exports = config;
