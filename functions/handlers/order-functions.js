const { db } = require('../utils/admin');
const orderid = require('order-id')('kanapka-secret');

exports.checkout = (req, res) => {
  const generateDate = () => {
    const now = new Date();

    const year = now.getFullYear();

    let month = now.getMonth() + 1;
    if (month < 10) {
      month = `0${month}`;
    }

    let day = now.getDate();
    if (day < 10) {
      day = `0${day}`;
    }

    return {
      full: `${year}-${month}-${day}`,
      monthYear: `${year}-${month}`,
    };
  };

  const orderId = orderid.generate();
  const { full, monthYear } = generateDate();

  const userId = req.userId;
  const { orderDate: date, orderItems, userInfo } = req.body;

  db.doc(`users/${userId}/orderHistory/${orderId}`)
    .set({ date, order: orderItems })
    .then(() => {
      return res.status(200).send(orderId);
    })
    .catch((error) => {
      return res.status(500).send({ error: error.message });
    });

  db.collection('orders')
    .doc(monthYear)
    .collection(full)
    .add({ date, userInfo, orderItems })
    .catch((error) => {
      res.status(500).send({ error: error.message });
    });

  res.status(201).send({ date, orderId, orderItems });
};

exports.getUserOrderHistory = (req, res) => {
  const userId = req.userId;

  db.collection('users')
    .doc(userId)
    .collection('orderHistory')
    .get()
    .then((snapshot) => {
      const orderHistory = [];
      snapshot.forEach((doc) => {
        const order = doc.data();
        order.orderId = doc.id;
        orderHistory.push(order);
      })
      return res.json(orderHistory);
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).json({ error: error.message });
    });
};
