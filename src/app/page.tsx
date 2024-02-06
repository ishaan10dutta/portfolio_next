import Image from 'next/image'
import { Header } from './components/header'
import { Intro } from './components/intro'
import SectionDivider from './components/section-divider'
import About from './components/about'
import Projects from './components/projects'
import Skills from './components/skills'
import Experience from './components/experience'

export default function Home() {
  return (
    <main className='flex flex-col items-center px-4'>
      <Header/>
      <Intro/>
      <SectionDivider/>
      <About/>
      <Projects/>
      <Skills/>
      <Experience/>
    </main>
  )
}
