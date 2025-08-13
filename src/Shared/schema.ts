// minimal type stubs used by storage.ts - add fields later if needed
export type User = { id: string; name?: string; phone?: string; email?: string; isVerified?: boolean; createdAt?: Date };
export type InsertUser = { name?: string; phone?: string; email?: string; password?: string };

export type Patient = { id: string; userId: string; bloodGroup?: string; allergies?: string[]; chronicConditions?: string[] };
export type InsertPatient = Omit<Patient, "id">;

export type Doctor = { id: string; userId: string; registrationNumber?: string; isVerified?: boolean; verificationDocuments?: any };
export type InsertDoctor = Omit<Doctor, "id">;

export type MedicalRecord = { id: string; patientId: string; kind?: string; fileUrl?: string; fileName?: string; createdAt?: Date; recordDate?: Date; notes?: string };
export type InsertMedicalRecord = Omit<MedicalRecord, "id" | "createdAt">;

export type Vital = { id: string; patientId: string; type: string; value: string | number; unit?: string; recordedAt?: Date; source?: string };
export type InsertVital = Omit<Vital, "id" | "recordedAt">;

export type ConsentSession = { id: string; patientId: string; shareCode?: string; status?: "active" | "expired" | "revoked"; expiresAt?: Date; createdAt?: Date };
export type InsertConsentSession = Omit<ConsentSession, "id" | "createdAt">;

export type Encounter = { id: string; patientId: string; encounterDate?: Date; notes?: string };
export type InsertEncounter = Omit<Encounter, "id" | "encounterDate">;

export type AuditLog = { id: string; patientId: string; actorType?: "patient" | "doctor"; actorId?: string; action?: string; scope?: string[]; timestamp?: Date };
export type InsertAuditLog = Omit<AuditLog, "id" | "timestamp">;
