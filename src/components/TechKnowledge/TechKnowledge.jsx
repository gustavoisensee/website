import React, { useState } from 'react';
import PillGroup from '../PillGroup';
import LoadMore from '../LoadMore/';
import Pill from '../Pill';
import { all, list } from './consts';
import { getColor, getMessage } from '../../helpers';

const TechnicalSkills = () => {
  const [showAll, setShowAll] = useState(false);
  const locale = getMessage();

  const handleShowAll = () => {
    setShowAll(true);
  };

  const array = list.concat(showAll ? all : []);

  return (
    <PillGroup title={locale.pages.about.tech_knowledge.title}>
      <div className='flex flex-wrap'>
        {array.map((l, i) => (
          <Pill key={i} className={getColor()}>
            {l}
          </Pill>
        ))}
        {!showAll && (
          <LoadMore
            onClick={handleShowAll}
            text={locale.pages.about.show_all}
          />
        )}
      </div>
    </PillGroup>
  );
};

export default TechnicalSkills;