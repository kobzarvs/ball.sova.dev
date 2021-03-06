/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import { useStore, useList } from 'effector-react';
import styled, { StyledComponent } from 'styled-components';
import {
  $difficulty,
  $moves,
  $state,
  $tubesWithSelected,
  BallColor,
  difficultyClicked,
  restartClicked,
  startClicked,
  toMainMenuClicked,
  tubeClicked,
} from './model';
import { $undoCount, $redoCount, undoClicked, redoClicked } from './history';

const $isWon = $state.map((state) => state === 'won');

export const HomePage: React.FC = () => {
  const state = useStore($state);

  if (state === 'start') {
    return <StartScreen />;
  }

  return <InPlay />;
};

const StartScreen: React.FC = () => {
  const difficulty = useStore($difficulty);

  return (
    <Content>
      <Title>
        LA<span>BALL</span>ATORY
      </Title>
      <fieldset>
        <legend>Difficulty</legend>
        <Button
          selected={difficulty === 'easy'}
          onClick={() => difficultyClicked('easy')}
          text="Easy"
        />
        <Button
          selected={difficulty === 'medium'}
          onClick={() => difficultyClicked('medium')}
          text="Medium"
        />
        <Button
          selected={difficulty === 'hard'}
          onClick={() => difficultyClicked('hard')}
          text="Hard"
        />
      </fieldset>
      <br />
      <Button onClick={startClicked} text="Start game" />
    </Content>
  );
};

const Content = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 300;

  & span {
    text-decoration: underline;
  }
`;

interface Button {
  selected?: boolean;
  text: React.ReactNode;
}

const buttonMap = ({ selected, text }: Button) => ({
  'data-selected': selected ?? false,
  type: 'button',
  children: text,
});

const Button = styled.button.attrs(buttonMap)`
  background-color: white;
  color: black;
  padding: 0.6rem 1rem;
  font-size: 1.3rem;
  margin: 0 0.2rem;
  border: 2px solid lightgray;
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: #f1f1f1;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px lightblue;
    border-color: lightblue;
  }

  &[data-selected='true'] {
    border-color: gray;
    background-color: gray;
    color: white;
  }
`;

export const InPlay: React.FC = () => {
  const isWon = useStore($isWon);

  const tubes = useList($tubesWithSelected, (tube, position) => (
    <Tube tube={tube} position={position} onClick={tubeClicked} />
  ));

  return (
    <>
      <div>
        <Button onClick={toMainMenuClicked} text="←" />
        <Button onClick={restartClicked} text="Restart" />
        <Moves />
        <UndoButton />
        <RedoButton />
      </div>
      <Container>{tubes}</Container>
      {isWon && <WonScreen />}
    </>
  );
};

const WonScreen = () => {
  const moves = useStore($moves);

  return (
    <Won>
      <h2>You won!</h2>
      <Button onClick={restartClicked} text="New game" />
      <Button onClick={toMainMenuClicked} text="Menu" />
      <h3>In {moves} moves</h3>
    </Won>
  );
};

const UndoButton = () => {
  const count = useStore($undoCount);

  return (
    <Button
      onClick={undoClicked}
      text={
        <>
          ↩<sup>{count}</sup>
        </>
      }
    />
  );
};

const RedoButton = () => {
  const count = useStore($redoCount);

  return (
    <Button
      onClick={redoClicked}
      text={
        <>
          <sup>{count}</sup>↪
        </>
      }
    />
  );
};

const MovesContent: React.FC<{ className?: string }> = ({ className }) => {
  const count = useStore($moves);

  return <span className={className}>Moves: {count}</span>;
};

const Moves = styled(MovesContent)`
  color: black;
  padding: 0.6rem 0.4rem;
  font-size: 1.3rem;
  margin: 0;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 38rem;
`;

const Won = styled.div`
  display: flex;
  flex-flow: column;
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(6px);
  align-items: center;
  padding-top: 5rem;

  & > * + * {
    margin-top: 1rem;
  }
`;

type TubeProps = {
  tube: {
    balls: Array<BallColor>;
    over: BallColor | null;
    complete: boolean;
  };
  position: number;
  onClick: React.EventHandler<React.MouseEvent<HTMLDivElement>>;
};

const Tube: React.FC<TubeProps> = ({ tube, position, onClick }) => (
  <TubeHolder onClick={onClick} data-position={position}>
    <TubeTop>{tube.over !== null ? <Ball ball={tube.over} /> : null}</TubeTop>
    <TubeGlass complete={tube.complete}>
      {tube.balls.map((color, index) => (
        <Ball key={index} ball={color} />
      ))}
    </TubeGlass>
  </TubeHolder>
);

const TubeHolder = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const TubeTop = styled.div`
  display: flex;
  height: 3rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 4px solid lightgray;
`;

type Styled<T extends object> = StyledComponent<'div', T, T>;

interface Glass {
  complete: boolean;
}

const glassMap = ({ complete }: Glass) => ({
  'data-complete': complete,
});

const TubeGlass: Styled<Glass> = styled.div.attrs(glassMap)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-shrink: 0;
  align-items: center;
  border: 2px solid lightgray;
  border-top: none;
  width: 3rem;
  height: 10rem;
  padding-bottom: 0.4rem;
  padding-top: 0.4rem;
  border-bottom-left-radius: 2.4rem;
  border-bottom-right-radius: 2.4rem;

  &[data-complete='true'] {
    background-color: lightgray;
  }
`;

interface BallProps {
  ball: BallColor;
}

const colors = [
  'blue',
  'red',
  'yellow',
  'lime',
  'purple',
  'orange',
  'pink',
  'brown',
  'lightblue',
  'gray',
  'cyan',
  'darkgreen',
];

const ballMap = ({ ball }: BallProps) => ({
  style: { '--ball-color': colors[ball] },
});

const Ball: Styled<BallProps> = styled.div.attrs(ballMap)`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 2px solid lightgray;
  background-color: var(--ball-color);
  margin: 1px;
  flex-shrink: 0;
`;
