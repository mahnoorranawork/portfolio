import React from 'react'
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Profile from '@assets/static/images/profile.png'


export default function MainAvatar () {
    return (
        <Avatar sx={{ width: 200, height: 200 }} alt="Hassan Rana" src={Profile} />
    )
}