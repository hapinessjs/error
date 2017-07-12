import { test, suite } from 'mocha-typescript';
import * as unit from 'unit.js';
import { HapinessError } from '../../src';

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
            .object(HapinessError[_]('test', 123).output.payload)
            .hasProperty('data', 123)
        );

        unit
            .object(HapinessError.wrap(new Error('test')))
            .isInstanceOf(Error);

        unit
            .object(HapinessError.create(400, 'test', 'abc').output.payload)
            .hasProperty('data', 'abc');

        unit
            .object(HapinessError.unauthorized())
            .isInstanceOf(Error);
    }
}
