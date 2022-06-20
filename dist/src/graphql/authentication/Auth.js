"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthPayload = void 0;
const nexus_1 = require("nexus");
exports.AuthPayload = (0, nexus_1.objectType)({
    name: 'AuthPayload',
    definition(t) {
        t.nonNull.string('token');
        t.nonNull.field('user', {
            type: 'user',
        });
    },
});
//# sourceMappingURL=Auth.js.map