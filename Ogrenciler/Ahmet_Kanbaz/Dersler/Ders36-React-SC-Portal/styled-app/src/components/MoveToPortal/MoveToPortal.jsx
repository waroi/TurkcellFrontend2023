import { useState } from 'react'
import Portal from '../Portal/Portal';

const MoveToPortal = () => {
  const [visiblePortal, setVisiblePortal] = useState(false);
  const [portalTarget, setPortalTarget] = useState('portalContainer1');
  

  const containerStyle = {
    backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    margin: '10px 0'
  }

  const changeVisiblePortal = () => {
    setVisiblePortal(!visiblePortal);
  }

  const changePortalTarget = () => {
    setPortalTarget(portalTarget === 'portalContainer1' ? 'portalContainer2' : 'portalContainer1');
  }

  return (
    <div>
      <button onClick={changeVisiblePortal}>Portal Göster / Gizle</button>
      <button onClick={changePortalTarget}>Portalı Taşı</button>
      <div id="portalContainer1" style={containerStyle}>Container 1</div>
      <div id="portalContainer2" style={containerStyle}>Container 2</div>
      {
        visiblePortal && <Portal text={portalTarget} target={portalTarget} />
      }
    </div>
  )
}

export default MoveToPortal
