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
        return this.dataInPayload(Boom.wrap.apply(Boom, arguments), payload);
    }


    static create(statusCode: number, message?: string, data?: any, payload?: any): BiimError {
        return this.dataInPayload(Boom.create.apply(Boom, arguments), payload);
    }


    static badRequest(message?: string, data?: any, payload?: any): BiimError {
        return this.dataInPayload(Boom.badRequest.apply(Boom, arguments), payload);
    }


    static unauthorized(message?: string, scheme?: any, attributes?: any, payload?: any): BiimError {
        return this.dataInPayload(Boom.unauthorized.apply(Boom, arguments), payload);
    }


    static paymentRequired(message?: string, data?: any, payload?: any): BiimError {
        return this.dataInPayload(Boom['paymentRequired'].apply(Boom, arguments), payload);
    }


    static forbidden(message?: string, data?: any, payload?: any): BiimError {
        return this.dataInPayload(Boom.forbidden.apply(Boom, arguments), payload);
    }


    static notFound(message?: string, data?: any, payload?: any): BiimError {
        return this.dataInPayload(Boom.notFound.apply(Boom, arguments), payload);
    }


    static methodNotAllowed(message?: string, data?: any, allow?: string | string[], payload?: any): BiimError {
        return this.dataInPayload(Boom.methodNotAllowed.apply(Boom, arguments), payload);
    }


    static notAcceptable(message?: string, data?: any, payload?: any): BiimError {
        return this.dataInPayload(Boom.notAcceptable.apply(Boom, arguments), payload);
    }


    static proxyAuthRequired(message?: string, data?: any, payload?: any): BiimError {
        return this.dataInPayload(Boom.proxyAuthRequired.apply(Boom, arguments), payload);
    }


    static clientTimeout(message?: string, data?: any, payload?: any): BiimError {
        return this.dataInPayload(Boom.clientTimeout.apply(Boom, arguments), payload);
    }


    static conflict(message?: string, data?: any, payload?: any): BiimError {
        return this.dataInPayload(Boom.conflict.apply(Boom, arguments), payload);
    }


    static resourceGone(message?: string, data?: any, payload?: any): BiimError {
        return this.dataInPayload(Boom.resourceGone.apply(Boom, arguments), payload);
    }


    static lengthRequired(message?: string, data?: any, payload?: any): BiimError {
        return this.dataInPayload(Boom.lengthRequired.apply(Boom, arguments), payload);
    }


    static preconditionFailed(message?: string, data?: any, payload?: any): BiimError {
        return this.dataInPayload(Boom.preconditionFailed.apply(Boom, arguments), payload);
    }


    static entityTooLarge(message?: string, data?: any, payload?: any): BiimError {
        return this.dataInPayload(Boom.entityTooLarge.apply(Boom, arguments), payload);
    }


    static uriTooLong(message?: string, data?: any, payload?: any): BiimError {
        return this.dataInPayload(Boom.uriTooLong.apply(Boom, arguments), payload);
    }


    static unsupportedMediaType(message?: string, data?: any, payload?: any): BiimError {
        return this.dataInPayload(Boom.unsupportedMediaType.apply(Boom, arguments), payload);
    }


    static rangeNotSatisfiable(message?: string, data?: any, payload?: any): BiimError {
        return this.dataInPayload(Boom.rangeNotSatisfiable.apply(Boom, arguments), payload);
    }


    static expectationFailed(message?: string, data?: any, payload?: any): BiimError {
        return this.dataInPayload(Boom.expectationFailed.apply(Boom, arguments), payload);
    }


    static teapot(message?: string, data?: any, payload?: any): BiimError {
        return this.dataInPayload(Boom.teapot.apply(Boom, arguments), payload);
    }


    static badData(message?: string, data?: any, payload?: any): BiimError {
        return this.dataInPayload(Boom.badData.apply(Boom, arguments), payload);
    }


    static locked(message?: string, data?: any, payload?: any): BiimError {
        return this.dataInPayload(Boom.locked.apply(Boom, arguments), payload);
    }


    static preconditionRequired(message?: string, data?: any, payload?: any): BiimError {
        return this.dataInPayload(Boom.preconditionRequired.apply(Boom, arguments), payload);
    }


    static tooManyRequests(message?: string, data?: any, payload?: any): BiimError {
        return this.dataInPayload(Boom.tooManyRequests.apply(Boom, arguments), payload);
    }


    static illegal(message?: string, data?: any, payload?: any): BiimError {
        return this.dataInPayload(Boom.illegal.apply(Boom, arguments), payload);
    }


    static internal(message?: string, data?: any, statusCode?: number, payload?: any): BiimError {
        return this.dataInPayload(Boom.internal.apply(Boom, arguments), payload);
    }

    static notImplemented(message?: string, data?: any, payload?: any): BiimError {
        return this.dataInPayload(Boom.notImplemented.apply(Boom, arguments), payload);
    }


    static badGateway(message?: string, data?: any, payload?: any): BiimError {
        return this.dataInPayload(Boom.badGateway.apply(Boom, arguments), payload);
    }


    static serverUnavailable(message?: string, data?: any, payload?: any): BiimError {
        return this.dataInPayload(Boom.serverUnavailable.apply(Boom, arguments), payload);
    }


    static gatewayTimeout(message?: string, data?: any, payload?: any): BiimError {
        return this.dataInPayload(Boom.gatewayTimeout.apply(Boom, arguments), payload);
    }


    static badImplementation(message?: string, data?: any, payload?: any): BiimError {
        return this.dataInPayload(Boom.badImplementation.apply(Boom, arguments), payload);
    }
}
