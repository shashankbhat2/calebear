/*
  Warnings:

  - You are about to drop the column `isPrimary` on the `integrations` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "integrations" DROP COLUMN "isPrimary";

-- CreateTable
CREATE TABLE "destination_calendars" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "integrationId" TEXT NOT NULL,
    "externalId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "isPrimary" BOOLEAN NOT NULL DEFAULT false,
    "isReadOnly" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "destination_calendars_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "destination_calendars_userId_idx" ON "destination_calendars"("userId");

-- CreateIndex
CREATE INDEX "destination_calendars_integrationId_idx" ON "destination_calendars"("integrationId");

-- CreateIndex
CREATE UNIQUE INDEX "destination_calendars_userId_integrationId_externalId_key" ON "destination_calendars"("userId", "integrationId", "externalId");

-- AddForeignKey
ALTER TABLE "destination_calendars" ADD CONSTRAINT "destination_calendars_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "destination_calendars" ADD CONSTRAINT "destination_calendars_integrationId_fkey" FOREIGN KEY ("integrationId") REFERENCES "integrations"("id") ON DELETE CASCADE ON UPDATE CASCADE;
