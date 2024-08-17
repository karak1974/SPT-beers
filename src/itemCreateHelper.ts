import { DependencyContainer } from "tsyringe";
import { CustomItemService } from "@spt/services/mod/CustomItemService";
import { NewItemDetails } from "@spt/models/spt/mod/NewItemDetails";
import { NewItemFromCloneDetails } from "@spt/models/spt/mod/NewItemDetails";
import { DatabaseServer } from "@spt/servers/DatabaseServer";

import { VFS } from "@spt/utils/VFS";
import { jsonc } from "jsonc";
import path from "path";

export class ItemCreateHelper {

    public config: any;
    public loot: Array<NewItemFromCloneDetails> = [];

    // Create customs Items and store them in the database
    public createItems(container: DependencyContainer) {
        const db: DatabaseServer = container.resolve<DatabaseServer>("DatabaseServer");
        const vfs = container.resolve<VFS>("VFS");
        this.config = jsonc.parse(vfs.readFile(path.resolve(__dirname, "../config/config.jsonc")))

        // Resolve the CustomItemService container
        const customItem = container.resolve<CustomItemService>("CustomItemService");

        const green_monster_buffs = [
            {
                "AbsoluteValue": true,
                "BuffType": "SkillRate",
                "Chance": 1,
                "Delay": 0,
                "Duration": 240,
                "SkillName": "Endurance",
                "Value": 15
            },
            {
                "AbsoluteValue": true,
                "BuffType": "SkillRate",
                "Chance": 1,
                "Delay": 0,
                "Duration": 240,
                "SkillName": "Strength",
                "Value": 15
            },
            {
                "AbsoluteValue": true,
                "BuffType": "StaminaRate",
                "Chance": 1,
                "Delay": 0,
                "Duration": 240,
                "SkillName": "",
                "Value": 1
            },
            {
                "AbsoluteValue": true,
                "BuffType": "MaxStamina",
                "Chance": 1,
                "Delay": 0,
                "Duration": 240,
                "SkillName": "",
                "Value": 10
            },
            {
                "AbsoluteValue": true,
                "BuffType": "SkillRate",
                "Chance": 1,
                "Delay": 240,
                "Duration": 240,
                "SkillName": "Health",
                "Value": -10
            },
            {
                "AbsoluteValue": true,
                "BuffType": "EnergyRate",
                "Chance": 1,
                "Delay": 240,
                "Duration": 50,
                "SkillName": "",
                "Value": -1
            },
            {
                "AbsoluteValue": true,
                "BuffType": "HandsTremor",
                "Chance": 1,
                "Delay": 240,
                "Duration": 120,
                "SkillName": "",
                "Value": 0
            }
        ]

        const blue_monster_buffs = [
            {
                "AbsoluteValue": true,
                "BuffType": "SkillRate",
                "Chance": 1,
                "Delay": 0,
                "Duration": 240,
                "SkillName": "Perception",
                "Value": 15
            },
            {
                "AbsoluteValue": true,
                "BuffType": "SkillRate",
                "Chance": 1,
                "Delay": 0,
                "Duration": 240,
                "SkillName": "Attention",
                "Value": 15
            },
            {
                "AbsoluteValue": true,
                "BuffType": "SkillRate",
                "Chance": 1,
                "Delay": 0,
                "Duration": 240,
                "SkillName": "Search",
                "Value": 15
            },
            {
                "AbsoluteValue": true,
                "BuffType": "SkillRate",
                "Chance": 1,
                "Delay": 0,
                "Duration": 240,
                "SkillName": "Attention",
                "Value": 10
            },
            {
                "BuffType": "SkillRate",
                "Chance": 1,
                "Delay": 0,
                "Duration": 240,
                "AbsoluteValue": true,
                "SkillName": "StressResistance",
                "Value": 10,
            },
            {
                "AbsoluteValue": true,
                "BuffType": "SkillRate",
                "Chance": 1,
                "Delay": 0,
                "Duration": 240,
                "SkillName": "MagDrills",
                "Value": 10
            },
            {
                "AbsoluteValue": true,
                "BuffType": "SkillRate",
                "Chance": 1,
                "Delay": 240,
                "Duration": 240,
                "SkillName": "Health",
                "Value": -10
            },
            {
                "AbsoluteValue": true,
                "BuffType": "EnergyRate",
                "Chance": 1,
                "Delay": 240,
                "Duration": 50,
                "SkillName": "",
                "Value": -1
            },
            {
                "AbsoluteValue": true,
                "BuffType": "HandsTremor",
                "Chance": 1,
                "Delay": 240,
                "Duration": 120,
                "SkillName": "",
                "Value": 0
            }
        ]

        const white_monster_buffs = [
            {
                "AbsoluteValue": true,
                "BuffType": "SkillRate",
                "Chance": 1,
                "Delay": 0,
                "Duration": 240,
                "SkillName": "Endurance",
                "Value": 5
            },
            {
                "AbsoluteValue": true,
                "BuffType": "SkillRate",
                "Chance": 1,
                "Delay": 0,
                "Duration": 240,
                "SkillName": "Strength",
                "Value": 5
            },
            {
                "AbsoluteValue": true,
                "BuffType": "StaminaRate",
                "Chance": 1,
                "Delay": 0,
                "Duration": 240,
                "SkillName": "",
                "Value": 1
            },
            {
                "AbsoluteValue": true,
                "BuffType": "MaxStamina",
                "Chance": 1,
                "Delay": 0,
                "Duration": 240,
                "SkillName": "",
                "Value": 5
            },
            {
                "AbsoluteValue": true,
                "BuffType": "SkillRate",
                "Chance": 1,
                "Delay": 0,
                "Duration": 240,
                "SkillName": "Perception",
                "Value": 5
            },
            {
                "AbsoluteValue": true,
                "BuffType": "SkillRate",
                "Chance": 1,
                "Delay": 0,
                "Duration": 240,
                "SkillName": "Attention",
                "Value": 5
            },
            {
                "AbsoluteValue": true,
                "BuffType": "SkillRate",
                "Chance": 1,
                "Delay": 0,
                "Duration": 240,
                "SkillName": "Search",
                "Value": 5
            },
            {
                "AbsoluteValue": true,
                "BuffType": "SkillRate",
                "Chance": 1,
                "Delay": 240,
                "Duration": 240,
                "SkillName": "Health",
                "Value": -10
            },
            {
                "AbsoluteValue": true,
                "BuffType": "EnergyRate",
                "Chance": 1,
                "Delay": 240,
                "Duration": 50,
                "SkillName": "",
                "Value": -1
            },
            {
                "AbsoluteValue": true,
                "BuffType": "HandsTremor",
                "Chance": 1,
                "Delay": 240,
                "Duration": 120,
                "SkillName": "",
                "Value": 0
            }
        ]

        const strawberry_monster_buffs = [
            {
                "AbsoluteValue": true,
                "BuffType": "HealthRate",
                "Chance": 1,
                "Delay": 1,
                "Duration": 180,
                "SkillName": "",
                "Value": 0.5
              },
            {
                "AbsoluteValue": true,
                "BuffType": "SkillRate",
                "Chance": 1,
                "Delay": 0,
                "Duration": 240,
                "SkillName": "Vitality",
                "Value": 10
            },
            {
                "AbsoluteValue": true,
                "BuffType": "SkillRate",
                "Chance": 1,
                "Delay": 0,
                "Duration": 240,
                "SkillName": "Health",
                "Value": 10
            },
            {
                "AbsoluteValue": true,
                "BuffType": "SkillRate",
                "Chance": 1,
                "Delay": 0,
                "Duration": 240,
                "SkillName": "HeavyVests",
                "Value": 10
            },
            {
                "AbsoluteValue": true,
                "BuffType": "SkillRate",
                "Chance": 1,
                "Delay": 0,
                "Duration": 240,
                "SkillName": "LightVests",
                "Value": 10
            },
            {
                "AbsoluteValue": true,
                "BuffType": "SkillRate",
                "Chance": 1,
                "Delay": 240,
                "Duration": 240,
                "SkillName": "Health",
                "Value": -10
            },
            {
                "AbsoluteValue": true,
                "BuffType": "EnergyRate",
                "Chance": 1,
                "Delay": 240,
                "Duration": 50,
                "SkillName": "",
                "Value": -1
            },
            {
                "AbsoluteValue": true,
                "BuffType": "HandsTremor",
                "Chance": 1,
                "Delay": 240,
                "Duration": 120,
                "SkillName": "",
                "Value": 0
            }
        ]

        const ghost_energy_buffs = [
            {
                "AbsoluteValue": true,
                "BuffType": "SkillRate",
                "Chance": 1,
                "Delay": 0,
                "Duration": 240,
                "SkillName": "Endurance",
                "Value": 10
            },
            {
                "AbsoluteValue": true,
                "BuffType": "SkillRate",
                "Chance": 1,
                "Delay": 0,
                "Duration": 240,
                "SkillName": "Strength",
                "Value": 10
            },
            {
                "AbsoluteValue": true,
                "BuffType": "StaminaRate",
                "Chance": 1,
                "Delay": 0,
                "Duration": 240,
                "SkillName": "",
                "Value": 1
            },
            {
                "AbsoluteValue": true,
                "BuffType": "SkillRate",
                "Chance": 1,
                "Delay": 0,
                "Duration": 240,
                "SkillName": "CovertMovement",
                "Value": 10
            },
            {
                "AbsoluteValue": false,
                "BuffType": "WeightLimit",
                "Chance": 1,
                "Delay": 1,
                "Duration": 360,
                "SkillName": "",
                "Value": 0.1
              },
            {
                "AbsoluteValue": true,
                "BuffType": "SkillRate",
                "Chance": 1,
                "Delay": 240,
                "Duration": 240,
                "SkillName": "Health",
                "Value": -10
            },
            {
                "AbsoluteValue": true,
                "BuffType": "EnergyRate",
                "Chance": 1,
                "Delay": 240,
                "Duration": 50,
                "SkillName": "",
                "Value": -1
            },
            {
                "AbsoluteValue": true,
                "BuffType": "HandsTremor",
                "Chance": 1,
                "Delay": 240,
                "Duration": 120,
                "SkillName": "",
                "Value": 0
            }
        ]

        const nos_energy_buffs = [
            {
                "AbsoluteValue": true,
                "BuffType": "SkillRate",
                "Chance": 1,
                "Delay": 0,
                "Duration": 240,
                "SkillName": "Endurance",
                "Value": 20
            },
            {
                "AbsoluteValue": true,
                "BuffType": "SkillRate",
                "Chance": 1,
                "Delay": 0,
                "Duration": 240,
                "SkillName": "Strength",
                "Value": 20
            },
            {
                "AbsoluteValue": true,
                "BuffType": "StaminaRate",
                "Chance": 1,
                "Delay": 0,
                "Duration": 240,
                "SkillName": "",
                "Value": 1.5
            },
            {
                "AbsoluteValue": true,
                "BuffType": "MaxStamina",
                "Chance": 1,
                "Delay": 0,
                "Duration": 240,
                "SkillName": "",
                "Value": 20
            },
            {
                "AbsoluteValue": true,
                "BuffType": "SkillRate",
                "Chance": 1,
                "Delay": 240,
                "Duration": 240,
                "SkillName": "Health",
                "Value": -15
            },
            {
                "AbsoluteValue": true,
                "BuffType": "SkillRate",
                "Chance": 1,
                "Delay": 240,
                "Duration": 240,
                "SkillName": "Vitality",
                "Value": -15
            },
            {
                "AbsoluteValue": true,
                "BuffType": "EnergyRate",
                "Chance": 1,
                "Delay": 240,
                "Duration": 50,
                "SkillName": "",
                "Value": -1.2
            },
            {
                "AbsoluteValue": true,
                "BuffType": "HandsTremor",
                "Chance": 1,
                "Delay": 240,
                "Duration": 120,
                "SkillName": "",
                "Value": 0
            }
        ]

        const lemonade_monster_buffs = [
            {
                "AbsoluteValue": true,
                "BuffType": "SkillRate",
                "Chance": 1,
                "Delay": 0,
                "Duration": 360,
                "SkillName": "Endurance",
                "Value": 25
            },
            {
                "AbsoluteValue": true,
                "BuffType": "SkillRate",
                "Chance": 1,
                "Delay": 0,
                "Duration": 360,
                "SkillName": "Strength",
                "Value": 25
            },
            {
                "AbsoluteValue": true,
                "BuffType": "StaminaRate",
                "Chance": 1,
                "Delay": 0,
                "Duration": 240,
                "SkillName": "",
                "Value": 2
            },
            {
                "AbsoluteValue": false,
                "BuffType": "WeightLimit",
                "Chance": 1,
                "Delay": 1,
                "Duration": 720,
                "SkillName": "",
                "Value": 0.20
              },
              {
                "AbsoluteValue": true,
                "BuffType": "SkillRate",
                "Chance": 1,
                "Delay": 240,
                "Duration": 240,
                "SkillName": "Vitality",
                "Value": -15
            },
            {
                "AbsoluteValue": true,
                "BuffType": "EnergyRate",
                "Chance": 1,
                "Delay": 240,
                "Duration": 40,
                "SkillName": "",
                "Value": -2
            },
            {
                "AbsoluteValue": true,
                "BuffType": "HandsTremor",
                "Chance": 1,
                "Delay": 240,
                "Duration": 180,
                "SkillName": "",
                "Value": 0
            }
        ]

        const bang_energy_buffs = [
            {
                "AbsoluteValue": true,
                "BuffType": "SkillRate",
                "Chance": 1,
                "Delay": 0,
                "Duration": 720,
                "SkillName": "Endurance",
                "Value": 10
            },
            {
                "AbsoluteValue": true,
                "BuffType": "SkillRate",
                "Chance": 1,
                "Delay": 0,
                "Duration": 720,
                "SkillName": "Strength",
                "Value": 10
            },
            {
                "AbsoluteValue": true,
                "BuffType": "StaminaRate",
                "Chance": 1,
                "Delay": 0,
                "Duration": 720,
                "SkillName": "",
                "Value": 1
            },
            {
                "AbsoluteValue": true,
                "BuffType": "SkillRate",
                "Chance": 1,
                "Delay": 0,
                "Duration": 720,
                "SkillName": "HeavyVests",
                "Value": 25
            },
            {
                "AbsoluteValue": true,
                "BuffType": "SkillRate",
                "Chance": 1,
                "Delay": 0,
                "Duration": 720,
                "SkillName": "LightVests",
                "Value": 25
            },
            {
                "AbsoluteValue": false,
                "BuffType": "DamageModifier",
                "Chance": 0.25,
                "Delay": 0,
                "Duration": 720,
                "SkillName": "",
                "Value": 0.2
              },
              {
                "AbsoluteValue": true,
                "BuffType": "SkillRate",
                "Chance": 1,
                "Delay": 240,
                "Duration": 360,
                "SkillName": "Vitality",
                "Value": -15
            },
            {
                "AbsoluteValue": true,
                "BuffType": "EnergyRate",
                "Chance": 1,
                "Delay": 240,
                "Duration": 40,
                "SkillName": "",
                "Value": -1.5
            },
            {
                "AbsoluteValue": true,
                "BuffType": "HandsTremor",
                "Chance": 1,
                "Delay": 240,
                "Duration": 180,
                "SkillName": "",
                "Value": 0
            }
        ]

        const doctor_buffs = [
            {
                "AbsoluteValue": true,
                "BuffType": "HealthRate",
                "Chance": 1,
                "Delay": 1,
                "Duration": 180,
                "SkillName": "",
                "Value": 2
              },
            {
                "AbsoluteValue": true,
                "BuffType": "SkillRate",
                "Chance": 1,
                "Delay": 0,
                "Duration": 240,
                "SkillName": "Vitality",
                "Value": 15
            },
            {
                "AbsoluteValue": true,
                "BuffType": "SkillRate",
                "Chance": 1,
                "Delay": 0,
                "Duration": 240,
                "SkillName": "Health",
                "Value": 15
            },
            {
                "BuffType": "SkillRate",
                "Chance": 1,
                "Delay": 0,
                "Duration": 240,
                "AbsoluteValue": true,
                "SkillName": "StressResistance",
                "Value": 15,
            },
            {
                "AbsoluteValue": true,
                "BuffType": "EnergyRate",
                "Chance": 1,
                "Delay": 240,
                "Duration": 50,
                "SkillName": "",
                "Value": -1.5
            },
            {
                "AbsoluteValue": true,
                "BuffType": "HandsTremor",
                "Chance": 1,
                "Delay": 240,
                "Duration": 120,
                "SkillName": "",
                "Value": 0
            }
        ]

        const punch_monster_buffs = [
            {
                "AbsoluteValue": true,
                "BuffType": "SkillRate",
                "Chance": 1,
                "Delay": 0,
                "Duration": 120,
                "SkillName": "Endurance",
                "Value": 50
            },
            {
                "AbsoluteValue": true,
                "BuffType": "SkillRate",
                "Chance": 1,
                "Delay": 0,
                "Duration": 120,
                "SkillName": "Strength",
                "Value": 50
            },
            {
                "AbsoluteValue": true,
                "BuffType": "StaminaRate",
                "Chance": 1,
                "Delay": 0,
                "Duration": 120,
                "SkillName": "",
                "Value": 3
            },
            {
                "AbsoluteValue": true,
                "BuffType": "SkillRate",
                "Chance": 1,
                "Delay": 0,
                "Duration": 120,
                "SkillName": "HeavyVests",
                "Value": 50
            },
            {
                "AbsoluteValue": true,
                "BuffType": "SkillRate",
                "Chance": 1,
                "Delay": 0,
                "Duration": 120,
                "SkillName": "LightVests",
                "Value": 50
            },
            {
                "AbsoluteValue": false,
                "BuffType": "DamageModifier",
                "Chance": 0.25,
                "Delay": 0,
                "Duration": 120,
                "SkillName": "",
                "Value": 0.5
              },
              {
                "AbsoluteValue": true,
                "BuffType": "HealthRate",
                "Chance": 1,
                "Delay": 1,
                "Duration": 120,
                "SkillName": "",
                "Value": 1
              },
              {
                "AbsoluteValue": true,
                "BuffType": "EnergyRate",
                "Chance": 1,
                "Delay": 120,
                "Duration": 30,
                "SkillName": "",
                "Value": -1.5
            },
            {
                "AbsoluteValue": true,
                "BuffType": "HandsTremor",
                "Chance": 1,
                "Delay": 120,
                "Duration": 120,
                "SkillName": "",
                "Value": 0
            }

        ]


        // Add the custom buff to globals config
        db.tableData.globals.config.Health.Effects.Stimulator.Buffs["Buffs_drink_monster_energy"] = green_monster_buffs;
        db.tableData.globals.config.Health.Effects.Stimulator.Buffs["Buffs_drink_blue_monster_energy"] = blue_monster_buffs;
        db.tableData.globals.config.Health.Effects.Stimulator.Buffs["Buffs_drink_monster_white_energy"] = white_monster_buffs;
        db.tableData.globals.config.Health.Effects.Stimulator.Buffs["Buffs_drink_monster_strawberry_energy"] = strawberry_monster_buffs;
        db.tableData.globals.config.Health.Effects.Stimulator.Buffs["Buffs_drink_ghost_energy"] = ghost_energy_buffs;
        db.tableData.globals.config.Health.Effects.Stimulator.Buffs["Buffs_drink_nos_energy"] = nos_energy_buffs;
        db.tableData.globals.config.Health.Effects.Stimulator.Buffs["Buffs_drink_monster_lemonade_energy"] = lemonade_monster_buffs;
        db.tableData.globals.config.Health.Effects.Stimulator.Buffs["Buffs_drink_bang_energy"] = bang_energy_buffs;
        db.tableData.globals.config.Health.Effects.Stimulator.Buffs["Buffs_drink_monster_doctor_energy"] = doctor_buffs;
        db.tableData.globals.config.Health.Effects.Stimulator.Buffs["Buffs_drink_monster_punch_energy"] = punch_monster_buffs;

        const monester_energy: NewItemFromCloneDetails = {
            itemTplToClone: "5d40407c86f774318526545a",
            overrideProperties: {
                Prefab: {
                    path: "assets/monster_energy.bundle",
                    rcid: ""
                },
                UsePrefab: {
                    path: "assets/monster_energy_container.bundle",
                    rcid: ""
                },
                foodUseTime: 5,
                StimulatorBuffs: "Buffs_drink_monster_energy",
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
            newId: "a_monster_energy", 
            fleaPriceRoubles: 60000,
            handbookPriceRoubles: 60000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Monster Original Green Energy Drink",
                    shortName: "Monster",
                    description: `Monster Energy is not just a drink. It's a lifestyle in a can. Monster is the relentless pursuit of victory, being your best, being at the top of your game. It is the most badass energy drink on the planet. Monster is the world's greatest skiers and skaters, boarders and bikers, rockers and racers, gamers and Girls. Monster Energy — Unleash the Beast!`
                }
            },
            addToStaticLoot: {
                "578f87a3245977356274f2cb": 3000,
                "5909e4b686f7747f5b744fa4": 3000,
                "578f8778245977358849a9b5": 4000,
                "5d6fd13186f77424ad2a8c69": 6000,
                "5d6d2b5486f774785c2ba8ea": 5000,
            }
        }

