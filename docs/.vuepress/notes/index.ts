import { defineNotesConfig, defineNoteConfig } from 'vuepress-theme-plume'
import FeynmanIII from './feynman-iii.ts'
import Integral from './integral.ts'
import cosmos from './cosmos.ts'
import writing from './writing.ts'
import complex from './complex.ts'
import selfLearnGR from './self-learn-GR.ts'
import quantumMechanics from './quantum-mechanics.ts'

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [
    FeynmanIII,
    Integral,
    cosmos,
    writing,
    complex,
    selfLearnGR,
    quantumMechanics,
  ]
})