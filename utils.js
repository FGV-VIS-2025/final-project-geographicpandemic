function weekYearToDate(weekYear) {
  const parts = weekYear.includes("-W")
    ? weekYear.split("-W")
    : weekYear.split("-");
  const [year, week] = parts.map(Number);
  const simple = new Date(year, 0, 1 + (week - 1) * 7);
  const dow = simple.getDay();
  if (dow <= 4) simple.setDate(simple.getDate() - simple.getDay() + 1);
  else simple.setDate(simple.getDate() + 8 - simple.getDay());
  return simple;
}

function formatDateDisplay(dateStr) {
  const [year, month] = dateStr.split("-");
  const date = new Date(parseInt(year), parseInt(month) - 1); // corrigido para mês correto
  return `${date.toLocaleString("default", { month: "short" })} ${year}`;
}
