// this is an application helpers which is used is used either to encrypt or decrypt password

import crypto from 'crypto';

const SECRET = 'AKASH-REST-API';

export const random = () => crypto.randomBytes(128).toString('base64');
export const authentication = (salt: string, password: string) => {
    return crypto.createHmac('sha256', [salt, password].join('/')).update(SECRET).digest('hex');
};

