export function fetchContributors(url, func) {
  fetch(url)
    .then((result) => result.json())
    .then((data) => {
      func(data);
    });
}
