import React, { Component } from 'react'

// import local css as s.
import s from './styles.css'
// import global css as gs
import gs from './../../styles/grid.css'

import Card from '../../components/Card/Card'

class HomePage extends Component {

  render() {
    return (
      <div className={gs.container}>
        <div className={gs.size5of8}>
          <div className={gs.line}>
            <p>
              Imagine a world where a scientific paper can tell you if it is out of date.
            </p>
          </div>
        </div>
      </div>
    )
  }

}

export default HomePage
