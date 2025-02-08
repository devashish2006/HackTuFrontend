import React from 'react'
import GlowingEffectDemo from '../components/glowingEffectPage'
import { CoverDemo } from '../components/CoverPage'
import { FlipWordsDemo } from '../components/FlipWordsPage'
import { BackgroundBeamsWithCollisionDemo } from '../components/BackgroundBeamsPage'
import Footer from '../components/Footer'
import { CompareDemo } from '../components/ComparePage'


function Home() {
    return (
        <>
        <FlipWordsDemo />
        {/* <BackgroundBeamsWithCollisionDemo /> */}
        <GlowingEffectDemo />
        {/* <CoverDemo /> */}
        <CompareDemo />
        <Footer />
        </>
    )
}

export default Home
