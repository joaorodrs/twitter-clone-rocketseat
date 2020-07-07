import React from 'react'

import {
  Container,
  Header,
  BackIcon,
  ProfileInfo
} from './styles'

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>João Paulo Alencar</strong>
          <span>600 tweets</span>
        </ProfileInfo>

        {/* <ProfilePage /> */}

        {/* <BottomMenu>
          <HomeIcon />
          <SearchIcon />
          <BellIcon />
          <EmailIcon />
        </BottomMenu> */}
      </Header>
    </Container>
  )
}

export default Main