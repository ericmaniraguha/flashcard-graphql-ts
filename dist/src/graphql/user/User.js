"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const nexus_1 = require("nexus");
// import { userUniqueCard } from './resolver';
exports.user = (0, nexus_1.objectType)({
    name: 'user',
    definition(t) {
        t.nonNull.int('id'),
            t.nonNull.string('names'),
            t.nonNull.string('email'),
            t.nonNull.string('password'),
            t.nonNull.list.nonNull.field('cards', {
                type: 'card',
                resolve(parent, args, context) {
                    return context.prisma.user
                        .findUnique({ where: { id: parent.id } })
                        .flashcards();
                },
            });
    },
});
//# sourceMappingURL=User.js.map