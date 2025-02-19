import { defineNotesConfig, defineNoteConfig } from 'vuepress-theme-plume'
import FeynmanIII from './feynman-iii.ts'
import Integral from './integral.ts'
import electrodynamics from './electrodynamics.ts'
import cosmos from './cosmos.ts'
import writing from './writing.ts'

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [
    FeynmanIII,
    Integral,
    electrodynamics,
    cosmos,
    writing
  ]
})