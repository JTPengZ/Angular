export interface DetailInterface {
    name: string;
    sprites: DetailSpriteInterface;
    abilities: DetailAbilityInterface[];
    moves: DetailMovesInterface[];
    stats: DetailStatsInterface[];
    types: DetailTypesInterface[];
}

export interface DetailSpriteInterface {
    front_default: string;
}

export interface DetailAbilityInterface {
    ability: {
        name:string;
    }
}

export interface DetailMovesInterface {
    move: {
        name:string;
    }
    version_group_details: DetailLevelMoveInterface[];
}

export interface DetailLevelMoveInterface {
    level_learned_at: number;
    version_group: {
        name:string;
    }
}

export interface DetailStatsInterface {
    base_stat:number;
    stat: {
        name: string;
    }
}

export interface DetailTypesInterface {
    type: {
        name:string;
    }
}