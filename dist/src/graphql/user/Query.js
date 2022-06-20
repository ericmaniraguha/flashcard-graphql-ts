"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const nexus_1 = require("nexus");
const resolver_1 = require("./resolver");
exports.getUsers = (0, nexus_1.extendType)({
    type: 'Query',
    definition(t) {
        t.nonNull.list.nonNull.field('getUsers', {
            type: 'user',
            resolve: resolver_1.getAllUser,
        });
        t.nonNull.field('getOneUser', {
            type: 'user',
            args: {
                email: (0, nexus_1.nonNull)((0, nexus_1.stringArg)()),
            },
            resolve: resolver_1.getOneUser,
        });
    },
});
//# sourceMappingURL=Query.js.map