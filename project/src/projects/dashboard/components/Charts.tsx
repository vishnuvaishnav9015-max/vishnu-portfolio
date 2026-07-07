export function LineChart() {
  const data = [
    { month: 'Jan', value: 30 },
    { month: 'Feb', value: 45 },
    { month: 'Mar', value: 35 },
    { month: 'Apr', value: 50 },
    { month: 'May', value: 65 },
    { month: 'Jun', value: 55 },
    { month: 'Jul', value: 70 },
    { month: 'Aug', value: 85 },
    { month: 'Sep', value: 75 },
    { month: 'Oct', value: 90 },
    { month: 'Nov', value: 95 },
    { month: 'Dec', value: 100 },
  ];

  const maxValue = Math.max(...data.map((d) => d.value));
  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * 100;
    const y = 100 - (d.value / maxValue) * 100;
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="relative h-64">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgb(168, 85, 247)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="rgb(168, 85, 247)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Grid Lines */}
        {[0, 25, 50, 75, 100].map((y) => (
          <line
            key={y}
            x1="0"
            y1={y}
            x2="100"
            y2={y}
            stroke="rgb(51, 65, 85)"
            strokeWidth="0.3"
          />
        ))}

        {/* Area */}
        <polygon
          points={`0,100 ${points} 100,100`}
          fill="url(#lineGradient)"
        />

        {/* Line */}
        <polyline
          points={points}
          fill="none"
          stroke="rgb(168, 85, 247)"
          strokeWidth="0.8"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* X-axis Labels */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-surface-400">
        {data.map((d) => (
          <span key={d.month} className="transform -translate-y-2">
            {d.month}
          </span>
        ))}
      </div>
    </div>
  );
}

export function BarChart() {
  const data = [
    { name: 'Electronics', value: 85 },
    { name: 'Fashion', value: 65 },
    { name: 'Home', value: 45 },
    { name: 'Sports', value: 70 },
    { name: 'Books', value: 30 },
    { name: 'Others', value: 55 },
  ];

  const maxValue = Math.max(...data.map((d) => d.value));

  const colors = [
    'from-purple-500 to-pink-500',
    'from-blue-500 to-cyan-500',
    'from-amber-500 to-orange-500',
    'from-emerald-500 to-teal-500',
    'from-rose-500 to-red-500',
    'from-indigo-500 to-violet-500',
  ];

  return (
    <div className="space-y-3">
      {data.map((item, i) => (
        <div key={item.name} className="flex items-center gap-3">
          <span className="w-20 text-sm text-surface-400">{item.name}</span>
          <div className="flex-1 h-8 bg-surface-700/50 rounded-lg overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${colors[i]} rounded-lg transition-all duration-500`}
              style={{ width: `${(item.value / maxValue) * 100}%` }}
            />
          </div>
          <span className="text-sm text-white font-medium w-12 text-right">${item.value}K</span>
        </div>
      ))}
    </div>
  );
}

export function DonutChart() {
  const data = [
    { name: 'Organic', value: 45, color: '#a855f7' },
    { name: 'Direct', value: 25, color: '#22d3ee' },
    { name: 'Referral', value: 20, color: '#f59e0b' },
    { name: 'Social', value: 10, color: '#f43f5e' },
  ];

  const total = data.reduce((sum, d) => sum + d.value, 0);
  let cumulative = 0;

  const arcs = data.map((d) => {
    const startAngle = (cumulative / total) * 360;
    cumulative += d.value;
    const endAngle = (cumulative / total) * 360;
    return { ...d, startAngle, endAngle };
  });

  const polarToCartesian = (angle: number) => {
    const rad = ((angle - 90) * Math.PI) / 180;
    return { x: 50 + 40 * Math.cos(rad), y: 50 + 40 * Math.sin(rad) };
  };

  const createArc = (start: number, end: number) => {
    const startPt = polarToCartesian(start);
    const endPt = polarToCartesian(end);
    const largeArc = end - start > 180 ? 1 : 0;
    return `M 50 50 L ${startPt.x} ${startPt.y} A 40 40 0 ${largeArc} 1 ${endPt.x} ${endPt.y} Z`;
  };

  return (
    <div className="flex justify-center">
      <svg className="w-40 h-40" viewBox="0 0 100 100">
        {arcs.map((arc) => (
          <path
            key={arc.name}
            d={createArc(arc.startAngle, arc.endAngle)}
            fill={arc.color}
            className="hover:opacity-80 transition-opacity"
          />
        ))}
        <circle cx="50" cy="50" r="25" fill="rgb(30, 41, 59)" />
        <text x="50" y="50" textAnchor="middle" dy=".3em" className="fill-white text-xs" fontSize="8">
          {total}%
        </text>
      </svg>
    </div>
  );
}

export function AreaChart() {
  const data = [
    { day: 'Mon', value: 20 },
    { day: 'Tue', value: 35 },
    { day: 'Wed', value: 25 },
    { day: 'Thu', value: 45 },
    { day: 'Fri', value: 55 },
    { day: 'Sat', value: 40 },
    { day: 'Sun', value: 60 },
  ];

  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <div className="flex items-end justify-between h-32 gap-2">
      {data.map((d) => (
        <div key={d.day} className="flex-1 flex flex-col items-center gap-2">
          <div
            className="w-full bg-gradient-to-t from-blue-500 to-cyan-500 rounded-t transition-all duration-500"
            style={{ height: `${(d.value / maxValue) * 100}%` }}
          />
          <span className="text-xs text-surface-400">{d.day}</span>
        </div>
      ))}
    </div>
  );
}
