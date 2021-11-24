import { PrimaryKey, Property } from "@mikro-orm/core"
import { v4 } from "uuid"

export abstract class BaseEntity {
    @PrimaryKey()
    id: string = v4()

    @Property({type: "date"})
    createdAt = new Date()

    @Property({type: "date", onUpdate: () => new Date() })
    updatedAt = new Date()
}