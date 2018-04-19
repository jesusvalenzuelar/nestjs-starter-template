import { Middleware, NestMiddleware, ExpressMiddleware } from '@nestjs/common';
import * as jwt from 'express-jwt';
import { expressJwtSecret } from 'jwks-rsa';

@Middleware()
export class AuthenticationMiddleware implements NestMiddleware {
    resolve() : ExpressMiddleware {
        return jwt({
            secret: expressJwtSecret({
                cache: true,
                rateLimit: true,
                jwksRequestsPerMinute: 5,
                jwksUri: `[YOUR_JWKS_URI_HERE]`
            }),
            aud: '[YOUR_AUDIENCE_HERE]',
            issuer: `[YOUR_ISSUER_HERE]`,
            algorithm: '[YOUR_ALGORITHM_HERE]'
        })
    }
}