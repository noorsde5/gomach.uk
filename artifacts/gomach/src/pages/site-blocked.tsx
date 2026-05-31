export default function SiteBlocked() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0f0f0f] text-foreground px-6">
      <main className="text-center max-w-md">
        <h1 className="text-6xl font-black text-white mb-3">404</h1>
        <p className="text-muted-foreground text-lg">This website does not exist.</p>
      </main>
    </div>
  );
}
