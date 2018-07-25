import { Meteor } from 'meteor/meteor'

import seedVessels from './mockData/seedVessels'
import {Vessels} from '../imports/api/vessels'

Meteor.startup(() => {
  // initialize collection with fake data
  seedVessels.forEach(vessel => Vessels.insert(vessel))
  console.log('DONE!')
})
