import * as React from 'react'
import { useMemo } from 'react'
import styled from 'styled-components'
import * as styles from '../../../styles'
import { useSwipeItemOpener } from './useSwipeItemOpener'
// @ts-ignore
import SVGInline from 'react-svg-inline'

// ______________________________________________________
//
// @ Types

type Props = {
  render: (opend: boolean) => JSX.Element
  className?: string
}
// ______________________________________________________
//
// @ View

const View = (props: Props) => {
  const {
    opend,
    containerStyle,
    handleTouchDown,
    handleTouchUp,
    handleTouchMove
  } = useSwipeItemOpener()
  return (
    <div
      className={props.className}
      onTouchStart={handleTouchDown}
      onTouchEnd={handleTouchUp}
      onTouchCancel={handleTouchUp}
      onTouchMove={handleTouchMove}
    >
      {useMemo(
        () => (
          <div className="icon">
            <SVGInline
              svg={require('./assets/email.svg')}
            />
          </div>
        ),
        []
      )}
      <div className="container" style={containerStyle}>
        {useMemo(() => props.render(opend), [opend])}
      </div>
    </div>
  )
}
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  position: relative;
  overflow: hidden;
  background-color: ${styles.blue};
  > .icon {
    position: absolute;
    top: 50%;
    left: 22px;
    margin-top: -15px;
  }
  > .container {
    padding: 10px 20px;
    position: relative;
    background: #ffffff;
  }
`