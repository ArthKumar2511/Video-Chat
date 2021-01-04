import React from 'react'
import {Shield, Users, Lock} from 'react-feather'

export default (props) => {

  return (
    <div id='footer'>
      <div className='container'>
        <div className='row'>
          <h5>Contact</h5>
          <p>For press, or any other queries, <a href='mailto:coderarth@gmail.com'>Mail me</a>.</p>
        </div>
        <div className='row'>
          <h5>About</h5>
        </div>
        <div className='row'>
          <p>Created by Arth Awasthi.</p>
        </div>
        <div className='row'>
          <p>Copyright © 2021 Arth Awasthi</p>
        </div>
      </div>
    </div>
  )

}
