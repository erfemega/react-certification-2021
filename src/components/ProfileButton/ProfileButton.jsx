import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import useGlobal from '../../hooks/useGlobal';
import { Button, ToggleWrapper, ButtonWrapper, Option, NavLink, Avatar } from './styled';

function ProfileButton() {
  const [visible, setVisible] = useState(false),
    { globalState, logout } = useGlobal();
  let authenticatedOptions = <Option onClick={logout}>Logout</Option>,
    guestOptions = (
      <Option>
        <NavLink to="/login">Login</NavLink>
      </Option>
    ),
    profileButton = (
      <ButtonWrapper onBlur={() => setVisible(false)}>
        <Button onClick={() => setVisible(!visible)}>
          {globalState.authenticated ? (
            <Avatar src={globalState.userData.avatarUrl} alt="User avatar" />
          ) : (
            <FaUser />
          )}
        </Button>
        <ToggleWrapper visible={visible}>
          {globalState.authenticated ? authenticatedOptions : guestOptions}
        </ToggleWrapper>
      </ButtonWrapper>
    );
  return profileButton;
}

export default ProfileButton;
