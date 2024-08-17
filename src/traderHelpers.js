"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TraderHelper = void 0;
const Money_1 = require("C:/snapshot/project/obj/models/enums/Money");
const jsonc_1 = require("C:/snapshot/project/node_modules/jsonc");
const path_1 = __importDefault(require("path"));
class TraderHelper {
    /**
    * Add basic items to trader
    * @param tables SPT db
    * @param traderId Traders id (basejson/_id value)
    */
    addSingleItemsToTrader(tables, traderId, assortCreator, container, logger) {
        const vfs = container.resolve("VFS");
        const config = jsonc_1.jsonc.parse(vfs.readFile(path_1.default.resolve(__dirname, "../config/config.jsonc")));
        assortCreator.createSingleAssortItem("a_monster_energy")
            .addStackCount(999)
            .addMoneyCost(Money_1.Money.ROUBLES, 10000)
            .addLoyaltyLevel(1)
            .export(tables.traders[traderId]);
        assortCreator.createSingleAssortItem("b_monster_energy_blue")
            .addStackCount(999)
            .addMoneyCost(Money_1.Money.ROUBLES, 10000)
            .addLoyaltyLevel(1)
            .export(tables.traders[traderId]);
        assortCreator.createSingleAssortItem("c_monster_energy_white")
            .addStackCount(999)
            .addMoneyCost(Money_1.Money.ROUBLES, 10000)
            .addLoyaltyLevel(1)
            .export(tables.traders[traderId]);
        assortCreator.createSingleAssortItem("d_monster_energy_strawberry")
            .addStackCount(999)
            .addMoneyCost(Money_1.Money.ROUBLES, 10000)
            .addLoyaltyLevel(1)
            .export(tables.traders[traderId]);
        assortCreator.createSingleAssortItem("e_monster_energy_doctor")
            .addStackCount(999)
            .addMoneyCost(Money_1.Money.ROUBLES, 10000)
            .addLoyaltyLevel(1)
            .export(tables.traders[traderId]);
        assortCreator.createSingleAssortItem("f_monster_energy_punch")
            .addStackCount(999)
            .addMoneyCost(Money_1.Money.ROUBLES, 10000)
            .addLoyaltyLevel(1)
            .export(tables.traders[traderId]);
        assortCreator.createSingleAssortItem("g_monster_energy_lemonade")
            .addStackCount(999)
            .addMoneyCost(Money_1.Money.ROUBLES, 10000)
            .addLoyaltyLevel(1)
            .export(tables.traders[traderId]);
        assortCreator.createSingleAssortItem("h_nos_energy")
            .addStackCount(999)
            .addMoneyCost(Money_1.Money.ROUBLES, 10000)
            .addLoyaltyLevel(1)
            .export(tables.traders[traderId]);
        assortCreator.createSingleAssortItem("i_bang_energy")
            .addStackCount(999)
            .addMoneyCost(Money_1.Money.ROUBLES, 10000)
            .addLoyaltyLevel(1)
            .export(tables.traders[traderId]);
        assortCreator.createSingleAssortItem("j_ghost_energy")
            .addStackCount(999)
            .addMoneyCost(Money_1.Money.ROUBLES, 10000)
            .addLoyaltyLevel(1)
            .export(tables.traders[traderId]);
    }
}
exports.TraderHelper = TraderHelper;
//# sourceMappingURL=traderHelpers.js.map