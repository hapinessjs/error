import { test, suite } from 'mocha-typescript';
import * as unit from 'unit.js';
import { Biim } from '../../src';

@suite
class ErrorTest {

    @test('test if data is in payload')
    testError() {
        const methods = [
            'badRequest',
            'paymentRequired',
            'forbidden',
            'notFound',
            'notAcceptable',
            'proxyAuthRequired',
            'clientTimeout',
            'conflict',
            'resourceGone',
            'lengthRequired',
            'preconditionFailed',
            'entityTooLarge',
            'uriTooLong',
            'unsupportedMediaType',
            'rangeNotSatisfiable',
            'expectationFailed',
            'teapot',
            'badData',
            'locked',
            'preconditionRequired',
            'tooManyRequests',
            'illegal',
            'notImplemented',
            'badGateway',
            'serverUnavailable',
            'gatewayTimeout',
            'badImplementation'
        ];

        methods.forEach(_ => unit
            .object(Biim[_]('test', null, { key: 123 }).output.payload)
            .hasProperty('key', 123)
        );

        const methods2 = [ 'methodNotAllowed', 'internal' ];
        methods2.forEach(_ => unit
            .object(Biim[_]('test', null, null, { key: 123 }).output.payload)
            .hasProperty('key', 123)
        );

        unit
            .object(Biim.wrap(new Error('test'), null, null, { key: 'abc' }).output.payload)
            .hasProperty('key', 'abc');

        unit
            .object(Biim.create(400, 'test', null, { key: 'abc' }).output.payload)
            .hasProperty('key', 'abc');

        unit
            .object(Biim.unauthorized('test', null, null, { key: 'abc' }).output.payload)
            .hasProperty('key', 'abc');
    }

    @test('test without payload')
    testErrorArgs() {
        const methods = [
            'badRequest',
            'paymentRequired',
            'forbidden',
            'notFound',
            'notAcceptable',
            'proxyAuthRequired',
            'clientTimeout',
            'conflict',
            'resourceGone',
            'lengthRequired',
            'preconditionFailed',
            'entityTooLarge',
            'uriTooLong',
            'unsupportedMediaType',
            'rangeNotSatisfiable',
            'expectationFailed',
            'teapot',
            'badData',
            'locked',
            'preconditionRequired',
            'tooManyRequests',
            'illegal',
            'notImplemented',
            'badGateway',
            'serverUnavailable',
            'gatewayTimeout',
            'badImplementation',
            'methodNotAllowed',
            'internal'
        ];

        methods.forEach(_ => unit
            .object(Biim[_]('test'))
            .isInstanceOf(Error)
        );

        unit
            .object(Biim.wrap(new Error('test')))
            .isInstanceOf(Error);

        unit
            .object(Biim.create(400, 'test'))
            .isInstanceOf(Error);

        unit
            .object(Biim.unauthorized())
            .isInstanceOf(Error);
    }
}
