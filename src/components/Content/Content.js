import React, { PureComponent } from 'react';
import Market from '../../enum/Market';
import getMessage from '../../utils';
import './content.scss';

class Content extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      market: Market.EN_US,
    };
  }
  handleChangeMarket(market) {
    this.setState({ market });
  }
  render() {
    const locale = getMessage(this.state.market);

    return (
      <div className="content">
        <h1>{locale.content.description}</h1>
        <div className="content-button">
          <button
            className="button"
            onClick={() => this.handleChangeMarket(Market.PT_BR)}
          >
            {locale.content.portuguese}
          </button>
          <button
            className="button"
            onClick={() => this.handleChangeMarket(Market.EN_US)}
          >
            {locale.content.english}
          </button>
        </div>
      </div>
    );
  }
}

export default Content;
