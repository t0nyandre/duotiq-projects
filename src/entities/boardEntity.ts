import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { v4 } from "uuid";

@Entity()
export class Board {
    @PrimaryKey()
    id: string = v4()

    @Property({type: "text"})
    name!: string

    @Property({type: "date"})
    createdAt = new Date()

    @Property({type: "date", onUpdate: () => new Date() })
    updatedAt = new Date()
}