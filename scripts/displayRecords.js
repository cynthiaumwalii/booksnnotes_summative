import { getRowValues } from "./search.js";

const recordsTable = document.getElementById("records-table");

export const escapeHTML = (text) => {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
};

//this function highlights matches as per regex, returned in <mark> element
export const highlightMatch = (text, regexPattern) => {
  if (!regexPattern) {
    return escapeHTML(text);
  }

  let finalResult = "";
  let end = 0;

  for (const match of text.matchAll(regexPattern)) {
    if (match[0].length === 0) {
      continue;
    }
    finalResult += escapeHTML(text.slice(end, match.index));
    finalResult += `<mark>${escapeHTML(match[0])}</mark>`;
    end = match.index + match[0].length;
  }
  return finalResult + escapeHTML(text.slice(end));
};

//displayRecords populates the table with rows of every record in records.
// If there's a regex pattern, the matches are highlighted, else, nothing is highlighted.
export const displayRecords = (records, regexPattern) => {
  const tbody = recordsTable.querySelector("tbody");
  tbody.innerHTML = "";
  records.forEach((record) => {
    const fields = getRowValues(record);
    const row = document.createElement("tr");
    row.innerHTML = `<td data-label="Title: ">${highlightMatch(fields.title, regexPattern)}</td>
        <td data-label="Author: ">${highlightMatch(fields.author, regexPattern)}</td>
        <td data-label="Date Added: ">${escapeHTML(record.createdAt)}</td>
        <td data-label="Summary: ">${highlightMatch(fields.summary, regexPattern)}</td>
        <td data-label="Tags: ">${highlightMatch(fields.tags, regexPattern)}</td>
        <td data-label="Rating: ">${escapeHTML(record.rating)}</td>
        <td data-label="Notes: ">${highlightMatch(fields.notes, regexPattern)}</td>
        <td>
        <div class="action-buttons">
            <button class="editButton" data-action="edit" data-id="${record.id}" title="Edit" aria-label="Edit ${escapeHTML(record.title)}">&#128393;</button>
            <button class="deleteButton" data-action="delete" data-id="${record.id}" title="Delete" aria-label="Delete ${escapeHTML(record.title)}">&#128465;</button>
            </div>
        </td>`;
    tbody.appendChild(row);
  });
};
