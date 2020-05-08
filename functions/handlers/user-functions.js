const { admin, db } = require('../utils/admin');
const { firebase } = require('../utils/firebase');
const {
  validateSignUpData,
  validateSignInData,
} = require('../utils/validators');

exports.signUp = (req, res) => {
  try {
    const newUser = {
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
      name: req.body.name,
      phoneNumber: req.body.phoneNumber,
    };

    const { valid, validationErrors: errors } = validateSignUpData(newUser);

    if (!valid) return res.status(400).json(errors);

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((data) => {
        admin.auth().updateUser(data.user.uid, {
          displayName: newUser.name,
          phoneNumber: newUser.phoneNumber,
        });
        return data.user.uid;
      })
      .then((userId) => {
        return db.collection('users').doc(userId).set({
          userId,
          name: newUser.name,
          email: newUser.email,
          phoneNumber: newUser.phoneNumber,
          createdAt: new Date(),
        });
      })
      .catch((error) => {
        return res.status(500).json({ error: error.message });
      });
    return res.status(201).send('Successful sign up');
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.signIn = async (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
  };

  const { valid, validationErrors: errors } = validateSignInData(user);

  if (!valid) return res.status(400).json(errors);

  await firebase.auth().signInWithEmailAndPassword(user.email, user.password)
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
