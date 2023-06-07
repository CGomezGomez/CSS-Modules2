import { v4 } from "uuid";

export const CARD = [
    {
        id: v4(),
        name:'Supervisor',
		description :'Monitors activity to identify project roadblocks',
		src:'/public/images/icon-supervisor.svg',
		alt:'Supervisorn',
        color:'lightblue',
        grid:'grid'
    },
    {
        id: v4(),
        name:'Team Builder',
		description :'Scans our talent network to create the optimal team for your project',
		src:'/public/images/icon-team-builder.svg',
		alt:'Team',
        color:'red',
        grid:'grid2'
    },
    {
        id: v4(),
        name:'Karma',
		description :'Regularly evaluates our talent to ensure quality',
		src:'/public/images/icon-karma.svg',
		alt:'Karma',
        color:'yellow',
        grid:'grid3'
    },
    {
        id: v4(),
        name:'Calculator',
		description :'Uses data from past projects to provide better delivery estimates',
		src:'/public/images/icon-calculator.svg',
		alt:'Calculator',
        color:'blue',
        grid:'grid4'
    },
]