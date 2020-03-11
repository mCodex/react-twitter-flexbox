import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faBell,
  faEnvelope,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import Content from '../Content';

import { Container, RightContainer, Wrapper } from './styles';

const Header = () => {
  return (
    <Container>
      <Content>
        <Wrapper>
          <nav>
            <ul>
              <li>
                <FontAwesomeIcon icon={faHome} />
                Home
              </li>
              <li>
                <FontAwesomeIcon icon={faBell} />
                Notifications
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                Messages
              </li>
            </ul>
          </nav>
          <FontAwesomeIcon icon={faTwitter} color="#55acee" size="2x" />

          <RightContainer>
            <input type="text" />
            <FontAwesomeIcon icon={faUserCircle} size="3x" />

            <button type="button">Tweet</button>
          </RightContainer>
        </Wrapper>
      </Content>
    </Container>
  );
};

export default Header;
