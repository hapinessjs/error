import * as Jest from 'jest';
import { Biim } from '../../src';

test('test if data is in payload', () => {
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

    methods.forEach(_ => {
        const obj = Biim[_]('test', null, { toto: 123 }).output.payload;
        expect(obj.toto).toBe(123);
        expect(obj.key).toBe('E_TEST');
    });

    const methods2 = [ 'methodNotAllowed' ];
    methods2.forEach(_ => {
        const obj = Biim[_]('test', null, null, { toto: 123 }).output.payload;
        expect(obj.toto).toBe(123);
        expect(obj.key).toBe('E_TEST');
    });

    expect(Biim.wrap(new Error('test'), null, null, { key: 'abc' }).output.payload['key']).toBe('E_ABC');
    expect(Biim.create(400, 'test', null, { key: 'abc' }).output.payload['key']).toBe('E_ABC');
    expect(Biim.unauthorized('test', null, null, { key: 'E_ABC' }).output.payload['key']).toBe('E_ABC');
})

test('test without payload', () => {
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

    methods.forEach(_ => {
        expect(Biim[_]('test')).toBeInstanceOf(Error);
    });

    expect(Biim.wrap(new Error('test'))).toBeInstanceOf(Error);
    expect(Biim.create(400, 'test')).toBeInstanceOf(Error);
    expect(Biim.unauthorized()).toBeInstanceOf(Error);
});

test('test message to key', () => {
    expect(Biim['messageToKey']()).toBe('');
});
