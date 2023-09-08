'use client';
import React from 'react';
import useSound from 'use-sound';

import styles from './DrumMachine.module.css';
import {useSoundSwitch} from "../SoundSwitchContextProvider";

const SOUND_SRC = '/909-drums.mp3';

function DrumMachine() {
    const {soundEnabled} = useSoundSwitch();
    const [play] = useSound(SOUND_SRC, {
        sprite: {
            kick: [0, 350],
            hihat: [374, 160],
            snare: [666, 290],
            cowbell: [968, 200],
        },
        soundEnabled,
    });

    return (
        <div className={styles.wrapper}>
            <button
                style={{ background: soundEnabled ? 'hsl(234deg 54% 53%)' : 'gray' }}
                onClick={() => play({id: 'kick'})}
            >
                Kick
            </button>
            <button
                style={{ background: soundEnabled ? 'hsl(234deg 54% 53%)' : 'gray' }}
                onClick={() => play({id: 'hihat'})}
            >
                Hat
            </button>
            <button
                style={{ background: soundEnabled ? 'hsl(234deg 54% 53%)' : 'gray' }}
                onClick={() => play({id: 'snare'})}
            >
                Snare
            </button>
            <button
                style={{ background: soundEnabled ? 'hsl(234deg 54% 53%)' : 'gray' }}
                onClick={() => play({id: 'cowbell'})}
            >
                Cowbell
            </button>
        </div>
    );
}

export default DrumMachine;
