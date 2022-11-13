import React from 'react'

import Header from '../../components/Profile/Header/Header'
import Edit from '../../components/Profile/Edit/Edit'
const EditPanel = () => {
    return (
        <div style={{ backgroundColor: '#F5F5F5' }}>

            <Header text="Profile / Edit" />
            <Edit />
        </div>
    )
}

export default EditPanel
