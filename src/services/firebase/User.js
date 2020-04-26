import {auth} from './Config';
import {firestore} from './Config';
import KEYS from './Constant';

export const getUser = () => {

  return new Promise((resolve, reject) => {
    const {uid} = auth().currentUser;
    firestore()
      .collection(KEYS.TABLE_USER)
      .doc(uid)
      .get()
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(new Error(error));
      });
  });
};

export const getUserFilter = (key, op, value) => {
  return new Promise((resolve, reject) => {
    firestore()
      .collection(KEYS.TABLE_USER)
      .where(key, op, value)
      .get()
      .then(res => {
        if (!res.empty) {
          let result = res.docs.map(item => item.data());
          resolve(result);
        }
        resolve([]);
      })
      .catch(error => {
        reject(new Error(error));
      });
  });
};

export const SaveUser = model => {
  return new Promise((resolve, reject) => {
    const {uid} = auth().currentUser;
    firestore()
      .collection(KEYS.TABLE_USER)
      .doc(uid)
      .set(model)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(new Error(error));
      });
  });
};

export const UpdatePhoto = photo => {
  return new Promise((resolve, reject) => {
    const {uid} = auth().currentUser;

    firestore()
      .doc(`${KEYS.TABLE_USER}/${uid}`)
      .update({
        // photo: firestore.Blob.fromBase64String(photo),
        photo,
      })
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(new Error(error));
      });
  });
};
