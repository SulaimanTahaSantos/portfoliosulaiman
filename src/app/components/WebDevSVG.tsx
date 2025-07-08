export function WebDevSVG() {
  return (
    <div className="w-[450px] h-[550px] transform translate-x-10">
      <svg viewBox="0 0 400 400"  className="w-full h-full">
            <rect
              x="100"
              y="120"
              width="200"
              height="120"
              rx="8"
              fill="#1F2937"
              stroke="#374151"
              strokeWidth="2"
            />
            <rect x="110" y="130" width="180" height="90" fill="#111827" />

            <rect x="115" y="135" width="170" height="80" fill="#0F172A" />
            <line
              x1="120"
              y1="145"
              x2="160"
              y2="145"
              stroke="#3B82F6"
              strokeWidth="2"
            />
            <line
              x1="120"
              y1="155"
              x2="180"
              y2="155"
              stroke="#10B981"
              strokeWidth="2"
            />
            <line
              x1="130"
              y1="165"
              x2="170"
              y2="165"
              stroke="#F59E0B"
              strokeWidth="2"
            />
            <line
              x1="120"
              y1="175"
              x2="190"
              y2="175"
              stroke="#EF4444"
              strokeWidth="2"
            />

            {/* Base del monitor */}
            <rect x="180" y="240" width="40" height="20" fill="#374151" />
            <rect x="160" y="260" width="80" height="8" fill="#4B5563" />

            {/* Dispositivos móviles */}
            <rect
              x="50"
              y="180"
              width="30"
              height="50"
              rx="4"
              fill="#1F2937"
              stroke="#374151"
              strokeWidth="1"
            />
            <rect
              x="320"
              y="180"
              width="30"
              height="50"
              rx="4"
              fill="#1F2937"
              stroke="#374151"
              strokeWidth="1"
            />

            <circle
              cx="80"
              cy="100"
              r="15"
              fill="#3B82F6"
              className="opacity-60"
            />
            <circle
              cx="320"
              cy="120"
              r="12"
              fill="#10B981"
              className="opacity-60"
            />
            <circle
              cx="60"
              cy="300"
              r="10"
              fill="#F59E0B"
              className="opacity-60"
            />
            <circle
              cx="340"
              cy="280"
              r="8"
              fill="#EF4444"
              className="opacity-60"
            />

            <path
              d="M80 100 Q150 80 200 120"
              stroke="#3B82F6"
              strokeWidth="1"
              fill="none"
              className="opacity-40"
            />
            <path
              d="M320 120 Q250 100 200 120"
              stroke="#10B981"
              strokeWidth="1"
              fill="none"
              className="opacity-40"
            />
          </svg>
        </div>
  );
}
