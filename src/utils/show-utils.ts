import { IShow } from "../interfaces/show/show.interface";

export class ShowUtils {
  static sortShows = (a: IShow, b: IShow) => {
    const dateA = new Date(a.createdAt!);
    const dateB = new Date(b.createdAt!);

    if (dateA > dateB) {
      return -1; // Return -1 if dateA is greater (latest)
    } else if (dateA < dateB) {
      return 1; // Return 1 if dateB is greater (older)
    } else {
      return 0; // Return 0 if dates are equal
    }
  };
}
