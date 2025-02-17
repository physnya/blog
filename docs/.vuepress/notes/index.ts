import { defineNotesConfig, defineNoteConfig } from 'vuepress-theme-plume'
import FeynmanIII from './feynman-iii.ts'
import Integral1 from './integral.ts'
import electrodynamics from './electrodynamics.ts'
import cosmos from './cosmos.ts'

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [
    FeynmanIII,
    Integral1,
    electrodynamics,
    cosmos
  ]
})