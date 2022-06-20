"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const nexus_1 = require("nexus");
const resolver_1 = require("./resolver");
exports.createUser = (0, nexus_1.extendType)({
    type: 'Mutation',
    definition(t) {
        t.nonNull.field('createNewUser', {
            type: 'user',
            args: {
                names: (0, nexus_1.nonNull)((0, nexus_1.stringArg)()),
                email: (0, nexus_1.nonNull)((0, nexus_1.stringArg)()),
                password: (0, nexus_1.nonNull)((0, nexus_1.stringArg)()),
            },
            resolve: resolver_1.createNewUser,
        });
    },
});
//# sourceMappingURL=Mutation.js.map