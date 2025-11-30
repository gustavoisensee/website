import { useState } from "preact/hooks";
import PillGroup from "../PillGroup";
import LoadMore from "../../shared/LoadMore";
import Pill from "../Pill";
import { all, list } from "./consts";
import { getColor, getLocale } from "../../../helpers";

const locale = getLocale();

const TechnicalSkills = () => {
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(true);
  };

  const array = list.concat(showAll ? all : []);

  return (
    <PillGroup title={locale.pages.about.tech_knowledge.title}>
      <div className="flex flex-wrap">
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
