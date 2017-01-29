// Libs
import React, { PropTypes } from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

// Component
import Repositories from './Repositories'
import Repository from './Repository'

const repos = [
  {
    id: 1,
    stars: 2,
    stargazers_count: 2,
    url: 'www.google.com/1',
    name: 'best_repo_ever',
    language: 'javascript',
  },
  {
    id: 2,
    stars: 15,
    stargazers_count: 15,
    url: 'www.google.com/2',
    name: 'even_better_repo_ever',
    language: 'C#',
  },
  {
    id: 3,
    stars: 4,
    stargazers_count: 4,
    url: 'www.google.com/3',
    name: 'notso_better_repo_ever',
    language: 'java',
  },
  {
    id: 4,
    stars: 17,
    stargazers_count: 17,
    url: 'www.google.com/4',
    name: 'even_better_repo_ever',
    language: 'Pascal',
  },
]
describe('<Repositories />', () => {
  it('should render number of repos specified by top prop', () => {
    const wrapper = shallow(<Repositories repositories={repos} top={2} />)
    expect(wrapper.find(Repository)).to.have.length(2)
  })

  it('should display repos ordered by stargazers', () => {
    const sortedTestData = repos.sort((a, b) => (b.stargazers_count - a.stargazers_count))
    const wrapper = shallow(<Repositories repositories={repos} top={2} />)

    const topRepos = wrapper.find(Repository)

    topRepos.forEach((repo,index)=>{
      expect(repo.prop('url')).to.equal(sortedTestData[index].url)
      expect(repo.prop('name')).to.equal(sortedTestData[index].name)
      expect(repo.prop('language')).to.equal(sortedTestData[index].language)
      expect(repo.prop('stars')).to.equal(sortedTestData[index].stars)
    })
  })
})

