import {MigrationInterface, QueryRunner} from "typeorm";

export class changeDoneDefaultValue1657729134358 implements MigrationInterface {
    name = 'changeDoneDefaultValue1657729134358'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tasks" ALTER COLUMN "done" SET DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tasks" ALTER COLUMN "done" DROP DEFAULT`);
    }

}
