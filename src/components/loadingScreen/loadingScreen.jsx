
export function LoadingScreen() {

    return (
      <div className="h-dvh w-dvw bg-[var(--primary-color)] flex items-center justify-center">
        <div className="w-26 h-26 border-4 border-transparent animate-spin flex items-center justify-center border-t-purple-400 rounded-full">
          <div className="w-20 h-20 border-4 border-transparent animate-spin flex items-center justify-center border-t-pink-400 rounded-full" />
        </div>
      </div>
    );
  }
