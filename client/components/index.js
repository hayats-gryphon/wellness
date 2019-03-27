/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as UserHome} from './menus/user-home'
export {Login, Signup} from './menus/auth-form'
export {default as PunchABug} from './boards/punchabug'
export {default as EntrancePage} from './menus/entrance'
export {default as Board} from './boards/board'
export {default as EndOfGame} from './menus/end-of-game'
export {default as Menu} from './main-menu'
export {default as Footer} from './menus/footer'
export {default as Scoreboard} from './boards/scoreboard'
export {default as LeaderBoard} from './boards/leaderBoard'
export {default as Instruction} from './menus/instruction'
export {default as MenuLevels} from './menus/menu-levels'
export {default as Loading} from './boards/loading'
export {default as NavButton} from './menus/navButton'
export {default as About} from './menus/about'
