import { Entity, Property } from "@mikro-orm/core";
import { BaseEntity } from "./BaseEntity";

@Entity()
export class Board extends BaseEntity {
    @Property()
    name!: string

    constructor(name: string) {
        super()
        this.name = name
    }
}