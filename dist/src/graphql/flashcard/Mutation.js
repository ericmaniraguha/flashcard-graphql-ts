"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCard = void 0;
const nexus_1 = require("nexus");
const Resolver_1 = require("./Resolver");
exports.createCard = (0, nexus_1.extendType)({
    type: 'Mutation',
    definition(t) {
        t.nonNull.field('createNewCard', {
            type: 'card',
            args: {
                question: (0, nexus_1.nonNull)((0, nexus_1.stringArg)()),
                answer: (0, nexus_1.nonNull)((0, nexus_1.stringArg)()),
            },
            resolve: Resolver_1.createNewCard,
        });
        t.nonNull.field('updateCard', {
            type: 'card',
            args: {
                id: (0, nexus_1.nonNull)((0, nexus_1.intArg)()),
                question: (0, nexus_1.nonNull)((0, nexus_1.stringArg)()),
                answer: (0, nexus_1.nonNull)((0, nexus_1.stringArg)()),
            },
            resolve: Resolver_1.updateCard,
        });
        t.nonNull.field('deleteCard', {
            type: 'String',
            args: {
                id: (0, nexus_1.nonNull)((0, nexus_1.intArg)()),
            },
            resolve: Resolver_1.deleteCard,
        });
    },
});
//# sourceMappingURL=Mutation.js.map