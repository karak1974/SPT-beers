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
                "Delay": 5,
                "Duration": 180,
                "SkillName": "Endurance",
                "Value": 15
            },
            {
                "AbsoluteValue": true,
                "BuffType": "SkillRate",
                "Chance": 1,
                "Delay": 5,
                "Duration": 180,
                "SkillName": "Strength",
                "Value": 15
            },
            {
                "AbsoluteValue": true,
                "BuffType": "StaminaRate",
                "Chance": 1,
                "Delay": 5,
                "Duration": 180,
                "SkillName": "",
                "Value": 1
            },
            {
                "AbsoluteValue": true,
                "BuffType": "MaxStamina",
                "Chance": 1,
                "Delay": 5,
                "Duration": 180,
                "SkillName": "",
                "Value": 10
            },
            {
                "AbsoluteValue": true,
                "BuffType": "SkillRate",
                "Chance": 1,
                "Delay": 60,
                "Duration": 300,
                "SkillName": "Perception",
                "Value": 10
            },
            {
                "AbsoluteValue": true,
                "BuffType": "SkillRate",
                "Chance": 1,
                "Delay": 60,
                "Duration": 300,
                "SkillName": "Attention",
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
                "Delay": 300,
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

        const noss_monster_buffs = [
            {
                "AbsoluteValue": true,
                "BuffType": "SkillRate",
                "Chance": 1,
                "Delay": 5,
                "Duration": 180,
                "SkillName": "Endurance",
                "Value": 9
            }
        ]


        // Add the custom buff to globals config
        db.tableData.globals.config.Health.Effects.Stimulator.Buffs["Buffs_drink_monster_energy"] = green_monster_buffs;
        db.tableData.globals.config.Health.Effects.Stimulator.Buffs["Buffs_drink_nos_energy"] = noss_monster_buffs;

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
                        value: 40
                    },
                    Energy: {
                        value: 80
                    }
                },
                effects_damage: {
                    Pain: {
                        delay: 5,
                        duration: 240,
                    }
                }
            },
            parentId: "5448e8d64bdc2dce718b4568",
            newId: "aa_monster_energy", 
            fleaPriceRoubles: 60000,
            handbookPriceRoubles: 60000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Monster Energy Original Green Drink",
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
                StimulatorBuffs: "Buffs_drink_monster_energy",
                effects_health: {
                    Hydration: {
                        value: 40
                    },
                    Energy: {
                        value: 80
                    }
                },
                effects_damage: {
                    Pain: {
                        delay: 5,
                        duration: 240,
                    }
                }
            },
            parentId: "5448e8d64bdc2dce718b4568",
            newId: "aa_monster_energy_blue", 
            fleaPriceRoubles: 60000,
            handbookPriceRoubles: 60000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Monster Energy Lo-Carb Drink",
                    shortName: "Monster",
                    description: `Monster Energy is not just a drink. It's a lifestyle in a can. Monster is the relentless pursuit of victory, being your best, being at the top of your game. It is the most badass energy drink on the planet. Monster is the world's greatest skiers and skaters, boarders and bikers, rockers and racers, gamers and Girls. Monster Energy — Unleash the Beast!`
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
                StimulatorBuffs: "Buffs_drink_monster_energy",
                effects_health: {
                    Hydration: {
                        value: 40
                    },
                    Energy: {
                        value: 80
                    }
                },
                effects_damage: {
                    Pain: {
                        delay: 5,
                        duration: 240,
                    }
                }
            },
            parentId: "5448e8d64bdc2dce718b4568",
            newId: "aa_monster_energy_white", 
            fleaPriceRoubles: 60000,
            handbookPriceRoubles: 60000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Monster Energy Zero Ultra Drink",
                    shortName: "Monster",
                    description: `Monster Energy is not just a drink. It's a lifestyle in a can. Monster is the relentless pursuit of victory, being your best, being at the top of your game. It is the most badass energy drink on the planet. Monster is the world's greatest skiers and skaters, boarders and bikers, rockers and racers, gamers and Girls. Monster Energy — Unleash the Beast!`
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
                StimulatorBuffs: "Buffs_drink_monster_energy",
                effects_health: {
                    Hydration: {
                        value: 40
                    },
                    Energy: {
                        value: 80
                    }
                },
                effects_damage: {
                    Pain: {
                        delay: 5,
                        duration: 240,
                    }
                }
            },
            parentId: "5448e8d64bdc2dce718b4568",
            newId: "aa_monster_energy_punch", 
            fleaPriceRoubles: 60000,
            handbookPriceRoubles: 60000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Monster Energy Juice Pipeline Punch Drink",
                    shortName: "Monster",
                    description: `Monster Energy is not just a drink. It's a lifestyle in a can. Monster is the relentless pursuit of victory, being your best, being at the top of your game. It is the most badass energy drink on the planet. Monster is the world's greatest skiers and skaters, boarders and bikers, rockers and racers, gamers and Girls. Monster Energy — Unleash the Beast!`
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
                StimulatorBuffs: "Buffs_drink_monster_energy",
                effects_health: {
                    Hydration: {
                        value: 40
                    },
                    Energy: {
                        value: 80
                    }
                },
                effects_damage: {
                    Pain: {
                        delay: 5,
                        duration: 240,
                    }
                }
            },
            parentId: "5448e8d64bdc2dce718b4568",
            newId: "aa_monster_energy_lemonade", 
            fleaPriceRoubles: 60000,
            handbookPriceRoubles: 60000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Monster Energy Aussie Lemonade Drink",
                    shortName: "Monster",
                    description: `Monster Energy is not just a drink. It's a lifestyle in a can. Monster is the relentless pursuit of victory, being your best, being at the top of your game. It is the most badass energy drink on the planet. Monster is the world's greatest skiers and skaters, boarders and bikers, rockers and racers, gamers and Girls. Monster Energy — Unleash the Beast!`
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
            },
            parentId: "5448e8d64bdc2dce718b4568",
            newId: "aa_nos_energy", 
            fleaPriceRoubles: 60000,
            handbookPriceRoubles: 60000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Nos Energy Drink",
                    shortName: "Nos",
                    description: `Test Nos`
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
            },
            parentId: "5448e8d64bdc2dce718b4568",
            newId: "aa_bang_energy", 
            fleaPriceRoubles: 60000,
            handbookPriceRoubles: 60000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Bang Rainbow Unicorn Energy Drink",
                    shortName: "Bang",
                    description: `Test Bang`
                }
            }
        }
        
        customItem.createItemFromClone(monester_energy);
        customItem.createItemFromClone(monester_energy_blue);
        customItem.createItemFromClone(monester_energy_white);
        customItem.createItemFromClone(monester_energy_punch);
        customItem.createItemFromClone(monester_energy_lemonade);
        customItem.createItemFromClone(nos_energy);
        customItem.createItemFromClone(bang_energy);
    }
}