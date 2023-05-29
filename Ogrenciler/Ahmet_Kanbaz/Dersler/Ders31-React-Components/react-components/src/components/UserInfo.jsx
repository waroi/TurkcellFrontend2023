import React from 'react'
import PropTypes from 'prop-types';

const UserInfo = ({student}) => {
  return (
    <div>
      <li>{student}</li>
    </div>
  )
}

UserInfo.propTypes = {
  student: PropTypes.string.isRequired,
}

UserInfo.defaultProps = {
  student: 'Öğrenci Yok.'
}

export default UserInfo
