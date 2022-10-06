import { Component } from 'react';
import { nanoid } from 'nanoid'
import { tacosData } from 'utils/helpers';
import TacoForm from './TacoForm/TacoForm';
import TacoItem from './TacoItem/TacoItem';

class App extends Component {
  state = {
    tacos: tacosData ?? [],
  };

  onToggleDiscount = tacoId => {
    this.setState(prevState => {
      return {
        tacos: prevState.tacos.map(taco => {
          if (taco.id === tacoId) {
            return {
              ...taco,
              discount: !taco.discount,
            };
          }

          return taco;
        }),
      };
    });
  };

  onDeleteTaco = tacoId => {
    this.setState(prevState => {
      console.log('prevState: ', prevState.tacos); // [{id: 1}, {id: 2}, {id: 3}]
      return {
        tacos: prevState.tacos.filter(taco => taco.id !== tacoId), // tacoId = 2 [{id: 1}, {id: 2}, {id: 3}] -> [{id: 1}, {id: 3}]
      };
    });
  };

  onAddTaco = data => {
    // data - це об'єкт taco
    const taco = {
      id: nanoid(),
      ...data,
    };

    this.setState(prevState => ({ tacos: [taco, ...prevState.tacos] }));
  };

  render() {
    const { tacos } = this.state;

    return (
      <>
        <TacoForm onAddTaco={this.onAddTaco} />
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
