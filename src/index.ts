import { BoomError as BiimError } from 'boom';
import * as Boom from 'boom';

export { BiimError };

export class Biim {

    private static dataInPayload(error: BiimError, payload?: any): BiimError {
        if (error.output && error.output.payload && typeof payload === 'object') {
            error.output.payload = Object.assign({}, error.output.payload, payload);
        }
        return error;
    }

    static wrap(error: Error, statusCode?: number, message?: string, payload?: any): BiimError {
        // get args array
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 4) {
            args.pop();
        }
        return this.dataInPayload(Boom.wrap.apply(Boom, args), payload);
    }


    static create(statusCode: number, message?: string, data?: any, payload?: any): BiimError {
        // get args array
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 4) {
            args.pop();
        }
        return this.dataInPayload(Boom.create.apply(Boom, arguments), payload);
    }


    static badRequest(message?: string, data?: any, payload?: any): BiimError {
        // get args array
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(Boom.badRequest.apply(Boom, args), payload);
    }


    static unauthorized(message?: string, scheme?: any, attributes?: any, payload?: any): BiimError {
        // get args array
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 4) {
            args.pop();
        }
        return this.dataInPayload(Boom.unauthorized.apply(Boom, args), payload);
    }


    static paymentRequired(message?: string, data?: any, payload?: any): BiimError {
        // get args array
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(Boom['paymentRequired'].apply(Boom, args), payload);
    }


    static forbidden(message?: string, data?: any, payload?: any): BiimError {
        // get args array
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(Boom.forbidden.apply(Boom, args), payload);
    }


    static notFound(message?: string, data?: any, payload?: any): BiimError {
        // get args array
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(Boom.notFound.apply(Boom, args), payload);
    }


    static methodNotAllowed(message?: string, data?: any, allow?: string | string[], payload?: any): BiimError {
        // get args array
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 4) {
            args.pop();
        }
        return this.dataInPayload(Boom.methodNotAllowed.apply(Boom, args), payload);
    }


    static notAcceptable(message?: string, data?: any, payload?: any): BiimError {
        // get args array
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(Boom.notAcceptable.apply(Boom, args), payload);
    }


    static proxyAuthRequired(message?: string, data?: any, payload?: any): BiimError {
        // get args array
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(Boom.proxyAuthRequired.apply(Boom, args), payload);
    }


    static clientTimeout(message?: string, data?: any, payload?: any): BiimError {
        // get args array
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(Boom.clientTimeout.apply(Boom, args), payload);
    }


    static conflict(message?: string, data?: any, payload?: any): BiimError {
        // get args array
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(Boom.conflict.apply(Boom, args), payload);
    }


    static resourceGone(message?: string, data?: any, payload?: any): BiimError {
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(Boom.resourceGone.apply(Boom, args), payload);
    }


    static lengthRequired(message?: string, data?: any, payload?: any): BiimError {
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(Boom.lengthRequired.apply(Boom, args), payload);
    }


    static preconditionFailed(message?: string, data?: any, payload?: any): BiimError {
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(Boom.preconditionFailed.apply(Boom, args), payload);
    }


    static entityTooLarge(message?: string, data?: any, payload?: any): BiimError {
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(Boom.entityTooLarge.apply(Boom, args), payload);
    }


    static uriTooLong(message?: string, data?: any, payload?: any): BiimError {
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(Boom.uriTooLong.apply(Boom, args), payload);
    }


    static unsupportedMediaType(message?: string, data?: any, payload?: any): BiimError {
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(Boom.unsupportedMediaType.apply(Boom, args), payload);
    }


    static rangeNotSatisfiable(message?: string, data?: any, payload?: any): BiimError {
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(Boom.rangeNotSatisfiable.apply(Boom, args), payload);
    }


    static expectationFailed(message?: string, data?: any, payload?: any): BiimError {
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(Boom.expectationFailed.apply(Boom, args), payload);
    }


    static teapot(message?: string, data?: any, payload?: any): BiimError {
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(Boom.teapot.apply(Boom, args), payload);
    }


    static badData(message?: string, data?: any, payload?: any): BiimError {
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(Boom.badData.apply(Boom, args), payload);
    }


    static locked(message?: string, data?: any, payload?: any): BiimError {
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(Boom.locked.apply(Boom, args), payload);
    }


    static preconditionRequired(message?: string, data?: any, payload?: any): BiimError {
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(Boom.preconditionRequired.apply(Boom, args), payload);
    }


    static tooManyRequests(message?: string, data?: any, payload?: any): BiimError {
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(Boom.tooManyRequests.apply(Boom, args), payload);
    }


    static illegal(message?: string, data?: any, payload?: any): BiimError {
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(Boom.illegal.apply(Boom, args), payload);
    }


    static internal(message?: string, data?: any, statusCode?: number, payload?: any): BiimError {
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 4) {
            args.pop();
        }
        return this.dataInPayload(Boom.internal.apply(Boom, args), payload);
    }

    static notImplemented(message?: string, data?: any, payload?: any): BiimError {
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(Boom.notImplemented.apply(Boom, args), payload);
    }


    static badGateway(message?: string, data?: any, payload?: any): BiimError {
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(Boom.badGateway.apply(Boom, args), payload);
    }


    static serverUnavailable(message?: string, data?: any, payload?: any): BiimError {
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(Boom.serverUnavailable.apply(Boom, args), payload);
    }


    static gatewayTimeout(message?: string, data?: any, payload?: any): BiimError {
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(Boom.gatewayTimeout.apply(Boom, args), payload);
    }


    static badImplementation(message?: string, data?: any, payload?: any): BiimError {
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(Boom.badImplementation.apply(Boom, args), payload);
    }
}
