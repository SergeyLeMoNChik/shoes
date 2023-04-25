/*
  Warnings:

  - You are about to drop the column `worker_idworker` on the `buyer` table. All the data in the column will be lost.
  - You are about to drop the column `worker_idworker` on the `director` table. All the data in the column will be lost.
  - You are about to drop the column `worker_idworker` on the `saller` table. All the data in the column will be lost.
  - You are about to drop the `worker` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `buyer` DROP FOREIGN KEY `fk_buyer_worker`;

-- DropForeignKey
ALTER TABLE `director` DROP FOREIGN KEY `fk_director_worker1`;

-- DropForeignKey
ALTER TABLE `saller` DROP FOREIGN KEY `fk_saller_worker1`;

-- AlterTable
ALTER TABLE `buyer` DROP COLUMN `worker_idworker`,
    ADD COLUMN `data_of employment` DATE NULL,
    ADD COLUMN `director_iddirector` INTEGER NULL,
    ADD COLUMN `fullname` VARCHAR(250) NULL,
    ADD COLUMN `pasportdata` VARCHAR(255) NULL;

-- AlterTable
ALTER TABLE `director` DROP COLUMN `worker_idworker`;

-- AlterTable
ALTER TABLE `saller` DROP COLUMN `worker_idworker`,
    ADD COLUMN `data_of_employment` DATE NULL,
    ADD COLUMN `director_iddirector` INTEGER NULL,
    ADD COLUMN `fullname` VARCHAR(250) NULL,
    ADD COLUMN `pasportdata` VARCHAR(255) NULL;

-- DropTable
DROP TABLE `worker`;

-- CreateIndex
CREATE INDEX `fk_buyer_director1_idx` ON `buyer`(`director_iddirector`);

-- CreateIndex
CREATE INDEX `fk_saller_director1_idx` ON `saller`(`director_iddirector`);

-- AddForeignKey
ALTER TABLE `buyer` ADD CONSTRAINT `fk_buyer_director1` FOREIGN KEY (`director_iddirector`) REFERENCES `director`(`iddirector`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `saller` ADD CONSTRAINT `fk_saller_director1` FOREIGN KEY (`director_iddirector`) REFERENCES `director`(`iddirector`) ON DELETE NO ACTION ON UPDATE NO ACTION;
