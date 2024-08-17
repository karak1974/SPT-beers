import { DependencyContainer } from "tsyringe";
import { IDatabaseTables } from "@spt/models/spt/server/IDatabaseTables";
import { ILogger } from "@spt/models/spt/utils/ILogger";
import { FluentAssortConstructor as FluentAssortCreator } from "./fluentTraderAssortCreator";
import { Money } from "@spt/models/enums/Money";
import { VFS } from "@spt/utils/VFS";
import { jsonc } from "jsonc";
import path from "path";


export class TraderHelper
{
     /**
     * Add basic items to trader
     * @param tables SPT db
     * @param traderId Traders id (basejson/_id value)
     */
     public addSingleItemsToTrader(tables: IDatabaseTables, traderId: string, assortCreator: FluentAssortCreator, container: DependencyContainer, logger: ILogger) : void {
        const vfs = container.resolve<VFS>("VFS")
        const config = jsonc.parse(vfs.readFile(path.resolve(__dirname, "../config/config.jsonc")))
        
        if (config.config['monster_green_sold_by_trader']) {
             assortCreator.createSingleAssortItem("a_monster_energy")
                                     .addUnlimitedStackCount()
                                     .addBuyRestriction(config.config['monster_green_stock'])
                                     .addMoneyCost(Money.ROUBLES, config.config['monster_green_price'])
                                     .addLoyaltyLevel(config.config['monster_green_loyalty_level'])
                                     .export(tables.traders[traderId]);
        }
        if (config.config['monster_blue_sold_by_trader']) {
             assortCreator.createSingleAssortItem("b_monster_energy_blue")
                                     .addUnlimitedStackCount()
                                     .addBuyRestriction(config.config['monster_blue_stock'])
                                     .addMoneyCost(Money.ROUBLES, config.config['monster_blue_price'])
                                     .addLoyaltyLevel(config.config['monster_blue_loyalty_level'])
                                     .export(tables.traders[traderId]);
        }
        if (config.config['monster_white_sold_by_trader']) {
             assortCreator.createSingleAssortItem("c_monster_energy_white")
                                     .addUnlimitedStackCount()
                                     .addBuyRestriction(config.config['monster_white_stock'])
                                     .addMoneyCost(Money.ROUBLES, config.config['monster_white_price'])
                                     .addLoyaltyLevel(config.config['monster_white_loyalty_level'])
                                     .export(tables.traders[traderId]);
        }
        if (config.config['monster_strawberry_sold_by_trader']) {
             assortCreator.createSingleAssortItem("d_monster_energy_strawberry")
                                     .addUnlimitedStackCount()
                                     .addBuyRestriction(config.config['monster_strawberry_stock'])
                                     .addMoneyCost(Money.ROUBLES, config.config['monster_strawberry_price'])
                                     .addLoyaltyLevel(config.config['monster_strawberry_loyalty_level'])
                                     .export(tables.traders[traderId]);
        }
        if (config.config['ghost_sold_by_trader']) {
             assortCreator.createSingleAssortItem("e_ghost_energy")
                                     .addUnlimitedStackCount()
                                     .addBuyRestriction(config.config['ghost_stock'])
                                     .addMoneyCost(Money.ROUBLES, config.config['ghost_price'])
                                     .addLoyaltyLevel(config.config['ghost_loyalty_level'])
                                     .export(tables.traders[traderId]);
        }
        if (config.config['nos_sold_by_trader']) {
             assortCreator.createSingleAssortItem("f_nos_energy")
                                     .addUnlimitedStackCount()
                                     .addBuyRestriction(config.config['nos_stock'])
                                     .addMoneyCost(Money.ROUBLES, config.config['nos_price'])
                                     .addLoyaltyLevel(config.config['nos_loyalty_level'])
                                     .export(tables.traders[traderId]);
        }
        if (config.config['monster_punch_sold_by_trader']) {
             assortCreator.createSingleAssortItem("g_monster_energy_punch")
                                     .addUnlimitedStackCount()
                                     .addBuyRestriction(config.config['monster_punch_stock'])
                                     .addMoneyCost(Money.ROUBLES, config.config['monster_punch_price'])
                                     .addLoyaltyLevel(config.config['monster_punch_loyalty_level'])
                                     .export(tables.traders[traderId]);
        }
        if (config.config['bang_sold_by_trader']) {
             assortCreator.createSingleAssortItem("h_bang_energy")
                                     .addUnlimitedStackCount()
                                     .addBuyRestriction(config.config['bang_stock'])
                                     .addMoneyCost(Money.ROUBLES, config.config['bang_price'])
                                     .addLoyaltyLevel(config.config['bang_loyalty_level'])
                                     .export(tables.traders[traderId]);
        }
        if (config.config['monster_doctor_sold_by_trader']) {
             assortCreator.createSingleAssortItem("i_monster_energy_doctor")
                                     .addUnlimitedStackCount()
                                     .addBuyRestriction(config.config['monster_doctor_stock'])
                                     .addMoneyCost(Money.ROUBLES, config.config['monster_doctor_price'])
                                     .addLoyaltyLevel(config.config['monster_doctor_loyalty_level'])
                                     .export(tables.traders[traderId]);\
        }
        if (config.config['monster_lemonade_sold_by_trader']) {
             assortCreator.createSingleAssortItem("j_monster_energy_lemonade")
                                     .addUnlimitedStackCount()
                                     .addBuyRestriction(config.config['monster_lemonade_stock'])
                                     .addMoneyCost(Money.ROUBLES, config.config['monster_lemonade_price'])
                                     .addLoyaltyLevel(config.config['monster_lemonade_loyalty_level'])
                                     .export(tables.traders[traderId]);
        }
     }
}