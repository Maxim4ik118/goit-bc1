import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.scss';

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
    JSX Element - він не має можливості динамічно створяватися і використовувати одні й тіж самі змінні.
    JSX.Component - це функція, яка приймає в себе пропси(динамічно) і повертає нам JSX розмітку  

    props - параметри/аргументи/пропси компонента, це завжди о'єкт.
    ЗАУВАЖЕННЯ!!!
     - завжди слідкувати за правилністю назв пропсів, що ви передаєте та отримуєте.

    !!!!
     - Пропи className та children можуть бути не обов'язковими, решта має бути .isRequired 

    !!!!
    showDiscount - рівносильно showDiscount={true}

    !!!!
    rfce - React function snippet

    Приклад!
    const tacos = [
    {
      id: 1,
      imageUrl:
        'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640',
      productPrice: 10.99,
      showDiscount: true,
    },
    {
      id: 2,
      imageUrl:
        'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640',
      productPrice: 9.78,
      showDiscount: false,
    },
    {
      id: 3,
      imageUrl:
        'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640',
      productPrice: 6.36,
      showDiscount: true,
    },
  ];

  {tacos.map(taco => {
        return (
          <TacoItem
            key={taco.id}
            imageUrl={taco.imageUrl}
            productPrice={taco.productPrice}
            showDiscount={taco.showDiscount}
          />
        );
      })}


   STYLING!
   
   1. npm i sass
   2. Створити файл [ComponentName].scss
   3. Імпортувати цей файл до вашого компонента -> import './[ComponentName].scss'
 */
