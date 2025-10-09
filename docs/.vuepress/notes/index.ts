import { defineCollections } from "vuepress-theme-plume";
import FeynmanIII from "./feynman-iii.ts";
import Integral from "./integral.ts";
import cosmos from "./cosmos.ts";
import writing from "./writing.ts";
import complex from "./complex.ts";
import selfLearnGR from "./self-learn-GR.ts";
import quantumMechanics from "./quantum-mechanics.ts";
import Electrodynamics from "./electrodynamics.ts";
import astroFront from "./astro-front.ts";
import biophysics from "./biophysics.ts";
import physicsFront from "./physics-front.ts";
import astroStatistic from "./astro-statistic.ts"
import equationMP from "./equation-m-p.ts";

export const notes = defineCollections([
	FeynmanIII,
	Integral,
	cosmos,
	writing,
	complex,
	selfLearnGR,
	quantumMechanics,
	Electrodynamics,
	astroFront,
	biophysics,
	physicsFront,
	astroStatistic,
	equationMP,
]);
