const connection = require('./../../../config/db');
const DemoUser = require('./../../../models/DemoUser');

export async function POST(req) {
    await connection();
    const body = await req.json();
    const newUser = new DemoUser({
        firstName: body.firstName || "",
        lastName: body.lastName || "",
        email: body.email || "",
        phone: body.phone || "",
        linkedInProf: body.linkedin || "",
        subject: body.subject || "",
        message: body.message || ""
    });

    try {
        await newUser.save();
        return new Response(
            JSON.stringify({message: 'Stored in DB'}),
            {status: 200}
        );
    } catch(e) {
        return new Response(
            JSON.stringify({message: `Error encountered: ${e}`}),
            {status: 400}
        );
    }
}