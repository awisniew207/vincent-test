export async function generateStaticParams() {
  // For static export, we need to return an array of all possible app IDs
  // Since we don't know all possible app IDs at build time, we'll return an empty array
  // This means the page will be generated at runtime
  return [];
}

export default function AdvancedFunctionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 