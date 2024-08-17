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
        
        assortCreator.createSingleAssortItem("a_monster_energy")
                                .addStackCount(999)
                                .addMoneyCost(Money.ROUBLES, 10000)
                                .addLoyaltyLevel(1)
                                .export(tables.traders[traderId]);
        assortCreator.createSingleAssortItem("b_monster_energy_blue")
                                .addStackCount(999)
                                .addMoneyCost(Money.ROUBLES, 10000)
                                .addLoyaltyLevel(1)
                                .export(tables.traders[traderId]);
        assortCreator.createSingleAssortItem("c_monster_energy_white")
                                .addStackCount(999)
                                .addMoneyCost(Money.ROUBLES, 10000)
                                .addLoyaltyLevel(1)
                                .export(tables.traders[traderId]);
        assortCreator.createSingleAssortItem("d_monster_energy_strawberry")
                                .addStackCount(999)
                                .addMoneyCost(Money.ROUBLES, 10000)
                                .addLoyaltyLevel(1)
                                .export(tables.traders[traderId]);
        assortCreator.createSingleAssortItem("e_monster_energy_doctor")
                                .addStackCount(999)
                                .addMoneyCost(Money.ROUBLES, 10000)
                                .addLoyaltyLevel(1)
                                .export(tables.traders[traderId]);
        assortCreator.createSingleAssortItem("f_monster_energy_punch")
                                .addStackCount(999)
                                .addMoneyCost(Money.ROUBLES, 10000)
                                .addLoyaltyLevel(1)
                                .export(tables.traders[traderId]);
        assortCreator.createSingleAssortItem("g_monster_energy_lemonade")
                                .addStackCount(999)
                                .addMoneyCost(Money.ROUBLES, 10000)
                                .addLoyaltyLevel(1)
                                .export(tables.traders[traderId]);
        assortCreator.createSingleAssortItem("h_nos_energy")
                                .addStackCount(999)
                                .addMoneyCost(Money.ROUBLES, 10000)
                                .addLoyaltyLevel(1)
                                .export(tables.traders[traderId]);
        assortCreator.createSingleAssortItem("i_bang_energy")
                                .addStackCount(999)
                                .addMoneyCost(Money.ROUBLES, 10000)
                                .addLoyaltyLevel(1)
                                .export(tables.traders[traderId]);
        assortCreator.createSingleAssortItem("j_ghost_energy")
                                .addStackCount(999)
                                .addMoneyCost(Money.ROUBLES, 10000)
                                .addLoyaltyLevel(1)
                                .export(tables.traders[traderId]);
     }
}