import React from 'react'
import styled from '@emotion/styled/macro'

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
  justify-items: center;
  align-items: center;
`

const fontProportion = 2.43

const Text = styled.p`
  font-weight: normal;
  font-size: ${({ vw, children }) => (vw * fontProportion) / children.length}vh;
  color: white;
  font-family: 'Share Tech Mono', monospace;
  text-transform: uppercase;

  margin: 0;
  grid-area: ${({ area }) => area};
`

const Subtext = styled(Text)`
  font-size: 8vh;
`

function randomNumber() {
  return [...Array(10)].map(() => parseInt(Math.random() * 10)).join('')
}

function App() {
  return (
    <Backdrop className="App">
      <Subtext>{randomNumber()}</Subtext>
      <Subtext>{new Date().toLocaleDateString()}</Subtext>

      <Text area="name" vw={90}>
        Björn Dagerman
      </Text>
      <Text area="dept" vw={60}>
        Klarna Police Dept.
      </Text>
    </Backdrop>
  )
}

export default App