        this.loot.push(monester_energy);

        const monester_energy_blue: NewItemFromCloneDetails = {
            itemTplToClone: "5d40407c86f774318526545a",
            overrideProperties: {
                Prefab: {
                    path: "assets/monster_energy_blue.bundle",
                    rcid: ""
                },
                UsePrefab: {
                    path: "assets/monster_energy_blue_container.bundle",
                    rcid: ""
                },
                foodUseTime: 5,
                StimulatorBuffs: "Buffs_drink_blue_monster_energy",
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
            newId: "b_monster_energy_blue", 
            fleaPriceRoubles: 60000,
            handbookPriceRoubles: 60000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Monster Original Lo-Carb Energy Drink",
                    shortName: "Monster",
                    description: `Monster Energy Lo-Carb packs a powerful punch and has a smooth, easy drinking flavor, but without glucose. Get the big bad Monster buzz you know and love, but with a sweet & salty citrus twist with a fraction of the carbohydrates and only 30 calories per can and with 140mg of Caffeine.`
                }
            }
        }

        const monester_energy_white: NewItemFromCloneDetails = {
            itemTplToClone: "5d40407c86f774318526545a",
            overrideProperties: {
                Prefab: {
                    path: "assets/monster_energy_white.bundle",
                    rcid: ""
                },
                UsePrefab: {
                    path: "assets/monster_energy_white_container.bundle",
                    rcid: ""
                },
                foodUseTime: 5,
                StimulatorBuffs: "Buffs_drink_monster_white_energy",
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
            newId: "c_monster_energy_white", 
            fleaPriceRoubles: 60000,
            handbookPriceRoubles: 60000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Monster Zero Ultra Energy Drink",
                    shortName: "Monster",
                    description: `The light, refreshing citrus flavor of Zero Ultra has broken the rules of flavor. 10 calories, zero sugar, and a full load of our Monster Energy blend to keep the good times rolling.`
                }
            }
        }

        const monester_energy_strawberry: NewItemFromCloneDetails = {
            itemTplToClone: "5d40407c86f774318526545a",
            overrideProperties: {
                Prefab: {
                    path: "assets/monster_energy_strawberry.bundle",
                    rcid: ""
                },
                UsePrefab: {
                    path: "assets/monster_energy_strawberry_container.bundle",
                    rcid: ""
                },
                foodUseTime: 5,
                StimulatorBuffs: "Buffs_drink_monster_strawberry_energy",
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
            newId: "d_monster_energy_strawberry", 
            fleaPriceRoubles: 60000,
            handbookPriceRoubles: 60000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Monster Zero-Ultra Strawberry Dreams Energy Drink",
                    shortName: "Monster",
                    description: `Take just one sip and you'll be crazy for Ultra Strawberry Dreams. Wonderfully sweet, while slightly tart, this easy-drinking Ultra tastes like a dream. Packed with the Monster Energy blend you love, with just 10 calories and zero sugar.`
                }
            }
        }

        const ghost_energy: NewItemFromCloneDetails = {
            itemTplToClone: "5d40407c86f774318526545a",
            overrideProperties: {
                Prefab: {
                    path: "assets/ghost_energy.bundle",
                    rcid: ""
                },
                UsePrefab: {
                    path: "assets/ghost_energy_container.bundle",
                    rcid: ""
                },
                foodUseTime: 5,
                StimulatorBuffs: "Buffs_drink_ghost_energy",
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
            newId: "j_ghost_energy", 
            fleaPriceRoubles: 60000,
            handbookPriceRoubles: 60000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Ghost Strawbango Margarita Energy Drink",
                    shortName: "Ghost",
                    description: `test`
                }
            }
        }

        const nos_energy: NewItemFromCloneDetails = {
            itemTplToClone: "5d40407c86f774318526545a",
            overrideProperties: {
                Prefab: {
                    path: "assets/nos_energy.bundle",
                    rcid: ""
                },
                UsePrefab: {
                    path: "assets/nos_energy_container.bundle",
                    rcid: ""
                },
                foodUseTime: 5,
                StimulatorBuffs: "Buffs_drink_nos_energy",
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
            newId: "h_nos_energy", 
            fleaPriceRoubles: 60000,
            handbookPriceRoubles: 60000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "NOS Original Energy Drink",
                    shortName: "NOS",
                    description: `Fuel Up. Fire Up. 100 mile an hour power. Thundering from top gear to no fear, the super-charged take charge. It's time to strap in, or sit it out. How Hard Will You Drive? High Performance Energy.`
                }
            }
        }

        const monester_energy_lemonade: NewItemFromCloneDetails = {
            itemTplToClone: "5d40407c86f774318526545a",
            overrideProperties: {
                Prefab: {
                    path: "assets/monster_energy_lemonade.bundle",
                    rcid: ""
                },
                UsePrefab: {
                    path: "assets/monster_energy_lemonade_container.bundle",
                    rcid: ""
                },
                foodUseTime: 5,
                StimulatorBuffs: "Buffs_drink_monster_lemonade_energy",
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
            newId: "g_monster_energy_lemonade", 
            fleaPriceRoubles: 60000,
            handbookPriceRoubles: 60000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Monster Juice Aussie Lemonade Energy Drink",
                    shortName: "Monster",
                    description: `Inspired by the land down under and powered by our world-famous Monster Energy blend, Aussie Style Lemonade is a carbonated exotic twist on lemonade. Tart yet sweet, with a burst of fresh citrus flavor.`
                }
            }
        }

        const bang_energy: NewItemFromCloneDetails = {
            itemTplToClone: "5d40407c86f774318526545a",
            overrideProperties: {
                Prefab: {
                    path: "assets/bang_energy.bundle",
                    rcid: ""
                },
                UsePrefab: {
                    path: "assets/bang_energy_container.bundle",
                    rcid: ""
                },
                foodUseTime: 5,
                StimulatorBuffs: "Buffs_drink_bang_energy",
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
            newId: "i_bang_energy", 
            fleaPriceRoubles: 60000,
            handbookPriceRoubles: 60000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Bang Rainbow Unicorn Energy Drink",
                    shortName: "Bang",
                    description: `Bang is not your stereotypical high sugar, life-sucking soda masquerading as an energy drink! High sugar drinks spike blood sugar producing metabolic mayhem causing you to crash harder than a test dummy into a brick wall. Every 16-ounce can of Bang contains 300 milligrams of caffeine, which studies have shown may increase endurance, as well as strength in some cases, along with essential amino acids, CoQ10 and Super Creatine.`
                }
            }
        }

        const monester_energy_doctor: NewItemFromCloneDetails = {
            itemTplToClone: "5d40407c86f774318526545a",
            overrideProperties: {
                Prefab: {
                    path: "assets/monster_energy_doctor.bundle",
                    rcid: ""
                },
                UsePrefab: {
                    path: "assets/monster_energy_doctor_container.bundle",
                    rcid: ""
                },
                foodUseTime: 5,
                StimulatorBuffs: "Buffs_drink_monster_doctor_energy",
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
            newId: "e_monster_energy_doctor", 
            fleaPriceRoubles: 60000,
            handbookPriceRoubles: 60000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Monster The Doctor Energy Drink",
                    shortName: "Monster",
                    description: `Monster Energy Valentino Rossi VR46 500ml Carbonated Energy Drink and 160mg caffeine. VR46 tastes unlike traditional energy drinks with a light, crisp and refreshing citrus taste. We teamed up with MotoGP Champion, Valentino Rossi AKA ""The Doctor"", to create our fastest Monster yet. Serve cold for maximum refreshment.`
                }
            }
        }

        const monester_energy_punch: NewItemFromCloneDetails = {
            itemTplToClone: "5d40407c86f774318526545a",
            overrideProperties: {
                Prefab: {
                    path: "assets/monster_energy_punch.bundle",
                    rcid: ""
                },
                UsePrefab: {
                    path: "assets/monster_energy_punch_container.bundle",
                    rcid: ""
                },
                foodUseTime: 5,
                StimulatorBuffs: "Buffs_drink_monster_punch_energy",
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
            newId: "f_monster_energy_punch", 
            fleaPriceRoubles: 60000,
            handbookPriceRoubles: 60000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Monster Juice Pipeline Punch Energy Drink",
                    shortName: "Monster",
                    description: `Like the Banzai Pipeline of Oahu, Pipeline Punch was destined to become a legend. The perfect carbonated blend of passion fruit, orange, guava, and our Monster Energy blend.`
                }
            }
        }

        
        customItem.createItemFromClone(monester_energy);
        customItem.createItemFromClone(monester_energy_blue);
        customItem.createItemFromClone(monester_energy_white);
        customItem.createItemFromClone(monester_energy_strawberry);
        customItem.createItemFromClone(monester_energy_doctor);
        customItem.createItemFromClone(monester_energy_punch);
        customItem.createItemFromClone(monester_energy_lemonade);
        customItem.createItemFromClone(nos_energy);
        customItem.createItemFromClone(bang_energy);
        customItem.createItemFromClone(ghost_energy);
    }
}