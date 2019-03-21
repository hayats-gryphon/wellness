const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.put('/:userId', async (req, res, next) => {
  try {
    console.log('THIS ISSSSSS REQ.BODY', req.body)
    const user = await User.findById(req.params.userId)
    await user.update({highscore: req.body.score})
    res.json(user.highscore)
  } catch (err) {
    next(err)
  }
})
