import moment from "moment";

export const parseFinnishDateString = (dateStr: string): moment.Moment =>
  moment(dateStr, "D.M.YYYY");
