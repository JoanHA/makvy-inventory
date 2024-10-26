import ProfileSidebar from "@/app/components/ui/ProfileSidebar";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ProfileSidebar>{children}</ProfileSidebar>
      </body>
    </html>
  );
}
