import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ShowsProps {}

const StyledShows = styled.div`
  color: pink;
`;

export function Shows(props: ShowsProps) {
  return (
    <StyledShows>
      <h1>Welcome to Shows!</h1>
    </StyledShows>
  );
}

export default Shows;
