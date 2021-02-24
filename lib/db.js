import firebase from './firebase';

const firestore = firebase.firestore();

export function createUser(uid, data) {
  return firestore
    .collection('users')
    .doc(uid)
    .set({ uid, ...data }, { merge: true });
}

export function createSite(data) {
  return firestore
    .collection('sites')
    .add(data);
}

export async function deleteSite(id) {
  await firestore.collection('sites').doc(id).delete();
  const snapshot = await firestore
    .collection('feedback')
    .where('siteId', '==', id)
    .get();

  const batch = firestore.batch();

  snapshot.forEach(doc => {
    batch.delete(doc.ref);
  });

  return batch.commit();
}

export async function updateSite(id, newValues) {
  return firestore.collection('sites').doc(id).update(newValues);
}

export async function createFeedback(data) {
  const siteDoc = await firestore.collection('sites').doc(data.siteId).get()
  return firestore
    .collection('feedback')
    .add({ ...data, siteName: siteDoc.data().name })
}

export function deleteFeedback(feedbackId) {
  return firestore.collection('feedback').doc(feedbackId).update({ isDeleted: true, isVisible: false });
}
