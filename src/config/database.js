/* eslint-disable no-console */
import mongoose from 'mongoose';

import constants from './constants';

// Remove the warning with Promise
mongoose.Promise = global.Promise;

// Connect mongodb with the url provide
try {
  mongoose.connect(constants.MONGO_URL, { useMongoClient: true });
} catch (err) {
  mongoose.createConnection(constants.MONGO_URL, { useMongoClient: true });
}

mongoose.connection
  .once('open', () => console.log('Mongodb connected!'))
  .on('error', err => console.log(err));
