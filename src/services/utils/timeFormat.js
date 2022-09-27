import moment from "moment";

const REMOVE_TIME_HOUR_TIME = [5, 16];

export const getDate = time => {
	if (!time) {
		return "";
	}
	return new Date(time).toGMTString().slice(REMOVE_TIME_HOUR_TIME[0], REMOVE_TIME_HOUR_TIME[1]);
};
