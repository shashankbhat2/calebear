-- AlterTable
ALTER TABLE "user_onboardings" ADD COLUMN     "initial_persona_id" TEXT,
ADD COLUMN     "onboardingData" JSONB;

-- CreateIndex
CREATE INDEX "user_onboardings_initial_persona_id_idx" ON "user_onboardings"("initial_persona_id");

-- AddForeignKey
ALTER TABLE "user_onboardings" ADD CONSTRAINT "user_onboardings_initial_persona_id_fkey" FOREIGN KEY ("initial_persona_id") REFERENCES "user_personas"("id") ON DELETE SET NULL ON UPDATE CASCADE;
