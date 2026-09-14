export default function HolidayBanner() {
  return (
    <div className="bg-gradient-to-r from-[var(--secondary)] to-[var(--secondary-dark)] py-4 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
        <span className="text-2xl">🎄</span>
        <div>
          <span className="text-white font-bold">Holiday Packages Coming Soon!</span>
          <span className="text-white/90 hidden sm:inline"> — </span>
          <span className="text-white/90 block sm:inline">Our only discount of the year - exclusive lesson packages for the holiday season.</span>
        </div>
        <span className="text-2xl hidden sm:inline">🎁</span>
      </div>
    </div>
  );
}
