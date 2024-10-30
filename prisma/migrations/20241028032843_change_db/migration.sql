/*
  Warnings:

  - You are about to drop the column `quantity` on the `Products` table. All the data in the column will be lost.
  - Added the required column `type` to the `Images` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Images" ADD COLUMN     "type" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Products" DROP COLUMN "quantity";
