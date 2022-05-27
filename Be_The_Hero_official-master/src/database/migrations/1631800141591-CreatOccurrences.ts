import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreatOccurrences1631800141591 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table ({
                name:'occurrences',
                columns: [

                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary:true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },

                    {
                        name: 'ong_id',
                        type:'uuid',
                        isNullable:false
                    },

                    {
                        name: 'tytle',
                        type:'varchar',
                        isNullable:false
                    },

                    {
                        name: 'description',
                        type: 'varchar',
                        isNullable:false
                    },

                    {
                        name: 'value',
                        type: 'real',
                        isNullable:false
                    },

                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },

                    

                ],
            })
            
        )
        await queryRunner.createForeignKey(
            'occurrences',
            new TableForeignKey({
                name: 'FKOccurrencesOng',
                columnNames: ['ong_id'],
                referencedTableName: 'ongs',
                referencedColumnNames: ['id'],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(
            'occurrences'
        )
    }

}
