export default function Loading() {
  return (
    <div className="min-h-screen bg-warm-white flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <p className="font-italiana text-2xl text-espresso tracking-widest">
          URBAN SAAJH
        </p>
        <div className="w-32 h-px bg-cream-dark relative overflow-hidden">
          <div className="absolute inset-0 bg-gold animate-[drawLine_1.5s_ease_infinite]" />
        </div>
      </div>
    </div>
  );
}
