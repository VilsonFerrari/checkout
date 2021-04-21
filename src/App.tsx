import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFruits } from './actions/get_fruit';
import { addFruit } from './actions/add_fruit';
import { removeFruit } from './actions/remove_fruit';
import { calculate } from './actions/calculate';
import { FruitModel } from './domain/models';
import styled from 'styled-components';

const FruitList = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`

const FruitItem = styled.div`
  border-radius: 14px;
  border: 0;
  background: white;
  padding: 15px;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, .16);
  margin-bottom: 20px;

  h1 {
    font-family: Arial;
    font-size: 18px;
    text-transform: uppercase;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 30px;
  }
`

const FruitImage = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  height: 200px;

  img {
    width: 100%;
  }
`

const FruitButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    cursor: pointer;
    background: white;
    border: 2px solid #000;
    color: #000;
    font-size: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    
    &:hover { 
      background: #000;
      color: #fff;
    }
  }

  span {
    font-family: Arial;
    font-size: 30px;
  }
`

const CheckoutButton = styled.button`
  max-width: 100%;
  font-size: 35px;
  border: 0;
  display: block;
  margin: 30px auto;
  text-transform: uppercase;
  font-family: Arial;
  color: #fff;
  background-color: #3b72f1bf;
  border-radius: 30px;
  padding: 20px;
`

const App = ({ fruits, basket, total, getFruits, addFruit, removeFruit, calculate }: any) => {
  useEffect(() => {
    (async () => {
      getFruits()
    })()
  }, [getFruits])

  const getAmount = (el: FruitModel) => 
    basket.find(({ fruit }: any) => fruit.name === el.name)?.amount ?? 0

  return (
    <div>
      {fruits.length ? (
        <FruitList>
          {fruits.map((fruit: FruitModel, idx: number) => (
            <FruitItem key={idx} style={{ cursor: 'pointer' }}>
              <FruitImage>
                <img src={fruit.image} alt={fruit.name}/>
              </FruitImage>
              <h1>
                {fruit.name}
              </h1>

              <FruitButtons>
                <button onClick={() => removeFruit(fruit)}>-</button>
                <span>{getAmount(fruit)}</span>
                <button onClick={() => addFruit(fruit)}>+</button>
              </FruitButtons>
            </FruitItem>
          ))}
        </FruitList>
      ) : (
        <p>There are fruits available at the moment.</p>
      )}

      <CheckoutButton onClick={() => calculate({ fruits: basket })}>
        Calculate
        {total ? <strong> ${total}</strong> : null}
      </CheckoutButton>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  fruits: state.fruits.fruits,
  basket: state.fruits.basket.fruits,
  total: state.fruits.total
})

const mapDispatchToProps = (dispatch: any) => 
  bindActionCreators({ getFruits, addFruit, removeFruit, calculate }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
