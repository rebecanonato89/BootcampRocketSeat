import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSettings1619009566280 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                /*
                Esta tabela será assim:
                --------------------------------------------------------------------------------------------------------
                |                                             settings                                                 |
                --------------------------------------------------------------------------------------------------------
                |[PK] id (uuid) | username (varchar) | chat (boolean) | update_at (timestamp) | created_at (timestamp) | 
                --------------------------------------------------------------------------------------------------------
                |               |                    |                |                       |                        |
                --------------------------------------------------------------------------------------------------------
                */

                name: "settings",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true, //Define que é uma chave primária para relacionarmos com outras tabelas
                    },
                    {
                        name: "username",
                        type: "varchar",
                    },
                    {
                        name: "chat",
                        type: "boolean",
                        default: true, //Define um valor padrão para uma propriedade
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()", //Pega o horário de agora automaticamente
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        //Inverso do que foi feito anteriormente
        await queryRunner.dropTable("settings");
    }

}
