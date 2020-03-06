const dateToday = (moment = null) => {
	const date = moment ? new Date(moment) : new Date();
	return `${date.getFullYear()}-${
		date.getMonth() + 1 < 10 ? 0 : ''
	}${date.getMonth() + 1}-${date.getDate() < 10 ? 0 : ''}${date.getDate()}`;
};

export default dateToday;
