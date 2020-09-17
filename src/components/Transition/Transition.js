import React, { Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
import './style.scss';

const Transition = ({ show, children }) => (
  <CSSTransition
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
