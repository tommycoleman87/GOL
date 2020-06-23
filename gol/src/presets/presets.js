import React from 'react'
import { PresetsContainer } from './presetStyles'
const Presets = () => {
    return (
        <PresetsContainer>
            <h2>Presets</h2>
            <ul>
                <li>
                    <button>Pulsar</button>
                </li>
                <li>
                    <button>Blinker</button>
                </li>
            </ul>
        </PresetsContainer>
    )
}

export default Presets