/*
  Warnings:

  - You are about to drop the `Answers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Questions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Sms` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `authorName` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Answers` DROP FOREIGN KEY `Answers_questionsId_fkey`;

-- DropForeignKey
ALTER TABLE `Answers` DROP FOREIGN KEY `Answers_visitorsId_fkey`;

-- DropForeignKey
ALTER TABLE `Questions` DROP FOREIGN KEY `Questions_visitorsId_fkey`;

-- DropForeignKey
ALTER TABLE `Sms` DROP FOREIGN KEY `Sms_visitorsId_fkey`;

-- DropIndex
DROP INDEX `Visitors_id_key` ON `Visitors`;

-- AlterTable
ALTER TABLE `Comment` ADD COLUMN `authorName` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `Answers`;

-- DropTable
DROP TABLE `Questions`;

-- DropTable
DROP TABLE `Sms`;

-- CreateTable
CREATE TABLE `Messages` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dateSent` DATETIME(3) NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `visitorsId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Messages` ADD CONSTRAINT `Messages_visitorsId_fkey` FOREIGN KEY (`visitorsId`) REFERENCES `Visitors`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
