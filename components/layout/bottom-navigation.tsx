export function BottomNavigation() {
  return (
    <nav className="fixed bottom-0 left-1/2 z-50 w-full max-w-sm -translate-x-1/2 border-t border-white/10 bg-slate-950/95 px-4 pb-5 pt-3 backdrop-blur-xl">
      <div className="grid grid-cols-3 gap-2 text-center text-xs">
        <button className="rounded-xl bg-cyan-300/15 px-2 py-2.5 font-semibold text-cyan-100">홈</button>
        <button className="rounded-xl bg-white/[0.04] px-2 py-2.5 text-slate-300">매칭</button>
        <button className="rounded-xl bg-white/[0.04] px-2 py-2.5 text-slate-300">프로필</button>
      </div>
    </nav>
  );
}
