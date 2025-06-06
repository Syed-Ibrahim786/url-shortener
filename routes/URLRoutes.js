import express from "express"
import {createURL} from '../controllers/createURL.js'
import {redirectToOriginalURL} from '../controllers/redirectToOriginalURL.js'
const router = express.Router()

router.post('/', createURL )
router.get('/:shortLink', redirectToOriginalURL)

export default router