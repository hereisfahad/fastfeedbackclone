import { db, auth } from '@/lib/firebase-admin';

export default async (req, res) => {
  const { method, query, body } = req
  const { feedbackId } = query

  if (method === 'POST') {
    try {
      await auth.verifyIdToken(req.headers['token'])
      await db
        .collection('feedback')
        .doc(feedbackId)
        .set(body, { merge: true });
      res.status(200).json({ success: true, message: "Updated status successfully" })
    } catch (error) {
      res.status(500).json({ error })
    }
  }
}
