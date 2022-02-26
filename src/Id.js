import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AddIcon from '@material-ui/icons/Add'
import SidebarChannel from './SidebarChannel'
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt'
import  InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import CallIcon from '@material-ui/icons/Call'
import { Avatar } from '@material-ui/core'
import HeadSetIcon from '@material-ui/icons/Headset'
import MicIcon from '@material-ui/icons/Mic'
import SettingsIcon from '@material-ui/icons/Settings'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import { auth } from './firebase'
import db from './firebase'

function Id() {

    const user = useSelector(selectUser)
    const [channels, setChannels ] = useState([])
    useEffect(() => {
        db.collection('channels').onSnapshot(snapshot => (
            setChannels(snapshot.docs.map(doc => ({
                id: doc.id,
                channel: doc.data()
            })))
        ))
    }, [])

    const handleChannel = () => {
        const channelName = prompt('Enter a channel name')
        if(channelName){
            db.collection('channels').add({
                channelName: channelName
            })
        }
    }
    
  return (
    <div className = 'sidebar__profile'>
    <Avatar 
        className = "sidebar__profileAvatar"
        onClick = { () => auth.signOut()}
        src = {user.photo}
    />
    <div className = "sidebar__profileInfo">
        <h3>{user.displayName}</h3>
        <p>#{user.uid.substring(0 , 5)}</p>
    </div>
    <div className = "sidebar__profileIcons">
        <MicIcon />
        <HeadSetIcon />
        <SettingsIcon />
    </div>
</div>
  )
}

export default Id