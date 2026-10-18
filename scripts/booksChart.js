export const showChart = (records) => {
  const bookChart = document.getElementById("bookChart");
  bookChart.innerHTML = "";

  const counts = [];
  const labels = [];

  for (let index = 6; index >= 0; index--) {
    const date = new Date();
    date.setDate(date.getDate() - index);
    const day = date.toISOString().slice(0, 10);

    let count = 0;
    for (const record of records) {
      if (record.createdAt === day) {
        count++;
      }
    }
    counts.push(count);
    labels.push(day.slice(5));
  }

  const biggest = Math.max(...counts, 1);

  for (let i = 0; i < counts.length; i++) {
    const bar = document.createElement("div");
    bar.className = "bar";
    bar.style.height = (counts[i] / biggest) * 100 + "%";
    bar.title = `${labels[i]}: ${counts[i]}`;

    const label = document.createElement("span");
    label.textContent = `${labels[i]} (${counts[i]})`;

    const column = document.createElement("div");
    column.className = "bar-col";
    column.appendChild(bar);
    column.appendChild(label);
    bookChart.appendChild(column);
  }
  bookChart.setAttribute(
    "aria-label",
    "Books added in the last 7 days: " + counts.join(", "),
  );
};
