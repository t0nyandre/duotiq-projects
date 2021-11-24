import { Entity, Property } from "@mikro-orm/core";
import { BaseEntity } from "./BaseEntity";

@Entity()
export class Board extends BaseEntity {
    @Property({type: "text"})
    name!: string
}