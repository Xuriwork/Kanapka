const { admin, db } = require('../utils/admin');
const { firebase } = require('../utils/firebase');
const {
  validateSignUpData,
  validateSignInData,
} = require('../utils/validators');

exports.signUp = (req, res) => {
  console.log(req.body);
  const newUser = {
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  };

  const { valid, errors } = validateSignUpData(newUser);

  console.log(errors);
  console.log(!valid);

  if (!valid) return res.status(404).send(errors);

  return firebase
    .auth()
    .createUserWithEmailAndPassword(newUser.email, newUser.password)
    .then((data) => {
      admin.auth().updateUser(data.user.uid, {
        displayName: newUser.firstName,
      });
      return data.user.uid;
    })
    .then((userId) => {
      return db.collection('users').doc(userId).set({
        userId,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        createdAt: new Date(),
      });
    })
    .catch((error) => {
      console.log('error-1', error);
      return res.status(500).json({ error: error.message });
    });
};

exports.signIn = async (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
  };

  const { valid, errors } = validateSignInData(user);

  if (!valid) return res.status(400).json(errors);

  return await firebase
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then((data) => {
      return data.user.getIdToken();
    })
    .then((token) => {
      return res.json({ token });
    })
    .catch((error) => {
      return res.status(500).json({ error: error.message });
    });
};
