/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as UserHome} from './user-home'
export {Login, Signup} from './auth-form'
export {default as PunchABug} from './punchabug'
export {default as EntrancePage} from './entrance'
export {default as Board} from './board'
export {default as EndOfGame} from './end-of-game'
export {default as Menu} from './main-menu'
export {default as Footer} from './footer'
export {default as Scoreboard} from './scoreboard'
export {default as LeaderBoard} from './boards/leaderBoard'
export {default as Instruction} from './instruction'
export {default as MenuLevels} from './menu-levels'
export {default as Loading} from './loading'
export {default as NavButton} from './navButton'
