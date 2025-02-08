import React from 'react'
import GlowingEffectDemo from '../components/glowingEffectPage'
import { CoverDemo } from '../components/CoverPage'
import { FlipWordsDemo } from '../components/FlipWordsPage'
import { BackgroundBeamsWithCollisionDemo } from '../components/BackgroundBeamsPage'


function Home() {
    return (
        <>
        <BackgroundBeamsWithCollisionDemo />
        <FlipWordsDemo />
        <GlowingEffectDemo />
        <CoverDemo />
        </>
    )
}

export default Home
