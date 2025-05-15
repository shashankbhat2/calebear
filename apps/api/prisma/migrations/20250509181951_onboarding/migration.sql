-- AlterTable
ALTER TABLE "users" ADD COLUMN     "chosenPersonaId" TEXT;

-- CreateTable
CREATE TABLE "user_personas" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "defaultIntegrationTypes" "IntegrationType"[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_personas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_onboardings" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "onboardingId" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "currentStep" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_onboardings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_personas_name_key" ON "user_personas"("name");

-- CreateIndex
CREATE UNIQUE INDEX "user_onboardings_userId_key" ON "user_onboardings"("userId");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_chosenPersonaId_fkey" FOREIGN KEY ("chosenPersonaId") REFERENCES "user_personas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_onboardings" ADD CONSTRAINT "user_onboardings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
