import { Children, CSSProperties, ReactNode } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { Transitions } from '~/types';

import transitions, { classNames } from './transitions';

interface Props {
  appear?: boolean;
  children: ReactNode;
  className?: string;
  enter?: boolean;
  exit?: boolean;
  style?: CSSProperties;
  timeout?: number;
  transition?: Transitions;
}

function Transition({
  appear = true,
  children,
  className,
  enter = true,
  exit = true,
  style,
  timeout = 300,
  transition = 'fade',
  ...rest
}: Props) {
  const Component = transitions[transition];

  if (!Component) {
    console.error(`Invalid transition: ${transition}`); // eslint-disable-line no-console

    return null;
  }

  return (
    <TransitionGroup className={className} style={style}>
      {Children.toArray(children)
        .filter(child => !!child)
        .map((child, key) => (
          <CSSTransition
            key={key}
            appear={appear}
            classNames={classNames[transition]}
            enter={enter}
            exit={exit}
            timeout={timeout}
            {...rest}
          >
            <Component>{child}</Component>
          </CSSTransition>
        ))}
    </TransitionGroup>
  );
}

export default Transition;
