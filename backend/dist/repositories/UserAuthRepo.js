"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuthRepo = void 0;
class UserAuthRepoDefault {
    constructor() {
        this.data = [];
    }
    findByCredentials(credentials) {
        return this.data.find((item) => item.username === credentials.username &&
            item.password === credentials.password);
    }
}
exports.UserAuthRepo = new UserAuthRepoDefault();
//# sourceMappingURL=UserAuthRepo.js.map