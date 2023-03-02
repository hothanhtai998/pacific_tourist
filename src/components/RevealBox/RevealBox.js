import Reveal from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(200px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
function RevealBox({ children }) {
  return (
    <Reveal triggerOnce keyframes={customAnimation}>
      {children}
    </Reveal>
  );
}

export default RevealBox;
