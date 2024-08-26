import { DependencyContainer } from "tsyringe";
import { CustomItemService } from "@spt/services/mod/CustomItemService";
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

        let green_monster_buffs: any = [];
        if (this.config.config['monster_green_effect_toggle']) {
            green_monster_buffs = [
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
                    "Value": 0.8
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
                    "Duration": 120,
                    "SkillName": "Health",
                    "Value": -10
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "EnergyRate",
                    "Chance": 1,
                    "Delay": 240,
                    "Duration": 40,
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
        }

        let blue_monster_buffs: any = [];
        if (this.config.config['monster_blue_effect_toggle']) {
            blue_monster_buffs = [
                {
                    "AbsoluteValue": true,
                    "BuffType": "StaminaRate",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 300,
                    "SkillName": "",
                    "Value": 0.2
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "MaxStamina",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 300,
                    "SkillName": "",
                    "Value": 2
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 300,
                    "SkillName": "Perception",
                    "Value": 10
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 300,
                    "SkillName": "Intellect",
                    "Value": 10
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 300,
                    "SkillName": "Attention",
                    "Value": 10
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 300,
                    "SkillName": "Search",
                    "Value": 10
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 300,
                    "Duration": 120,
                    "SkillName": "Health",
                    "Value": -10
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "EnergyRate",
                    "Chance": 1,
                    "Delay": 300,
                    "Duration": 40,
                    "SkillName": "",
                    "Value": -1
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "HandsTremor",
                    "Chance": 1,
                    "Delay": 300,
                    "Duration": 120,
                    "SkillName": "",
                    "Value": 0
                }
            ]
        }

        let white_monster_buffs: any = [];
        if(this.config.config['monster_white_effect_toggle']) {

            white_monster_buffs = [
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 360,
                    "SkillName": "Endurance",
                    "Value": 5
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 360,
                    "SkillName": "Strength",
                    "Value": 5
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "StaminaRate",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 360,
                    "SkillName": "",
                    "Value": 0.5
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "MaxStamina",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 360,
                    "SkillName": "",
                    "Value": 5
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 360,
                    "SkillName": "Perception",
                    "Value": 5
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 360,
                    "SkillName": "Attention",
                    "Value": 5
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 360,
                    "SkillName": "Search",
                    "Value": 5
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 360,
                    "Duration": 120,
                    "SkillName": "Health",
                    "Value": -10
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 360,
                    "Duration": 120,
                    "SkillName": "Vitality",
                    "Value": -10
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "EnergyRate",
                    "Chance": 1,
                    "Delay": 360,
                    "Duration": 50,
                    "SkillName": "",
                    "Value": -1
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "HandsTremor",
                    "Chance": 1,
                    "Delay": 360,
                    "Duration": 120,
                    "SkillName": "",
                    "Value": 0
                }
            ]
        }

        let strawberry_monster_buffs: any = [];
        if (this.config.config['monster_strawberry_effect_toggle']) {
            strawberry_monster_buffs = [
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 300,
                    "SkillName": "Endurance",
                    "Value": 5
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 300,
                    "SkillName": "Strength",
                    "Value": 5
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "StaminaRate",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 300,
                    "SkillName": "",
                    "Value": 0.2
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "MaxStamina",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 300,
                    "SkillName": "",
                    "Value": 2
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "HealthRate",
                    "Chance": 1,
                    "Delay": 1,
                    "Duration": 300,
                    "SkillName": "",
                    "Value": 0.5
                  },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 300,
                    "SkillName": "Vitality",
                    "Value": 10
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 300,
                    "SkillName": "Health",
                    "Value": 10
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 300,
                    "SkillName": "HeavyVests",
                    "Value": 10
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 300,
                    "SkillName": "LightVests",
                    "Value": 10
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 300,
                    "Duration": 120,
                    "SkillName": "Health",
                    "Value": -10
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 300,
                    "Duration": 120,
                    "SkillName": "Vitality",
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
                    "Delay": 300,
                    "Duration": 120,
                    "SkillName": "",
                    "Value": 0
                }
            ]
        }

        let ghost_energy_buffs: any = [];
        if (this.config.config['ghost_effect_toggle']) {
            ghost_energy_buffs = [
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 400,
                    "SkillName": "Endurance",
                    "Value": 5
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 400,
                    "SkillName": "Strength",
                    "Value": 5
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "StaminaRate",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 400,
                    "SkillName": "",
                    "Value": 0.5
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "MaxStamina",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 400,
                    "SkillName": "",
                    "Value": 5
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 400,
                    "SkillName": "CovertMovement",
                    "Value": 15
                },
                {
                    "AbsoluteValue": false,
                    "BuffType": "WeightLimit",
                    "Chance": 1,
                    "Delay": 1,
                    "Duration": 400,
                    "SkillName": "",
                    "Value": 0.20
                  },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 400,
                    "Duration": 120,
                    "SkillName": "Health",
                    "Value": -10
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 400,
                    "Duration": 120,
                    "SkillName": "Vitality",
                    "Value": -10
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "EnergyRate",
                    "Chance": 1,
                    "Delay": 400,
                    "Duration": 50,
                    "SkillName": "",
                    "Value": -1
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "HandsTremor",
                    "Chance": 1,
                    "Delay": 400,
                    "Duration": 120,
                    "SkillName": "",
                    "Value": 0
                }
            ]
        }

        let nos_energy_buffs: any = [];
        if (this.config.config['nos_effect_toggle']) {
            nos_energy_buffs = [
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
                    "Value": 1
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
                    "Duration": 120,
                    "SkillName": "Health",
                    "Value": -15
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 240,
                    "Duration": 120,
                    "SkillName": "Vitality",
                    "Value": -15
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "EnergyRate",
                    "Chance": 1,
                    "Delay": 240,
                    "Duration": 60,
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
        }

        let punch_monster_buffs: any = [];
        if (this.config.config['monster_punch_effect_toggle']) {
            punch_monster_buffs = [
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 300,
                    "SkillName": "Endurance",
                    "Value": 10
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 300,
                    "SkillName": "Strength",
                    "Value": 10
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "StaminaRate",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 300,
                    "SkillName": "",
                    "Value": 0.4
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "MaxStamina",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 300,
                    "SkillName": "",
                    "Value": 4
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "HealthRate",
                    "Chance": 1,
                    "Delay": 1,
                    "Duration": 300,
                    "SkillName": "",
                    "Value": 0.8
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 300,
                    "SkillName": "Perception",
                    "Value": 10
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 300,
                    "SkillName": "Intellect",
                    "Value": 10
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 300,
                    "SkillName": "Attention",
                    "Value": 10
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 300,
                    "SkillName": "Search",
                    "Value": 10
                },
                  {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 300,
                    "Duration": 120,
                    "SkillName": "Vitality",
                    "Value": -15
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "EnergyRate",
                    "Chance": 1,
                    "Delay": 300,
                    "Duration": 40,
                    "SkillName": "",
                    "Value": -1
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "HandsTremor",
                    "Chance": 1,
                    "Delay": 300,
                    "Duration": 180,
                    "SkillName": "",
                    "Value": 0
                }
            ]
        }

        let bang_energy_buffs: any = [];
        if (this.config.config['bang_effect_toggle']) {
            bang_energy_buffs = [
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 300,
                    "SkillName": "Endurance",
                    "Value": 10
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 300,
                    "SkillName": "Strength",
                    "Value": 10
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "StaminaRate",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 300,
                    "SkillName": "",
                    "Value": 1
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "MaxStamina",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 300,
                    "SkillName": "",
                    "Value": 10
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 300,
                    "SkillName": "HeavyVests",
                    "Value": 10
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 300,
                    "SkillName": "LightVests",
                    "Value": 10
                },
                {
                    "AbsoluteValue": false,
                    "BuffType": "DamageModifier",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 300,
                    "SkillName": "",
                    "Value": -0.1
                  },
                  {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 300,
                    "Duration": 120,
                    "SkillName": "Health",
                    "Value": -10
                },
                  {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 300,
                    "Duration": 120,
                    "SkillName": "Vitality",
                    "Value": -10
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "EnergyRate",
                    "Chance": 1,
                    "Delay": 300,
                    "Duration": 60,
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
        }

        let doctor_buffs: any = [];
        if (this.config.config['monster_doctor_effect_toggle']) {
            doctor_buffs = [
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 300,
                    "SkillName": "Endurance",
                    "Value": 5
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 300,
                    "SkillName": "Strength",
                    "Value": 5
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "StaminaRate",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 300,
                    "SkillName": "",
                    "Value": 0.5
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "MaxStamina",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 300,
                    "SkillName": "",
                    "Value": 5
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "HealthRate",
                    "Chance": 1,
                    "Delay": 1,
                    "Duration": 300,
                    "SkillName": "",
                    "Value": 1.5
                  },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 300,
                    "SkillName": "Vitality",
                    "Value": 20
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 300,
                    "SkillName": "Health",
                    "Value": 20
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 300,
                    "SkillName": "Immunity",
                    "Value": 20
                },
                {
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 300,
                    "AbsoluteValue": true,
                    "SkillName": "StressResistance",
                    "Value": 20,
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 240,
                    "Duration": 120,
                    "SkillName": "Health",
                    "Value": -10
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 240,
                    "Duration": 120,
                    "SkillName": "Vitality",
                    "Value": -10
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "EnergyRate",
                    "Chance": 1,
                    "Delay": 300,
                    "Duration": 60,
                    "SkillName": "",
                    "Value": -1.2
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "HandsTremor",
                    "Chance": 1,
                    "Delay": 300,
                    "Duration": 120,
                    "SkillName": "",
                    "Value": 0
                }
            ]
        }

        let lemonade_monster_buffs: any = [];
        if (this.config.config['monster_lemonade_effect_toggle']) {
            lemonade_monster_buffs = [
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 360,
                    "SkillName": "Endurance",
                    "Value": 30
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 360,
                    "SkillName": "Strength",
                    "Value": 30
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "StaminaRate",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 360,
                    "SkillName": "",
                    "Value": 2
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "MaxStamina",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 360,
                    "SkillName": "",
                    "Value": 20
                },
                {
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 360,
                    "AbsoluteValue": true,
                    "SkillName": "StressResistance",
                    "Value": 30,
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 360,
                    "SkillName": "HeavyVests",
                    "Value": 30
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 360,
                    "SkillName": "LightVests",
                    "Value": 30
                },
                {
                    "AbsoluteValue": false,
                    "BuffType": "DamageModifier",
                    "Chance": 1,
                    "Delay": 0,
                    "Duration": 360,
                    "SkillName": "",
                    "Value": -0.15
                  },
                  {
                    "AbsoluteValue": true,
                    "BuffType": "HealthRate",
                    "Chance": 1,
                    "Delay": 1,
                    "Duration": 360,
                    "SkillName": "",
                    "Value": 1.5
                  },
                  {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 360,
                    "Duration": 120,
                    "SkillName": "Health",
                    "Value": -10
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 360,
                    "Duration": 120,
                    "SkillName": "Vitality",
                    "Value": -10
                },
                  {
                    "AbsoluteValue": true,
                    "BuffType": "EnergyRate",
                    "Chance": 1,
                    "Delay": 360,
                    "Duration": 60,
                    "SkillName": "",
                    "Value": -2.0
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "HandsTremor",
                    "Chance": 1,
                    "Delay": 360,
                    "Duration": 120,
                    "SkillName": "",
                    "Value": 0
                },
                {
                    "AbsoluteValue": true,
                    "BuffType": "QuantumTunnelling",
                    "Chance": 1,
                    "Delay": 360,
                    "Duration": 60,
                    "SkillName": "",
                    "Value": 0
                }
            ]
        }


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
            newId: "66ccf66fc9162d12270bb161", 
            fleaPriceRoubles: this.config.config['monster_green_flea_price'],
            handbookPriceRoubles: 50000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Monster Original Green Energy Drink",
                    shortName: "Monster",
                    description: `The Original Green Monster Energy Drink is Tarkov's most scavenged and desired energy drink. Scavs and PMCs alike horde this beverage for both for its taste and affects, which help keep their energy and stamina up longer during raids.`
                }
            },
            addToStaticLoot: {
                "578f87a3245977356274f2cb": 300, // vodka 493 // energy drink 842
                "5909e4b686f7747f5b744fa4": 200, // vodka 193 // energy drink 329
                "578f8778245977358849a9b5": 300, // vodka 0 // energy drink 2873
                "5d6fd13186f77424ad2a8c69": 200, // vodka 0 // energy drink 0
                "5d6d2b5486f774785c2ba8ea": 200, // vodka 171 // energy drink 328
            },
            looseLootSpawnWeight: 0.6
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
            newId: "66ccf66fc9162d12270bb160", 
            fleaPriceRoubles: this.config.config['monster_blue_flea_price'],
            handbookPriceRoubles: 40000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Monster Original Lo-Carb Energy Drink",
                    shortName: "Monster",
                    description: `The Lo-Carb Monster Energy Drink is a favorite among scavs that have a taste for increased their ability in scavenging faster and staying alert longer in-raid. Monster Energy Lo-Carb packs a powerful punch and has a smooth, easy drinking flavor, but without glucose. Get the big bad Monster buzz you know and love, but with a sweet & salty citrus twist with a fraction of the carbohydrates and only 30 calories per can and with 140mg of Caffeine.`
                }
            },
            addToStaticLoot: {
                "578f87a3245977356274f2cb": 350, // vodka 493 // energy drink 842
                "5909e4b686f7747f5b744fa4": 250, // vodka 193 // energy drink 329
                "578f8778245977358849a9b5": 350, // vodka 0 // energy drink 2873
                "5d6fd13186f77424ad2a8c69": 250, // vodka 0 // energy drink 0
                "5d6d2b5486f774785c2ba8ea": 250, // vodka 171 // energy drink 328
            },
            looseLootSpawnWeight: 0.6
        }

        this.loot.push(monester_energy_blue);

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
            newId: "66ccf66fc9162d12270bb162", 
            fleaPriceRoubles: this.config.config['monster_white_flea_price'],
            handbookPriceRoubles: 55000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Monster Zero Ultra Energy Drink",
                    shortName: "Monster",
                    description: `The light, refreshing citrus flavor of Zero Ultra has broken the rules of flavor. 10 calories, zero sugar, and a full load of our Monster Energy blend to keep the good times rolling.`
                }
            },
            addToStaticLoot: {
                "578f87a3245977356274f2cb": 275, // vodka 493 // energy drink 842
                "5909e4b686f7747f5b744fa4": 175, // vodka 193 // energy drink 329
                "578f8778245977358849a9b5": 275, // vodka 0 // energy drink 2873
                "5d6fd13186f77424ad2a8c69": 175, // vodka 0 // energy drink 0
                "5d6d2b5486f774785c2ba8ea": 175, // vodka 171 // energy drink 328
            },
            looseLootSpawnWeight: 0.45
        }

        this.loot.push(monester_energy_white);

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
                        value: 40
                    },
                    Energy: {
                        value: 80
                    }
                },
                effects_damage: {
                    
                }
            },
            parentId: "5448e8d64bdc2dce718b4568",
            newId: "66ccf66fc9162d12270bb163", 
            fleaPriceRoubles: this.config.config['monster_strawberry_flea_price'],
            handbookPriceRoubles: 62500,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Monster Zero-Ultra Strawberry Dreams Energy Drink",
                    shortName: "Monster",
                    description: `Take just one sip and you'll be crazy for Ultra Strawberry Dreams. Wonderfully sweet, while slightly tart, this easy-drinking Ultra tastes like a dream. Packed with the Monster Energy blend you love, with just 10 calories and zero sugar.`
                }
            },
            addToStaticLoot: {
                "578f87a3245977356274f2cb": 250, // vodka 493 // energy drink 842
                "5909e4b686f7747f5b744fa4": 150, // vodka 193 // energy drink 329
                "578f8778245977358849a9b5": 200, // vodka 0 // energy drink 2873
                "5d6fd13186f77424ad2a8c69": 150, // vodka 0 // energy drink 0
                "5d6d2b5486f774785c2ba8ea": 150, // vodka 171 // energy drink 328
            },
            looseLootSpawnWeight: 0.3
        }

        this.loot.push(monester_energy_strawberry);

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
                        value: 40
                    },
                    Energy: {
                        value: 80
                    }
                },
                effects_damage: {
                    
                }
            },
            parentId: "5448e8d64bdc2dce718b4568",
            newId: "66ccf66fc9162d12270bb174", 
            fleaPriceRoubles: this.config.config['ghost_flea_price'],
            handbookPriceRoubles: 65000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Ghost Strawbango Margarita Energy Drink",
                    shortName: "Ghost",
                    description: `Ghost Energy is the fully transparent, fully loaded energy drink we have all been waiting for. Our legendary energy drink features no sugar, no artificial colors, and authentic Strawbango Margarita flavor. It contains 200mg of Natural Caffeine from coffee beans, which has been found anecdotally to deliver a smooth, feel-good energy with less jitters and no crash when compared to other forms of caffeine.`
                }
            },
            addToStaticLoot: {
                "578f87a3245977356274f2cb": 250, // vodka 493 // energy drink 842
                "5909e4b686f7747f5b744fa4": 150, // vodka 193 // energy drink 329
                "578f8778245977358849a9b5": 200, // vodka 0 // energy drink 2873
                "5d6fd13186f77424ad2a8c69": 150, // vodka 0 // energy drink 0
                "5d6d2b5486f774785c2ba8ea": 150, // vodka 171 // energy drink 328
            },
            looseLootSpawnWeight: 0.3
        }

        this.loot.push(ghost_energy);

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
                        value: 40
                    },
                    Energy: {
                        value: 80
                    }
                },
                effects_damage: {
                    
                }
            },
            parentId: "5448e8d64bdc2dce718b4568",
            newId: "66ccf66fc9162d12270bb175", 
            fleaPriceRoubles: this.config.config['nos_flea_price'],
            handbookPriceRoubles: 70000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "NOS Original Energy Drink",
                    shortName: "NOS",
                    description: `Fuel Up. Fire Up. 100 mile an hour power. Thundering from top gear to no fear, the super-charged take charge. It's time to strap in, or sit it out. How Hard Will You Drive? High Performance Energy.`
                }
            },
            addToStaticLoot: {
                "578f87a3245977356274f2cb": 200, // vodka 493 // energy drink 842
                "5909e4b686f7747f5b744fa4": 150, // vodka 193 // energy drink 329
                "578f8778245977358849a9b5": 200, // vodka 0 // energy drink 2873
                "5d6fd13186f77424ad2a8c69": 125, // vodka 0 // energy drink 0
                "5d6d2b5486f774785c2ba8ea": 150, // vodka 171 // energy drink 328
            },
            looseLootSpawnWeight: 0.3
        }

        this.loot.push(nos_energy);

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
                        value: 40
                    },
                    Energy: {
                        value: 80
                    }
                },
                effects_damage: {
                    
                }
            },
            parentId: "5448e8d64bdc2dce718b4568",
            newId: "66ccf66fc9162d12270bb176", 
            fleaPriceRoubles: this.config.config['monster_punch_flea_price'],
            handbookPriceRoubles: 100000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Monster Juice Pipeline Punch Energy Drink",
                    shortName: "Monster",
                    description: `Like the Banzai Pipeline of Oahu, Pipeline Punch was destined to become a legend. The perfect carbonated blend of passion fruit, orange, guava, and our Monster Energy blend.`
                }
            },
            addToStaticLoot: {
                "578f87a3245977356274f2cb": 150, // vodka 493 // energy drink 842
                "5909e4b686f7747f5b744fa4": 100, // vodka 193 // energy drink 329
                "578f8778245977358849a9b5": 100, // vodka 0 // energy drink 2873
                "5d6fd13186f77424ad2a8c69": 125, // vodka 0 // energy drink 0
                "5d6d2b5486f774785c2ba8ea": 125, // vodka 171 // energy drink 328
            },
            looseLootSpawnWeight: 0.25
        }

        this.loot.push(monester_energy_punch);

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
                        value: 40
                    },
                    Energy: {
                        value: 80
                    }
                },
                effects_damage: {
                    
                }
            },
            parentId: "5448e8d64bdc2dce718b4568",
            newId: "66ccf66fc9162d12270bb177", 
            fleaPriceRoubles: this.config.config['bang_flea_price'],
            handbookPriceRoubles: 105000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Bang Rainbow Unicorn Energy Drink",
                    shortName: "Bang",
                    description: `Bang is not your stereotypical high sugar, life-sucking soda masquerading as an energy drink! High sugar drinks spike blood sugar producing metabolic mayhem causing you to crash harder than a test dummy into a brick wall. Every 16-ounce can of Bang contains 300 milligrams of caffeine, which studies have shown may increase endurance, as well as strength in some cases, along with essential amino acids, CoQ10 and Super Creatine.`
                }
            },
            addToStaticLoot: {
                "578f87a3245977356274f2cb": 125, // vodka 493 // energy drink 842
                "5909e4b686f7747f5b744fa4": 110, // vodka 193 // energy drink 329
                "578f8778245977358849a9b5": 110, // vodka 0 // energy drink 2873
                "5d6fd13186f77424ad2a8c69": 110, // vodka 0 // energy drink 0
                "5d6d2b5486f774785c2ba8ea": 110, // vodka 171 // energy drink 328
            },
            looseLootSpawnWeight: 0.2
        }

        this.loot.push(bang_energy);

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
                        value: 40
                    },
                    Energy: {
                        value: 80
                    }
                },
                effects_damage: {
                    
                }
            },
            parentId: "5448e8d64bdc2dce718b4568",
            newId: "66ccf66fc9162d12270bb178", 
            fleaPriceRoubles: this.config.config['monster_doctor_flea_price'],
            handbookPriceRoubles: 115000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Monster The Doctor Energy Drink",
                    shortName: "Monster",
                    description: `Monster Energy Valentino Rossi VR46 500ml Carbonated Energy Drink and 160mg caffeine. VR46 tastes unlike traditional energy drinks with a light, crisp and refreshing citrus taste. We teamed up with MotoGP Champion, Valentino Rossi AKA ""The Doctor"", to create our fastest Monster yet. Serve cold for maximum refreshment.`
                }
            },
            addToStaticLoot: {
                "578f87a3245977356274f2cb": 90, // vodka 493 // energy drink 842
                "5909e4b686f7747f5b744fa4": 90, // vodka 193 // energy drink 329
                "578f8778245977358849a9b5": 90, // vodka 0 // energy drink 2873
                "5d6fd13186f77424ad2a8c69": 90, // vodka 0 // energy drink 0
                "5d6d2b5486f774785c2ba8ea": 90, // vodka 171 // energy drink 328
            },
            looseLootSpawnWeight: 0.15
        }

        this.loot.push(monester_energy_doctor);

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
                        value: 60
                    },
                    Energy: {
                        value: 100
                    }
                },
                effects_damage: {
                    
                }
            },
            parentId: "5448e8d64bdc2dce718b4568",
            newId: "66ccf66fc9162d12270bb179", 
            fleaPriceRoubles: this.config.config['monster_lemonade_flea_price'],
            handbookPriceRoubles: 135000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Monster Juice Aussie Lemonade Energy Drink",
                    shortName: "Monster",
                    description: `Inspired by the land down under and powered by our world-famous Monster Energy blend, Aussie Style Lemonade is a carbonated exotic twist on lemonade. Tart yet sweet, with a burst of fresh citrus flavor.`
                }
            },
            addToStaticLoot: {
                "578f87a3245977356274f2cb": 70, // vodka 493 // energy drink 842
                "5909e4b686f7747f5b744fa4": 70, // vodka 193 // energy drink 329
                "578f8778245977358849a9b5": 70, // vodka 0 // energy drink 2873
                "5d6fd13186f77424ad2a8c69": 70, // vodka 0 // energy drink 0
                "5d6d2b5486f774785c2ba8ea": 70, // vodka 171 // energy drink 328
            },
            looseLootSpawnWeight: 0.15
        }

        this.loot.push(monester_energy_lemonade);

        
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