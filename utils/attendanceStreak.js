function toUTCDay(date) {
  const d = new Date(date);
  return Date.UTC(
    d.getFullYear(),
    d.getMonth(),
    d.getDate()
  );
}

export function calculateCurrentStreak(records) {
  if (!records || records.length === 0) return 0;

  const sorted = [...records].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  if (sorted[0].status === "absent") return 0;

  const latestDate = new Date(sorted[0].date);
  const today = new Date();
  const latestUTCDay = toUTCDay(latestDate);
  const todayUTCDay = toUTCDay(today);
  const yesterdayUTCDay = todayUTCDay - 86400000;

  if (latestUTCDay < yesterdayUTCDay) return 0;

  let streak = 1;
  let prevDate = new Date(sorted[0].date);

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i].status === "absent") break;

    const currDate = new Date(sorted[i].date);
    const diffDays =
      (toUTCDay(prevDate) - toUTCDay(currDate)) /
      (1000 * 60 * 60 * 24);

    if (diffDays === 1) {
      streak++;
      prevDate = currDate;
    } else if (diffDays === 0) {
      continue;
    } else {
      break;
    }
  }

  return streak;
}

export function calculateLongestStreak(records) {
  if (!records || records.length === 0) return 0;

  const nonAbsent = [...records]
    .filter((r) => r.status !== "absent")
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  if (nonAbsent.length === 0) return 0;

  let maxStreak = 1;
  let currentStreak = 1;

  for (let i = 1; i < nonAbsent.length; i++) {
    const prevDate = new Date(nonAbsent[i - 1].date);
    const currDate = new Date(nonAbsent[i].date);
    const diffDays =
      (toUTCDay(currDate) - toUTCDay(prevDate)) /
      (1000 * 60 * 60 * 24);

    if (diffDays === 1) {
      currentStreak++;
      maxStreak = Math.max(maxStreak, currentStreak);
    } else if (diffDays === 0) {
      continue;
    } else {
      currentStreak = 1;
    }
  }

  return maxStreak;
}

export function calculateMonthlyConsistency(records) {
  if (!records || records.length === 0) return 0;

  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  const thisMonthRecords = records.filter((r) => {
    const d = new Date(r.date);
    return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
  });

  if (thisMonthRecords.length === 0) return 0;

  const attended = thisMonthRecords.filter((r) => r.status !== "absent").length;
  return Math.round((attended / thisMonthRecords.length) * 100);
}

export function getStatusBadge(consistency) {
  if (consistency >= 90) return { label: "Excellent", variant: "green" };
  if (consistency >= 75) return { label: "Good", variant: "blue" };
  return { label: "Needs Improvement", variant: "yellow" };
}
