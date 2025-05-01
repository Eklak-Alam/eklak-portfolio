import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata = {
  title: "Eklak Alam | Full Stack Developer",
  description: "Portfolio of Eklak Alam – Full Stack Developer skilled in React, Next.js, Java, Spring Boot. View projects, skills, and contact info.",
  keywords: ["Eklak Alam", "portfolio", "web developer", "full stack", "React", "Next.js", "Java", "Spring Boot"],
  authors: [{ name: "Eklak Alam", url: "https://yourdomain.vercel.app" }],
  creator: "Eklak Alam",
  metadataBase: new URL("https://yourdomain.vercel.app"), // replace with your real Vercel domain
  openGraph: {
    title: "Eklak Alam | Full Stack Developer",
    description: "Explore projects and skills of Eklak Alam, a full-stack developer.",
    url: "https://yourdomain.vercel.app",
    siteName: "Eklak Alam Portfolio",
    images: [
      {
        url: "https://yourdomain.vercel.app/preview.jpg", // optional: create a thumbnail
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eklak Alam | Full Stack Developer",
    description: "Explore projects and skills of Eklak Alam.",
    images: ["https://yourdomain.vercel.app/preview.jpg"], // same as above
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
