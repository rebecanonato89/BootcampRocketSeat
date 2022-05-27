import { IsNull, MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateOng1631368674321 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'ongs',
        columns: [

          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },

          {
            name: 'name',
            type: 'varchar',
            isNullable: false
          },

          {
            name: 'email',
            type: 'varchar',
            isNullable: false
          },

          {
            name: 'whatsapp',
            type: 'varchar',
            isNullable: false

          },

          {
            name: 'city',
            type: 'varchar',
            isNullable: false
          },

          {
            name: 'uf',
            type: 'varchar(2)',
            isNullable: false
          },

          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          },

          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()'
          },
        ],
      }),
    );
  }


  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(
      'ongs'
    )
  }

}
