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
            'methodNotAllowed',
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
            'internal',
            'notImplemented',
            'badGateway',
            'serverUnavailable',
            'gatewayTimeout',
            'badImplementation'
        ];

        methods.forEach(_ => unit
            .object(Biim[_]('test', null, 123).output.payload)
            .hasProperty('data', 123)
        );

        unit
            .object(Biim.wrap(new Error('test')))
            .isInstanceOf(Error);

        unit
            .object(Biim.create(400, 'test', 'abc').output.payload)
            .hasProperty('data', 'abc');

        unit
            .object(Biim.unauthorized())
            .isInstanceOf(Error);
    }
}
