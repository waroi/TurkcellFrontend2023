/* eslint-disable react/prop-types */
import { Icon } from 'react-icons-kit'
import {stack} from 'react-icons-kit/icomoon/stack'
import {users} from 'react-icons-kit/fa/users'
import {userPlus} from 'react-icons-kit/fa/userPlus'
import {location} from 'react-icons-kit/icomoon/location'
import {link} from 'react-icons-kit/entypo/link'
import {quill} from 'react-icons-kit/icomoon/quill'
import {idCard} from 'react-icons-kit/fa/idCard'
import {share2} from 'react-icons-kit/icomoon/share2'
import {eye} from 'react-icons-kit/icomoon/eye'
import {starEmpty} from 'react-icons-kit/icomoon/starEmpty'
import {starFull} from 'react-icons-kit/icomoon/starFull'

export const Joined = ({color, size}) => <span style={{color:`${color}`}}><Icon size={size} icon={userPlus} /></span>
export const Repos = ({color, size}) => <span style={{color:`${color}`}}><Icon size={size} icon={stack} /></span>
export const Followers = ({color, size}) => <span style={{color:`${color}`}}><Icon size={size} icon={users} /></span>
export const Location = ({color, size}) => <span style={{color:`${color}`}}><Icon size={size} icon={location} /></span>
export const Blog = ({color, size}) => <span style={{color:`${color}`}}><Icon size={size} icon={link} /></span>
export const Bio = ({color, size}) => <span style={{color:`${color}`}}><Icon size={size} icon={quill} /></span>
export const IdCard = ({color, size}) => <span style={{color:`${color}`}}><Icon size={size} icon={idCard} /></span>
export const Share = ({color, size}) => <span style={{color:`${color}`}}><Icon size={size} icon={share2} /></span>
export const Watch = ({color, size}) => <span style={{color:`${color}`}}><Icon size={size} icon={eye} /></span>
export const StarEmpty = ({color, size}) => <span style={{color:`${color}`}}><Icon size={size} icon={starEmpty} /></span>
export const StarFull = ({color, size}) => <span style={{color:`${color}`}}><Icon size={size} icon={starFull} /></span>

