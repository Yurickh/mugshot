import React from 'react'
import styled from '@emotion/styled/macro'
import { useDrag } from 'react-use-gesture'

import names from './names'
import near from './near'
import useStack from './useStack'
import { sample, randomNumberWithLength } from './random'

const colors = {
  background: '#171717',
  text: '#FFFFFF',
  textNeutral: '#EAE7E4',
}

const Backdrop = styled.div`
  background-color: ${colors.background};
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
  color: ${colors.text};
  font-family: 'Share Tech Mono', monospace;
  text-transform: uppercase;

  margin: 0;
  grid-area: ${({ area }) => area};
  text-align: center;
  user-select: none;
`

const Subtext = styled(Text)`
  font-size: 10vh;
  color: ${colors.textNeutral};
`

function createName() {
  const first = sample(names.first)
  const last = sample(names.last)

  return `${first} ${last}`
}

export default function Mugshot() {
  const { current: name, push, pop } = useStack([createName()])

  const bind = useDrag(({ direction: [dx, dy], distance, down }) => {
    // onClick
    if (!down && near(dx, 0) && near(dy, 0) && near(distance, 0)) {
      push(createName())
    }

    // onDragRight
    if (!down && near(dx, 1) && near(dy, 0) && distance >= 100) {
      pop()
    }
  })

  return (
    <Backdrop {...bind()}>
      <Subtext>{randomNumberWithLength(10)}</Subtext>
      <Subtext>{new Date().toLocaleDateString()}</Subtext>

      <Text area="name" vw={100}>
        {name}
      </Text>
      <Subtext area="dept">Police Dept.</Subtext>
    </Backdrop>
  )
}
