import { db, auth } from '@/lib/firebase-admin';

export default async (req, res) => {
  try {
    const { uid } = await auth.verifyIdToken(req.headers['token'])
    const snapshot = await db.collection('sites').where('authorId', '==', uid).get();
    let sites = []
    snapshot.forEach(doc => sites.push({ id: doc.id, ...doc.data() }));
    res.status(200).json({ success: true, sites })
  } catch (error) {
    res.status(500).json({ error })
  }
}
