import React from 'react'
import Content from './Content/Content'
import Sidebar from './Sidebar/Sidebar'

const Body = () => {
    return (
        <div className='body'>
            <Sidebar />
            <Content />
        </div>
    )
}

export default Body