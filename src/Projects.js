import React from 'react'

const Projects = () => {
  return (
    <>
    <div className='projectTitle'><div className='aquac'>03.</div> Some Things I’ve Built</div>
    <div className='projectAll'><a href='#'>view all here...</a></div>
    <div className='projects'>
      <div className='elements'>
          <div className='elements__title'>Time to have more fun</div>
          <p className='elements__description'>A single page web app for helping me choose where to travel built with Next.js, Firebase and Tailwind CSS</p>
      </div>
      <div className='elements'>
          <div className='elements__title'>Integrating Algolia Search with WordPress Multisite</div>
          <p className='elements__description'>A single page web app for helping me choose where to travel built with Next.js, Firebase and Tailwind CSS</p>
      </div>
      <div className='elements'>
          <div className='elements__title'>Building a Headless Mobile App CMS From Scratch</div>
          <p className='elements__description'>A single page web app for helping me choose where to travel built with Next.js, Firebase and Tailwind CSS</p>
      </div>

    </div>
    </>
  )
}

export default Projects
