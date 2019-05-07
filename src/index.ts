import * as BiimError from 'boom';

export { BiimError };

export class Biim {

    private static dataInPayload(error: BiimError, payload?: any): BiimError {
        if (error.output && error.output.payload && typeof payload === 'object') {
            error.output.payload = Object.assign({}, error.output.payload, payload);
        }
        return this.generateKey(error);
    }

    private static generateKey(error: BiimError): BiimError {
        error.data = error.data || {};
        const k: string = error.data.key || error.output.payload['key'];
        const _key = !!k && typeof k === 'string' ? k.indexOf('E_') === 0 ? k : `E_${k}` : undefined;
        const key = _key || `E_${this.messageToKey(error.message)}`;
        error.data.key = key.toUpperCase();
        error.output.payload['key'] = key.toUpperCase();
        return error;
    }

    private static messageToKey(message: string = ''): string {
        return message
            .split(':')
            .shift()
            .replace(/[^\w]+/gm, '_');
    }

    static wrap(error: Error, statusCode?: number, message?: string, payload?: any): BiimError {
        // get args array
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 4) {
            args.pop();
        }
        return this.dataInPayload(BiimError.boomify(error, { statusCode, message }), payload);
    }


    static create(statusCode: number, message?: string, data?: any, payload?: any): BiimError {
        // get args array
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 4) {
            args.pop();
        }
        return this.dataInPayload(new BiimError(message, { statusCode, data }), payload);
    }


    static badRequest(message?: string, data?: any, payload?: any): BiimError {
        // get args array
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(BiimError.badRequest.apply(BiimError, args), payload);
    }


    static unauthorized(message?: string, scheme?: any, attributes?: any, payload?: any): BiimError {
        // get args array
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 4) {
            args.pop();
        }
        return this.dataInPayload(BiimError.unauthorized.apply(BiimError, args), payload);
    }


    static paymentRequired(message?: string, data?: any, payload?: any): BiimError {
        // get args array
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(BiimError['paymentRequired'].apply(BiimError, args), payload);
    }

    static forbidden(message?: string, data?: any, payload?: any): BiimError {
        // get args array
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(BiimError.forbidden.apply(BiimError, args), payload);
    }


    static notFound(message?: string, data?: any, payload?: any): BiimError {
        // get args array
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(BiimError.notFound.apply(BiimError, args), payload);
    }


    static methodNotAllowed(message?: string, data?: any, allow?: string | string[], payload?: any): BiimError {
        // get args array
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 4) {
            args.pop();
        }
        return this.dataInPayload(BiimError.methodNotAllowed.apply(BiimError, args), payload);
    }


    static notAcceptable(message?: string, data?: any, payload?: any): BiimError {
        // get args array
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(BiimError.notAcceptable.apply(BiimError, args), payload);
    }


    static proxyAuthRequired(message?: string, data?: any, payload?: any): BiimError {
        // get args array
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(BiimError.proxyAuthRequired.apply(BiimError, args), payload);
    }


    static clientTimeout(message?: string, data?: any, payload?: any): BiimError {
        // get args array
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(BiimError.clientTimeout.apply(BiimError, args), payload);
    }


    static conflict(message?: string, data?: any, payload?: any): BiimError {
        // get args array
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(BiimError.conflict.apply(BiimError, args), payload);
    }


    static resourceGone(message?: string, data?: any, payload?: any): BiimError {
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(BiimError.resourceGone.apply(BiimError, args), payload);
    }


    static lengthRequired(message?: string, data?: any, payload?: any): BiimError {
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(BiimError.lengthRequired.apply(BiimError, args), payload);
    }


    static preconditionFailed(message?: string, data?: any, payload?: any): BiimError {
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(BiimError.preconditionFailed.apply(BiimError, args), payload);
    }


    static entityTooLarge(message?: string, data?: any, payload?: any): BiimError {
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(BiimError.entityTooLarge.apply(BiimError, args), payload);
    }


    static uriTooLong(message?: string, data?: any, payload?: any): BiimError {
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(BiimError.uriTooLong.apply(BiimError, args), payload);
    }


    static unsupportedMediaType(message?: string, data?: any, payload?: any): BiimError {
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(BiimError.unsupportedMediaType.apply(BiimError, args), payload);
    }


    static rangeNotSatisfiable(message?: string, data?: any, payload?: any): BiimError {
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(BiimError.rangeNotSatisfiable.apply(BiimError, args), payload);
    }


    static expectationFailed(message?: string, data?: any, payload?: any): BiimError {
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(BiimError.expectationFailed.apply(BiimError, args), payload);
    }


    static teapot(message?: string, data?: any, payload?: any): BiimError {
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(BiimError.teapot.apply(BiimError, args), payload);
    }


    static badData(message?: string, data?: any, payload?: any): BiimError {
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(BiimError.badData.apply(BiimError, args), payload);
    }


    static locked(message?: string, data?: any, payload?: any): BiimError {
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(BiimError.locked.apply(BiimError, args), payload);
    }


    static preconditionRequired(message?: string, data?: any, payload?: any): BiimError {
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(BiimError.preconditionRequired.apply(BiimError, args), payload);
    }


    static tooManyRequests(message?: string, data?: any, payload?: any): BiimError {
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(BiimError.tooManyRequests.apply(BiimError, args), payload);
    }


    static illegal(message?: string, data?: any, payload?: any): BiimError {
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(BiimError.illegal.apply(BiimError, args), payload);
    }


    static internal(message?: string, data?: any, statusCode?: number, payload?: any): BiimError {
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 4) {
            args.pop();
        }
        return this.dataInPayload(BiimError.internal.apply(BiimError, args), payload);
    }

    static notImplemented(message?: string, data?: any, payload?: any): BiimError {
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(BiimError.notImplemented.apply(BiimError, args), payload);
    }


    static badGateway(message?: string, data?: any, payload?: any): BiimError {
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(BiimError.badGateway.apply(BiimError, args), payload);
    }


    static serverUnavailable(message?: string, data?: any, payload?: any): BiimError {
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(BiimError.serverUnavailable.apply(BiimError, args), payload);
    }


    static gatewayTimeout(message?: string, data?: any, payload?: any): BiimError {
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(BiimError.gatewayTimeout.apply(BiimError, args), payload);
    }


    static badImplementation(message?: string, data?: any, payload?: any): BiimError {
        const args = [...arguments];
        // delete payload if exists
        if (args.length === 3) {
            args.pop();
        }
        return this.dataInPayload(BiimError.badImplementation.apply(BiimError, args), payload);
    }
}
