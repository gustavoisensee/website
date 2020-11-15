import React, { Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
import './style.scss';

const Transition = ({ id, show, children }) => (
  <CSSTransition
    key={id}
    in={show}
    timeout={400}
    classNames='alert'
  >
    <Fragment>
      {children}
    </Fragment>
  </CSSTransition>
);

export default Transition;
