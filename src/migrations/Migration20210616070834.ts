import { Migration } from '@mikro-orm/migrations';

export class Migration20210616070834 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "post" ("id" serial primary key, "created_at" timestamptz(0) not null, "modified_at" timestamptz(0) not null, "title" text not null);');
  }

}
