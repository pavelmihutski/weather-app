export const fToC = payload => `${(payload - 273).toFixed(1)} C °`;

export const numberToDate = payload => new Date(1000 * payload).toDateString();

export const numberToTime = payload => new Date(1000 * payload).toLocaleTimeString();
