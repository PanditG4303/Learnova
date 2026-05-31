import React, { useMemo } from "react";
import { Flame, Trophy, TrendingUp, Star } from "lucide-react";
import {
  calculateCurrentStreak,
  calculateLongestStreak,
  calculateMonthlyConsistency,
  getStatusBadge,
} from "@/utils/attendanceStreak";

const badgeConfig = {
  green: {
    bg: "bg-gradient-to-r from-green-500/20 to-emerald-500/20",
    border: "border-green-500/40",
    text: "text-green-400",
    glow: "shadow-green-500/20",
  },
  blue: {
    bg: "bg-gradient-to-r from-blue-500/20 to-indigo-500/20",
    border: "border-blue-500/40",
    text: "text-blue-400",
    glow: "shadow-blue-500/20",
  },
  yellow: {
    bg: "bg-gradient-to-r from-yellow-500/20 to-orange-500/20",
    border: "border-yellow-500/40",
    text: "text-yellow-400",
    glow: "shadow-yellow-500/20",
  },
};

const AttendanceInsights = ({ records }) => {
  const safeRecords = Array.isArray(records) ? records : [];

  const currentStreak = useMemo(
    () => calculateCurrentStreak(safeRecords),
    [safeRecords]
  );
  const longestStreak = useMemo(
    () => calculateLongestStreak(safeRecords),
    [safeRecords]
  );
  const consistency = useMemo(
    () => calculateMonthlyConsistency(safeRecords),
    [safeRecords]
  );
  const badge = useMemo(() => getStatusBadge(consistency), [consistency]);
  const colors = badgeConfig[badge.variant] || badgeConfig.yellow;

  return (
    <div className="bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
      <h2 className="text-xl font-bold text-white mb-6">
        Attendance Insights
      </h2>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Flame className="w-4 h-4 text-orange-400" />
            <span className="text-gray-300 text-sm">Current Streak</span>
          </div>
          <span className="text-white font-semibold">{currentStreak} days</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Trophy className="w-4 h-4 text-yellow-400" />
            <span className="text-gray-300 text-sm">Best Streak</span>
          </div>
          <span className="text-white font-semibold">{longestStreak} days</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4 text-blue-400" />
            <span className="text-gray-300 text-sm">Consistency</span>
          </div>
          <span className="text-white font-semibold">{consistency}%</span>
        </div>
      </div>

      <div
        className={`mt-4 ${colors.bg} ${colors.border} border rounded-xl p-3 flex items-center justify-center gap-2 shadow-lg ${colors.glow}`}
      >
        <Star className={`w-4 h-4 ${colors.text}`} />
        <span className={`text-sm font-bold ${colors.text}`}>
          {badge.label}
        </span>
      </div>
    </div>
  );
};

export default AttendanceInsights;
