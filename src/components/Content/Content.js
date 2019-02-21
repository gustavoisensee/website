import React, { PureComponent } from 'react';
import Market from '../../enum/Market';
import getMessage from '../../utils';
import './Content.scss';

class Content extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      market: localStorage.market ? localStorage.market : Market.EN_US,
    };
  }
  getButtonClass(market) {
    return `button ${this.state.market === market ? 'active' : ''}`;
  }
  handleChangeMarket(market) {
    this.setState({ market });
    localStorage.market = market;
  }
  render() {
    const { market } = this.state;
    const locale = getMessage(market);

    return (
      <div className="Content">
        <h1>Gustavo Isensee</h1>
        <div className="row">
          <h2>{locale.content.title}</h2>
        </div>
        <p>{locale.content.description}</p>
        <div className="content-button">
          <button
            className={this.getButtonClass(Market.PT_BR)}
            onClick={() => this.handleChangeMarket(Market.PT_BR)}
          >
            {locale.content.portuguese}
          </button>
          <button
            className={this.getButtonClass(Market.EN_US)}
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
