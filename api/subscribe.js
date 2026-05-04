export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body || {};

  if (!email || typeof email !== 'string' || email.length > 254 || !email.includes('@')) {
    return res.status(400).json({ error: 'Email inválido' });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const listId = parseInt(process.env.BREVO_LIST_ID, 10);

  if (!apiKey || !Number.isFinite(listId)) {
    console.error('Brevo env vars not configured');
    return res.status(500).json({ error: 'Servicio no configurado' });
  }

  try {
    const brevoRes = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify({
        email,
        listIds: [listId],
        updateEnabled: true,
      }),
    });

    if (brevoRes.ok || brevoRes.status === 204) {
      return res.status(200).json({ ok: true });
    }

    const data = await brevoRes.json().catch(() => ({}));
    console.error('Brevo error:', brevoRes.status, data);
    return res.status(502).json({ error: 'No se pudo registrar el email' });
  } catch (err) {
    console.error('Subscribe error:', err);
    return res.status(500).json({ error: 'Error en el servidor' });
  }
}
