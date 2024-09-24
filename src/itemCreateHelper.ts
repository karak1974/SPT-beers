import { DependencyContainer } from "tsyringe";
import { CustomItemService } from "@spt/services/mod/CustomItemService";
import { NewItemFromCloneDetails } from "@spt/models/spt/mod/NewItemDetails";
import { DatabaseServer } from "@spt/servers/DatabaseServer";
import { VFS } from "@spt/utils/VFS";
import { jsonc } from "jsonc";
import path from "path";
import { Buffs } from "./buffs";

export class ItemCreateHelper {

    public config: any;
    public loot: Array<NewItemFromCloneDetails> = [];

    // Create customs Items and store them in the database
    public createItems(container: DependencyContainer) {
        const db: DatabaseServer = container.resolve<DatabaseServer>("DatabaseServer");
        const vfs = container.resolve<VFS>("VFS");
        this.config = jsonc.parse(vfs.readFile(path.resolve(__dirname, "../config/config.jsonc"))).config;
        const customItem = container.resolve<CustomItemService>("CustomItemService");

        const buffs = new Buffs();
        let beer_asahi_buffs: Array<any> = this.config['beer_asahi_effect_toggle'] ? buffs.beer_asahi_buffs : [];

        // Add the custom buff to globals config
        db.tableData.globals.config.Health.Effects.Stimulator.Buffs["Buffs_drink_beer_asahi_energy"] = beer_asahi_buffs;

        const asahi_beer: NewItemFromCloneDetails = {
            itemTplToClone: "5d40407c86f774318526545a",
            overrideProperties: {
                Prefab: {
                    path: "assets/beer_asahi.bundle",
                    rcid: ""
                },
                UsePrefab: {
                    path: "assets/beer_asahi_container.bundle",
                    rcid: ""
                },
                foodUseTime: 5,
                StimulatorBuffs: "Buffs_drink_beer_asahi_energy",
                effects_health: {
                    Hydration: {
                        value: 30
                    },
                    Energy: {
                        value: 60
                    }
                },
                effects_damage: {
                    
                }
            },
            parentId: "5448e8d64bdc2dce718b4568",
            newId: "66ccf66fc9162d12270bb160", 
            fleaPriceRoubles: this.config['beer_asahi_flea_price'],
            handbookPriceRoubles: 40000,
            handbookParentId: "5b47574386f77428ca22b335",
            locales: {
                "en": {
                    name: "Asahi Super Dry beer",
                    shortName: "Asahi",
                    description: `Popular Japanese brand known for its crisp, dry-tasting Asahi Super Dry beer.`
                }
            },
            addToStaticLoot: {
                "578f87a3245977356274f2cb": this.config["beer_asahi_loot_duffle_bag_weight"],
                "5909e4b686f7747f5b744fa4": this.config["beer_asahi_loot_dead_scav_weight"],
                "578f8778245977358849a9b5": this.config["beer_asahi_loot_jacket_weight"],
                "5d6fd13186f77424ad2a8c69": this.config["beer_asahi_loot_ration_supply_crate_weight"],
                "5d6d2b5486f774785c2ba8ea": this.config["beer_asahi_loot_ground_cache_weight"],
            },
            looseLootSpawnWeight: this.config["beer_asahi_loose_loot_multiplier"]
        }

        this.loot.push(asahi_beer);

        customItem.createItemFromClone(asahi_beer);

    }
}