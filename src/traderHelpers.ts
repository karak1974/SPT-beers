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
        
        assortCreator.createSingleAssortItem("aa_monster_energy")
                                .addStackCount(999)
                                .addMoneyCost(Money.ROUBLES, 10000)
                                .addLoyaltyLevel(1)
                                .export(tables.traders[traderId]);
        assortCreator.createSingleAssortItem("aa_monster_energy_blue")
                                .addStackCount(999)
                                .addMoneyCost(Money.ROUBLES, 10000)
                                .addLoyaltyLevel(1)
                                .export(tables.traders[traderId]);
        assortCreator.createSingleAssortItem("aa_monster_energy_white")
                                .addStackCount(999)
                                .addMoneyCost(Money.ROUBLES, 10000)
                                .addLoyaltyLevel(1)
                                .export(tables.traders[traderId]);
        assortCreator.createSingleAssortItem("aa_monster_energy_punch")
                                .addStackCount(999)
                                .addMoneyCost(Money.ROUBLES, 10000)
                                .addLoyaltyLevel(1)
                                .export(tables.traders[traderId]);
        assortCreator.createSingleAssortItem("aa_monster_energy_lemonade")
                                .addStackCount(999)
                                .addMoneyCost(Money.ROUBLES, 10000)
                                .addLoyaltyLevel(1)
                                .export(tables.traders[traderId]);
        assortCreator.createSingleAssortItem("aa_nos_energy")
                                .addStackCount(999)
                                .addMoneyCost(Money.ROUBLES, 10000)
                                .addLoyaltyLevel(1)
                                .export(tables.traders[traderId]);
        assortCreator.createSingleAssortItem("aa_bang_energy")
                                .addStackCount(999)
                                .addMoneyCost(Money.ROUBLES, 10000)
                                .addLoyaltyLevel(1)
                                .export(tables.traders[traderId]);
     }
}