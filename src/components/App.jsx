import { Component } from 'react';
import { tacosData } from 'utils/helpers';
import TacoItem from './TacoItem/TacoItem';

class App extends Component {
  state = {
    tacos: tacosData ?? [],
    count: 0,
  };

  handleIncrement = () => {
    if (this.state.count >= 100) return;

    this.setState(prevState => {
      return {
        count: prevState.count + 1,
      };
    });

    // {count: 0, count: 0 + 1} -> { count: 1 }
  };

  handleDecrement = () => {
    if (this.state.count === 0) return;

    this.setState(prevState => {
      return {
        count: prevState.count - 1,
      };
    });

    // {count: 0, count: 0 + 1} -> { count: 1 }
  };

  onToggleDiscount = tacoId => {
    this.setState(prevState => {
      return {
        ...prevState,
        tacos: prevState.tacos.map(taco => {
          if (taco.id === tacoId) {
            return {
              ...taco,
              showDiscount: !taco.showDiscount,
            };
          }

          return taco;
        }),
      };
    });
  };

  onDeleteTaco = (tacoId) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        tacos: prevState.tacos.filter(taco => taco.id !== tacoId)// tacoId = 2 [{id: 1},{id: 2}, {id: 3}] -> [{id: 1}, {id: 3}]
      }
    })
  }

  render() {
    const { count, tacos } = this.state;

    return (
      <>
        {this.state.count === 100 && (
          <h2>You reached the limit of tacos! Stop!</h2>
        )}
        <div>
          <button onClick={this.handleIncrement}>+</button>
          <h3>Count: {count}</h3>
          <button onClick={this.handleDecrement}>-</button>
        </div>

        {tacos.map(taco => {
          return (
            <TacoItem
              key={taco.id}
              // id={taco.id}
              // imageUrl={taco.imageUrl}
              // productPrice={taco.productPrice}
              // showDiscount={taco.showDiscount}
              {...taco}
              onToggleDiscount={this.onToggleDiscount}
              onDeleteTaco={this.onDeleteTaco}
            />
          );
        })}
      </>
    );
  }
}

export { App };
