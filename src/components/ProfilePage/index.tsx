import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        {/* <EditButton outlined>Editar perfil</EditButton> */}
        <h1>João Paulo</h1>
        <h2>@joaopaulo</h2>

        <p>
          Developer at <a href="https://rocketseat.com.br">@Rocketseat</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido em 28 de agosto de 2004
          </li>
        </ul>

        <Followage>
          <span>
            Seguindo <strong>94</strong>
          </span>
          <span>
            <strong>641 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
    </Container>
  )
}

export default ProfilePage