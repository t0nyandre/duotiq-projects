import { Migration } from '@mikro-orm/migrations';

export class Migration20211124100524 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "board" ("id" varchar(255) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "name" text not null);');
    this.addSql('alter table "board" add constraint "board_pkey" primary key ("id");');
  }

}
