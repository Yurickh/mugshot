import React from 'react'
import styled from '@emotion/styled/macro'

import names from './names'

const Backdrop = styled.div`
  background-color: black;
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-areas:
    'number data'
    'name   name'
    'name   name'
    'dept   dept';
  grid-template-rows: 30vh 1fr 1fr 30vh;
  justify-items: center;
  align-items: center;
`

const Text = styled.p`
  font-weight: normal;
  font-size: 18vh;
  color: white;
  font-family: 'Share Tech Mono', monospace;
  text-transform: uppercase;

  margin: 0;
  grid-area: ${({ area }) => area};
  text-align: center;
`

const Subtext = styled(Text)`
  font-size: 10vh;
`

function randomNumber(limit) {
  return parseInt(Math.random() * limit)
}

function randomSerial() {
  return [...Array(10)].map(() => randomNumber(10)).join('')
}

function createName() {
  const first = names.first[randomNumber(names.first.length)]
  const last = names.last[randomNumber(names.last.length)]

  return `${first} ${last}`
}

function App() {
  const [name, setName] = React.useState(createName())

  return (
    <Backdrop className="App" onClick={() => setName(createName())}>
      <Subtext>{randomSerial()}</Subtext>
      <Subtext>{new Date().toLocaleDateString()}</Subtext>

      <Text area="name" vw={100}>
        {name}
      </Text>
      <Subtext area="dept">Police Dept.</Subtext>
    </Backdrop>
  )
}

export default App
