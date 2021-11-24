import { EntityManager, EntityRepository, MikroORM } from "@mikro-orm/core";
import { Board } from "../entities";

export interface DIType {
    orm: MikroORM,
    em: EntityManager,
    boardRepo: EntityRepository<Board>
}