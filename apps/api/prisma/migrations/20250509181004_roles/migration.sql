/*
  Warnings:

  - You are about to drop the column `isSuperUser` on the `users` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN', 'SUPER_ADMIN');

-- AlterTable
ALTER TABLE "users" DROP COLUMN "isSuperUser",
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER';
