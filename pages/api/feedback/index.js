import { db, auth } from '@/lib/firebase-admin';

export default async (req, res) => {
  try {
    const { uid } = await auth.verifyIdToken(req.headers['token'])
    const snapshot = await db.collection('feedback').where('authorId', '==', uid).get();
    let feedback = []
    snapshot.forEach(doc => feedback.push({ id: doc.id, ...doc.data() }));
    res.status(200).json({ success: true, feedback })
  } catch (error) {
    res.status(500).json({ error })
  }
}
