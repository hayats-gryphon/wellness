import React from 'react'

const About = () => {
  return (
    <div className="about-parent">
      <div className="about">
        <h1>About</h1>
        <p>
          Punchabug was built by Christine Kim, June Hosoya, Alice He, and
          Alexandra Beautyman as a Capstone project for the Grace Hopper Program
          at Fullstack Academy of Code.
        </p>
        <p>
          We used PostgresSql, Sequelize.js, Node.js, Express.js, React.js,
          Redux.js, HTML, and CSS, as well as PoseNet (from TensorFlow), a
          pre-trained machine learning model for realtime human pose estimation
          in the browser.
        </p>
        <p>Special thanks are owed to the creators of our images and sounds:</p>
        <ul>
          <li>
            Leaf and flower icons made by{' '}
            <a
              href="http://www.freepik.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Freepik
            </a>{' '}
            from{' '}
            <a
              href="http://www.flaticon.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              www.flaticon.com
            </a>
          </li>
          {/* <li>
          Flower icon made by{' '}
          <a
            href="http://www.freepik.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Freepik
          </a>{' '}
          from{' '}
          <a
            href="http://www.flaticon.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            www.flaticon.com
          </a>
        </li> */}
          <li>
            Ladybug icon made by Rwida A. Kamel from{' '}
            <a
              href="http://www.pngtree.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              www.pngtree.com
            </a>
          </li>
          <li>
            Lightning bug icon from the public domain, sourced from by{' '}
            <a
              href="http://www.clker.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              www.clker.com
            </a>
          </li>
          <li>
            Music and sounds by{' '}
            <a
              href="https://soundcloud.com/map_composer/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Pierre Malleret
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default About
