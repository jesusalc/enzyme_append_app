// Libs
import React, { PropTypes } from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'

// Component
import GithubWidget from './GithubWidget'
import UserDetails from './UserDetails'
import UserStats from './UserStats'
import Repositories from './Repositories'
import Footer from './Footer'

describe('<GithubWidget />', () => {
  it('should render all sub-components', () => {
    const wrapper = mount(<GithubWidget username="test" />)

    expect(wrapper.containsAllMatchingElements([
      <UserDetails />,
      <UserStats />,
      <hr />,
      <Repositories />,
      <Footer />
    ])).to.equal(true)
  })
})
