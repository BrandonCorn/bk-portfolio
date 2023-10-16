/*
  Warnings:

  - You are about to drop the column `hasSentSms` on the `Visitors` table. All the data in the column will be lost.
  - You are about to drop the column `sentSmsCount` on the `Visitors` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Visitors_phoneNumber_key` ON `Visitors`;

-- AlterTable
ALTER TABLE `Visitors` DROP COLUMN `hasSentSms`,
    DROP COLUMN `sentSmsCount`;
