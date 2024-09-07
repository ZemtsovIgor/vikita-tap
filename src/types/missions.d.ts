export interface MISSION {
  id: string | null;
  title: string | null;
  description?: string | null;
  reward?: number | null;
  start?: string | null;
  end?: string | null;
  verification?: boolean;
  done?: boolean;
}

