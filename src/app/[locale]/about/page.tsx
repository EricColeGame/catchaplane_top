import type { Metadata } from "next";
import { getMessages } from "next-intl/server";
import { LegalPage } from "@/components/legal-page";
import en from "@/locales/en.json";

type Messages = typeof en;

async function getPage(locale: string) {
  const messages = (await getMessages({ locale })) as Messages;
  return messages.legal.about;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const page = await getPage(locale);
  return { title: page.title, description: page.paragraphs[0] };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const page = await getPage(locale);
  return (
    <LegalPage title={page.title}>
      {page.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </LegalPage>
  );
}
