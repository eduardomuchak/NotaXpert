export function GrayBackgroundContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-sanofiGray p-6 md:p-8 flex flex-row gap-8 flex-wrap flex-1">
      {children}
    </div>
  );
}
