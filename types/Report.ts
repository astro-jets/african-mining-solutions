export type MonthlyReport = {
  date: string;
  deposits: number[];
  companies: number[];
  minerals?: number;
}[];
