export type SalaryRecord = {
  id: string;

  company: string;

  companySlug: string;

  role: string;

  level: string;

  location: string;

  experience: string;

  baseSalary: number;

  bonus: number;

  stock: number;

  totalCompensation: number;

  currency: "INR" | "USD";

  workType: "Remote" | "Hybrid" | "Onsite";
};