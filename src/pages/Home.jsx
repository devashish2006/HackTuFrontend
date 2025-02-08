import React from 'react'
import GlowingEffectDemo from '../components/glowingEffectPage'
import { CoverDemo } from '../components/CoverPage'
import { FlipWordsDemo } from '../components/FlipWordsPage'


function Home() {
    return (
        <>
        <FlipWordsDemo />
        <GlowingEffectDemo />
        <CoverDemo />
        </>
    )
}

export default Home
