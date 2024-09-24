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
        
        if (config.config['beer_asahi_sold_by_trader']) {
             assortCreator.createSingleAssortItem("66ccf66fc9162d12270bb160")
                                     .addUnlimitedStackCount()
                                     .addBuyRestriction(config.config['beer_asahi_stock'])
                                     .addMoneyCost(Money.ROUBLES, config.config['beer_asahi_trader_price'])
                                     .addLoyaltyLevel(config.config['beer_asahi_loyalty_level'])
                                     .export(tables.traders[traderId]);
        }
     }
}