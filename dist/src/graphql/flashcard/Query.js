"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCards = void 0;
const nexus_1 = require("nexus");
const Resolver_1 = require("./Resolver");
exports.getCards = (0, nexus_1.extendType)({
    type: 'Query',
    definition(t) {
        t.nonNull.list.nonNull.field('getAllCards', {
            type: 'card',
            resolve: Resolver_1.getAllCards,
        });
        t.nonNull.field('getOneCard', {
            type: 'card',
            args: {
                id: (0, nexus_1.nonNull)((0, nexus_1.intArg)()),
            },
            resolve: Resolver_1.getOneCard,
        });
        t.nonNull.list.field('getCardOwners', {
            type: 'card',
            resolve: Resolver_1.getCardOwners,
        });
    },
});
//# sourceMappingURL=Query.js.map