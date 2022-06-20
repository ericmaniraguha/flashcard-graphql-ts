"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.card = void 0;
const nexus_1 = require("nexus");
// Criminal Law Flashcards
exports.card = (0, nexus_1.objectType)({
    name: 'card',
    definition(t) {
        t.nonNull.int('id'),
            t.nonNull.string('question'),
            t.nonNull.string('answer');
    },
});
//# sourceMappingURL=Flashcard.js.map