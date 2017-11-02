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
            .object(Biim[_]('test', null, { toto: 123 }).output.payload)
            .hasProperty('toto', 123)
            .hasProperty('key', 'E_TEST')
        );

        const methods2 = [ 'methodNotAllowed', 'internal' ];
        methods2.forEach(_ => unit
            .object(Biim[_]('test', null, null, { toto: 123 }).output.payload)
            .hasProperty('toto', 123)
            .hasProperty('key', 'E_TEST')
        );

        unit
            .object(Biim.wrap(new Error('test'), null, null, { key: 'abc' }).output.payload)
            .hasProperty('key', 'E_ABC');

        unit
            .object(Biim.create(400, 'test', null, { key: 'abc' }).output.payload)
            .hasProperty('key', 'E_ABC');

        unit
            .object(Biim.unauthorized('test', null, null, { key: 'abc' }).output.payload)
            .hasProperty('key', 'E_ABC');
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
