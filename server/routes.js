import { Router } from 'express'
const router = Router()
import * as User from "./controllers/user.js"
import * as Events from "./controllers/events.js"
router.get('/home', (req, res) => {
    // res.send("hey router buddy");
    res.status(200).json({
        message: "hey router buddy"
    });
});
router.post('/add-user', User.addUserInCognito);
router.post('/user-login', User.userLogin);
router.post('/new-password-for-login', User.newPasswordRequiredForLogin);
router.post('/token-validation', User.accesstokenValidation);


router.get('/events', Events.getEvent);
router.post('/create-events', Events.createNewEvent);



export default router;