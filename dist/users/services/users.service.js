"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_dao_1 = __importDefault(require("../daos/users.dao"));
class UsersService {
    static getInstance() {
        if (!UsersService.instance) {
            UsersService.instance = new UsersService();
        }
        return UsersService.instance;
    }
    list(limit, page) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield users_dao_1.default.getUsers();
        });
    }
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield users_dao_1.default.addUser(resource);
        });
    }
    updateById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield users_dao_1.default.putUserById(resourceId);
        });
    }
    readById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield users_dao_1.default.getUserById(resourceId);
        });
    }
    deleteById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield users_dao_1.default.removeUserById(resourceId);
        });
    }
    patchById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield users_dao_1.default.patchUserById(resourceId);
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return users_dao_1.default.getUserByEmail(email);
        });
    }
}
exports.default = UsersService.getInstance();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VzZXJzL3NlcnZpY2VzL3VzZXJzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrRUFBd0M7QUFJeEMsTUFBTSxZQUFZO0lBR2hCLE1BQU0sQ0FBQyxXQUFXO1FBQ2hCLElBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFDO1lBQ3hCLFlBQVksQ0FBQyxRQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztTQUM1QztRQUNELE9BQU8sWUFBWSxDQUFDLFFBQVEsQ0FBQztJQUMvQixDQUFDO0lBRUssSUFBSSxDQUFDLEtBQWEsRUFBRSxJQUFZOztZQUNwQyxPQUFPLE1BQU0sbUJBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNuQyxDQUFDO0tBQUE7SUFFSyxNQUFNLENBQUMsUUFBaUI7O1lBQzVCLE9BQU8sTUFBTSxtQkFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUN6QyxDQUFDO0tBQUE7SUFFSSxVQUFVLENBQUMsVUFBbUI7O1lBQ25DLE9BQU8sTUFBTSxtQkFBUSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvQyxDQUFDO0tBQUE7SUFFTSxRQUFRLENBQUMsVUFBa0I7O1lBQy9CLE9BQU8sTUFBTSxtQkFBUSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUMvQyxDQUFDO0tBQUE7SUFFSyxVQUFVLENBQUUsVUFBa0I7O1lBQ2xDLE9BQU8sTUFBTSxtQkFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuRCxDQUFDO0tBQUE7SUFFSyxTQUFTLENBQUMsVUFBbUI7O1lBQ2pDLE9BQU8sTUFBTSxtQkFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsRCxDQUFDO0tBQUE7SUFFSyxjQUFjLENBQUMsS0FBYTs7WUFDaEMsT0FBTyxtQkFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQyxDQUFDO0tBQUE7Q0FFQTtBQUVELGtCQUFlLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyJ9