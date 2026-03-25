import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  category: z.string().min(1, "Please select a category"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = contactSchema.parse(body);

    // Log inquiry to console (works without database)
    console.log("📧 NEW CONTACT INQUIRY:");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("Name:", validated.name);
    console.log("Email:", validated.email);
    console.log("Phone:", validated.phone || "Not provided");
    console.log("Category:", validated.category);
    console.log("Message:", validated.message);
    console.log("Time:", new Date().toISOString());
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

    // TODO: Uncomment when database is ready
    // const inquiry = await prisma.contactInquiry.create({
    //   data: {
    //     name: validated.name,
    //     email: validated.email,
    //     phone: validated.phone || null,
    //     category: validated.category,
    //     message: validated.message,
    //   },
    // });
    // return NextResponse.json({ success: true, id: inquiry.id });

    return NextResponse.json({
      success: true,
      id: "temp-" + Date.now(),
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: error.issues[0].message },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: "Failed to submit inquiry" },
      { status: 500 }
    );
  }
}
