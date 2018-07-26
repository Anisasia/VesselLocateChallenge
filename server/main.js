import { Meteor } from 'meteor/meteor'
import axios from 'axios'

import seedVessels from './mockData/seedVessels'
import {Vessels} from '../imports/api/vessels'

Meteor.startup(() => {
  // initialize collection with fake data
  seedVessels.forEach(vessel => Vessels.insert(vessel))
})

Meteor.methods({
  getVesselCoordinates (vesselId) {
    // TODO: continue
    axios.get('https://api.aprs.fi/api/get?name=275304000&what=loc&apikey=109676.BrVSr9i6TpbMbBe&format=json')
      .then(response => console.log(response.data))

    return {lat: 55.95, lng: 30.33}
  }
})
