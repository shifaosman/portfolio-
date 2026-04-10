import { jsPDF } from "jspdf";

const MARGIN = 18;
const PAGE_BOTTOM = 282;
const LINE = 5;
const GAP_AFTER_SECTION = 6;

/** Annotations plugin methods (not in bundled .d.ts) */
type JsPDFLinks = jsPDF & {
  getTextWidth(text: string): number;
  textWithLink(
    text: string,
    x: number,
    y: number,
    options: { url: string; maxWidth?: number },
  ): number;
};

const LINK_RGB: [number, number, number] = [29, 78, 216];
const TEXT_RGB: [number, number, number] = [0, 0, 0];

/** Plain-text CV (no emoji) for reliable PDF rendering */
export function downloadCvPdf() {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const pageW = doc.internal.pageSize.getWidth();
  const maxW = pageW - 2 * MARGIN;
  let y = MARGIN;

  const newPageIfNeeded = (h: number) => {
    if (y + h > PAGE_BOTTOM) {
      doc.addPage();
      y = MARGIN;
    }
  };

  const title = (text: string, size: number) => {
    newPageIfNeeded(size * 0.5 + 4);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(size);
    doc.text(text, MARGIN, y);
    y += size * 0.45 + 2;
  };

  const section = (text: string) => {
    newPageIfNeeded(10);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text(text, MARGIN, y);
    y += 7;
  };

  const paragraph = (text: string, indent = 0) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    for (const segment of text.split("\n")) {
      const t = segment.trim();
      if (!t) continue;
      const lines = doc.splitTextToSize(t, maxW - indent);
      for (const line of lines) {
        newPageIfNeeded(LINE);
        doc.text(line, MARGIN + indent, y);
        y += LINE;
      }
    }
    y += 2;
  };

  const bullet = (text: string) => {
    paragraph(`• ${text}`, 3);
  };

  title("Shifa Osman Musa", 18);

  const pdf = doc as JsPDFLinks;
  newPageIfNeeded(LINE * 5);
  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(10);

  pdf.setTextColor(...TEXT_RGB);
  pdf.text("Location: Mogadishu, Somalia", MARGIN, y);
  y += LINE;

  let x = MARGIN;
  pdf.text("Email: ", x, y);
  x += pdf.getTextWidth("Email: ");
  pdf.setTextColor(...LINK_RGB);
  x += pdf.textWithLink("shifaosman842@gmail.com", x, y, {
    url: "mailto:shifaosman842@gmail.com",
  });
  pdf.setTextColor(...TEXT_RGB);
  pdf.text(" | Phone: +252 618 036029", x, y);
  y += LINE;

  x = MARGIN;
  pdf.text("GitHub: ", x, y);
  x += pdf.getTextWidth("GitHub: ");
  pdf.setTextColor(...LINK_RGB);
  x += pdf.textWithLink("github.com/shifaosman", x, y, {
    url: "https://github.com/shifaosman",
  });
  pdf.setTextColor(...TEXT_RGB);
  pdf.text(" | LinkedIn: ", x, y);
  x += pdf.getTextWidth(" | LinkedIn: ");
  pdf.setTextColor(...LINK_RGB);
  pdf.textWithLink("linkedin.com/in/shifa-osman", x, y, {
    url: "https://www.linkedin.com/in/shifa-osman/",
  });
  y += LINE;

  pdf.setTextColor(...TEXT_RGB);
  x = MARGIN;
  pdf.text("Portfolio: ", x, y);
  x += pdf.getTextWidth("Portfolio: ");
  pdf.setTextColor(...LINK_RGB);
  pdf.textWithLink("shifaosman.dev", x, y, { url: "https://shifaosman.dev" });
  pdf.setTextColor(...TEXT_RGB);
  y += LINE + 2;

  y += GAP_AFTER_SECTION;

  section("Professional Summary");
  paragraph(
    "Motivated MERN Stack Developer with hands-on experience in building full-stack web applications, " +
      "including real-world and academic projects. Skilled in designing scalable systems, developing REST APIs, " +
      "and creating responsive user interfaces. Passionate about solving problems, learning new technologies, " +
      "and working in remote environments.",
  );
  y += 2;

  section("Education");
  paragraph("Bachelor's Degree in Computer Science");
  paragraph("Somali National University, Somalia");
  paragraph("Graduation Date: April 1, 2026");
  y += 2;

  section("Experience");
  paragraph("Software Developer — Tabarak Solutions");
  paragraph(
    "1.5 years total: 6-month internship, followed by 1 year as an employee. " +
      "Contributed to professional software delivery in a team environment.",
  );
  bullet("Completed intensive internship; transitioned into a full developer role with growing responsibilities");
  bullet("Worked on software solutions, backend and frontend tasks, and system design alongside the team");
  bullet("Collaborated effectively in a structured workplace setting from intern through employee tenure");
  y += 2;

  section("Technical Skills");
  paragraph("Frontend: HTML, CSS, JavaScript, React, Tailwind CSS");
  paragraph("Backend: Node.js, Express.js");
  paragraph("Database: MongoDB, SQL");
  paragraph("Tools & Technologies: Git, GitHub, REST APIs, Postman");
  paragraph("Other: Data Structures & Algorithms (JavaScript, Python, C++)");
  y += 2;

  section("Soft Skills");
  bullet("Strong problem-solving and debugging skills");
  bullet("Ability to work independently and remotely");
  bullet("Fast learner and highly motivated");
  y += 2;

  section("Projects");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  newPageIfNeeded(LINE + 2);
  doc.text("Online Banking System", MARGIN, y);
  y += LINE + 1;
  doc.setFont("helvetica", "normal");
  bullet("Developed using C# as part of university coursework");
  bullet("Implemented core banking features such as transactions and account management");
  y += 1;

  doc.setFont("helvetica", "bold");
  newPageIfNeeded(LINE + 2);
  doc.text("Quiz Web Application", MARGIN, y);
  y += LINE + 1;
  doc.setFont("helvetica", "normal");
  bullet("Created interactive quizzes with scoring system");
  bullet("Built responsive UI using React and Tailwind CSS");
  y += 1;

  doc.setFont("helvetica", "bold");
  newPageIfNeeded(LINE + 2);
  doc.text("Content Sharing Platform (Wattpad-like)", MARGIN, y);
  y += LINE + 1;
  doc.setFont("helvetica", "normal");
  bullet("Developed a platform for users to read and share content");
  bullet("Implemented user authentication and content management");
  y += 2;

  section("Languages");
  bullet("Arabic — Fluent");
  bullet("English — Conversational");

  doc.save("Shifa-Osman-Musa-CV.pdf");
}
