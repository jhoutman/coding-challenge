import moment from 'moment';
import { get, parseRequest } from '../utils/fetch';
import config from '../config';

var date = new Date();
var formattedDate = moment(date).format('YYYYMMDD');

const { apiBaseUrl, client_id, client_secret } = config;
const locationFormatter = (longitude, latitude) => `${latitude},${longitude}`;

/**
 * @returns {Promise}
 */
export function getPizzaPlaces({ longitude, latitude }) {
  return get(`${apiBaseUrl}/venues/explore`, {
    client_id,
    client_secret,
    ll: locationFormatter(longitude, latitude),
    query: 'food',
    v: formattedDate,
    radius: 1000,
    limit: 20
  }).then(parseRequest);
}
