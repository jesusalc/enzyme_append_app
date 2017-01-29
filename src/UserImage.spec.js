// Libs
import React, { PropTypes } from 'react'
import { render } from 'enzyme'
import { expect } from 'chai'

// Component
import UserImage from './UserImage'


describe('<UserImage />', () => {
  it('should have a <div /> element with .gh-widget-photo class', () => {
    const wrapper = render(<UserImage />)

    expect(wrapper.find('div').attr('class')).to.equal('gh-widget-photo')
  })

})
