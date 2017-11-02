import { test, suite } from 'mocha-typescript';
import * as unit from 'unit.js';
import { Biim } from '../../src';
import * as Joi from 'joi';
import { Hapiness, HapinessModule, OnStart, HttpServerExt, Route, HttpServerService } from '@hapiness/core';
import { BiimModule } from '../../src/biim.module';

@suite
class IntegrationTest {

    @test('test reformat lifecycle')
    testError(done) {

        @Route({
            path: '/',
            method: 'POST',
            config: {
                validate: {
                    payload: {
                        id: Joi.any().required()
                    }
                }
            }
        })
        class MyRoute {}

        @HapinessModule({
            imports: [ BiimModule ],
            declarations: [ MyRoute ],
            providers: [ HttpServerService ],
            version: 'x.x.x'
        })
        class ModuleTest implements OnStart {

            constructor(private server: HttpServerService) {}

            onStart(): void {
                this.server.instance().inject(<any>{
                    url: '/',
                    method: 'POST'
                }, res => {
                    unit
                        .string(res.result['key'])
                        .is('E_BAD_REQUEST');
                    done();
                })
            }
        }

        Hapiness.bootstrap(ModuleTest, [ HttpServerExt.setConfig(<any>{ port: 4444 }) ])
            .catch(_ => done(_))
    }
}
