import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import DrinkList from '../components/DrinkList'
import { getDrinkList } from '../actions/drinkActions'

const DrinkListScreen = ({ location, match }) => {
  const dispatch = useDispatch()
  const drinkType = match.params.drinktype
  const { drinks, title } = location

  const drinkState = useSelector((state) => state.drinkList)
  const { loading, error, drinkList } = drinkState

  useEffect(() => {
    dispatch(getDrinkList(drinkType))
  }, [dispatch, drinkType])

  return (
    <Container>
      {console.log('drink list ', drinkList)}
      {/* {console.log('params ', match.params.drinktype)} */}
      <h1>{title}</h1>
      {/* <DrinkList drinks={drinks} title={title} /> */}
    </Container>
  )
}

export default DrinkListScreen
