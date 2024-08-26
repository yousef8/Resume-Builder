export default interface Experience {
  id: string;
  company?: {
    name?: string;
  };
  title?: string;
  startDate?: date;
  endDate?: date;
}
