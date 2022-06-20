"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signup = void 0;
const nexus_1 = require("nexus");
const Resolver_1 = require("./Resolver");
exports.signup = (0, nexus_1.extendType)({
    type: 'Mutation',
    definition(t) {
        t.nonNull.field('Signup', {
            type: 'AuthPayload',
            args: {
                email: (0, nexus_1.nonNull)((0, nexus_1.stringArg)()),
                password: (0, nexus_1.nonNull)((0, nexus_1.stringArg)()),
                names: (0, nexus_1.nonNull)((0, nexus_1.stringArg)()),
            },
            resolve: Resolver_1.SignupResolver,
        });
        t.nonNull.field('login', {
            type: 'AuthPayload',
            args: {
                email: (0, nexus_1.nonNull)((0, nexus_1.stringArg)()),
                password: (0, nexus_1.nonNull)((0, nexus_1.stringArg)()),
            },
            resolve: Resolver_1.login,
        });
    },
});
//# sourceMappingURL=Mutation.js.map