import { v4 } from "uuid";

export const CARD = [
    {
        id: v4(),
        name:'Supervisor',
		description :'Monitors activity to identify project roadblocks',
		src:'/public/images/icon-supervisor.svg',
		alt:'Supervisor',
        color:'lightblue'
    },
    {
        id: v4(),
        name:'Team Builder',
		description :'Scans our talent network to create the optimal team for your project',
		src:'/public/images/icon-team-builder.svg',
		alt:'Team',
        color:'red'
    },
    {
        id: v4(),
        name:'Karma',
		description :'Regularly evaluates our talent to ensure quality',
		src:'/public/images/icon-karma.svg',
		alt:'Karma',
        color:'yellow'
    },
    {
        id: v4(),
        name:'Calculator',
		description :'Uses data from past projects to provide better delivery estimates',
		src:'/public/images/icon-calculator.svg',
		alt:'Calculator',
        color:'blue'
    },
]