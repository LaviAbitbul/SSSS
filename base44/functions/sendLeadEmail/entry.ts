import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);

    const body = await req.json();
    const { name, phone, area, message } = body || {};

    if (!name || !phone) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Find the admin user (the app owner) to send the email to
    const admins = await base44.asServiceRole.entities.User.filter({ role: 'admin' });
    const recipientEmail = admins?.[0]?.email;

    if (!recipientEmail) {
      return Response.json({ error: 'No admin user found to receive emails' }, { status: 500 });
    }

    // Save the lead to the database
    const lead = await base44.asServiceRole.entities.Lead.create({
      name,
      phone,
      area: area || '',
      message: message || '',
      source: 'website_form',
      email_sent: false,
    });

    // Build email body
    const emailBody = `
פנייה חדשה התקבלה מהאתר

------------------------------
שם מלא: ${name}
טלפון: ${phone}
תחום הפנייה: ${area || '—'}
------------------------------

תיאור הפנייה:
${message || '(לא צוין)'}

------------------------------
תאריך: ${new Date().toLocaleString('he-IL', { timeZone: 'Asia/Jerusalem' })}
`.trim();

    // Send notification email to the admin
    await base44.asServiceRole.integrations.Core.SendEmail({
      from_name: 'אתר נעמי בל גונן',
      to: recipientEmail,
      subject: `פנייה חדשה מהאתר - ${name}`,
      body: emailBody,
    });

    // Mark lead as emailed
    await base44.asServiceRole.entities.Lead.update(lead.id, { email_sent: true });

    return Response.json({ success: true, lead_id: lead.id });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});