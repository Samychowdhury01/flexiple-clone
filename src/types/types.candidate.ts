export type TCandidate = {
  id: string;
  name: string;
  experience: number;
  notice: string;
  ctc: number;
  skills: string[];
};

export type TFilter = { skill?: string | null; notice?: string | null };
