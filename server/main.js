import { Meteor } from 'meteor/meteor'
import seedVessels from './mockData/seedVessels'
import {Vessels} from '../imports/api/vessels'

import '../imports/api/aprs'

Meteor.startup(() => {
  // initialize collection with fake data
  seedVessels.forEach(vessel => Vessels.insert(vessel))
})
