"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const traderHelpers_1 = require("./traderHelpers");
const itemCreateHelper_1 = require("./itemCreateHelper");
const fluentTraderAssortCreator_1 = require("./fluentTraderAssortCreator");
const jsonc_1 = require("C:/snapshot/project/node_modules/jsonc");
const path_1 = __importDefault(require("path"));
class SampleTrader {
    mod;
    logger;
    traderHelper;
    fluentAssortCreator;
    hashUtil;
    config;
    constructor() {
        this.mod = "Hood-Energy-Drinks";
    }
    /**
     * Some work needs to be done prior to SPT code being loaded, registering the profile image + setting trader update time inside the trader config json
     * @param container Dependency container
     */
    preSptLoad(container) {
        // Get a logger
        this.logger = container.resolve("WinstonLogger");
        this.logger.debug(`[${this.mod}] preAki Loading... `);
        // Get SPT code/data we need later
        const hashUtil = container.resolve("HashUtil");
        const vfs = container.resolve("VFS");
        // Create helper class and use it to register our traders image/icon + set its stock refresh time
        this.config = jsonc_1.jsonc.parse(vfs.readFile(path_1.default.resolve(__dirname, "../config/config.jsonc")));
        this.hashUtil = hashUtil;
        this.traderHelper = new traderHelpers_1.TraderHelper();
        this.fluentAssortCreator = new fluentTraderAssortCreator_1.FluentAssortConstructor(hashUtil, this.logger);
    }
    /**
     * Majority of trader-related work occurs after the aki database has been loaded but prior to SPT code being run
     * @param container Dependency container
     */
    postDBLoad(container) {
        this.logger.debug(`[${this.mod}] postDb Loading... `);
        // Resolve SPT classes we'll use
        const databaseServer = container.resolve("DatabaseServer");
        //const configServer: ConfigServer = container.resolve<ConfigServer>("ConfigServer");
        const jsonUtil = container.resolve("JsonUtil");
        // Creates and stores new gambling items in database
        const itemCreate = new itemCreateHelper_1.ItemCreateHelper();
        itemCreate.createItems(container);
        // Get a reference to the database tables
        const tables = databaseServer.getTables();
        // Add energy drinks to therapist
        this.traderHelper.addSingleItemsToTrader(tables, '54cb57776803fa99248b456e', this.fluentAssortCreator, container, this.logger);
        const maps = [
            "bigmap", // customs
            "factory4_day",
            "factory4_night",
            "woods",
            "rezervbase",
            "shoreline",
            "interchange",
            "tarkovstreets",
            "lighthouse",
            "laboratory",
            "sandbox", // groundzero
            "sandbox_high"
        ];
        for (const item of itemCreate.loot) {
            const lootComposedKey = item.newId + '_composedkey';
            for (const map of maps) {
                for (const [name, temp] of Object.entries(tables.locations)) {
                    const mapdata = temp;
                    if (name == map) {
                        for (const point of mapdata.looseLoot.spawnpoints) {
                            for (const itm of point.template.Items) {
                                if (itm._tpl == "5d40407c86f774318526545a") { // Vodka
                                    const originalItemID = itm._id;
                                    for (const dist of point.itemDistribution) {
                                        if (dist.composedKey.key == originalItemID) {
                                            point.template.Items.push({
                                                _id: lootComposedKey,
                                                _tpl: item.newId,
                                            });
                                        }
                                    }
                                    point.itemDistribution.push({
                                        composedKey: {
                                            key: lootComposedKey,
                                        },
                                        relativeProbability: 9999999999
                                    });
                                }
                            }
                        }
                    }
                }
            }
        }
        //console.log(tables.locations["bigmap"].staticLoot["578f87a3245977356274f2cb"].itemDistribution) // Drawer
        // Currently this adds poker chips to many static loot containers on all maps
        for (const item of itemCreate.loot) {
            for (const map of maps) {
                const mapStaticLoot = tables.locations[map].staticLoot;
                const staticLootProbabilities = item.addToStaticLoot;
                for (const [lootContainer, probability] of Object.entries(staticLootProbabilities)) {
                    try {
                        mapStaticLoot[lootContainer].itemDistribution.push({
                            "tpl": item.newId,
                            "relativeProbability": 99999999
                        });
                    }
                    catch (e) {
                        this.logger.debug("Could not add " + item.newId + " to container " + lootContainer + " on map " + map);
                    }
                }
            }
        }
        this.logger.debug(`[${this.mod}] postDb Loaded`);
    }
}
module.exports = { mod: new SampleTrader() };
//# sourceMappingURL=mod.js.map