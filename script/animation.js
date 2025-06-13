document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector('.page');
  section.classList.add('show');
});
document.addEventListener('DOMContentLoaded', () => {
  async function fetchData(url) {
    try {
      const res = await fetch(url);
      return res.ok ? res.json() : null;
    } catch {
      return null;
    }
  }

  // LeetCode: unofficial API
  fetchData(`https://leetcode-stats-api.herokuapp.com/${'DvxgFDhYea'}`)
    .then(data => {
      if (data) {
        document.getElementById('leetcode-stats').innerText = 
          `${data.totalSolved} ⁠⁄ ⁠${data.totalQuestions} solved • ${data.ranking} rank`;
      } else {
        document.getElementById('leetcode-stats').innerText = 'Stats unavailable';
      }
    });

  // HackerRank – public profile scrape (example)
  fetchData(`https://api.hackerrank.com/profile/${'your_username'}`)
    .then(data => {
      if (data && data.badges_count != null) {
        document.getElementById('hackerrank-stats').innerText = 
          `${data.badges_count} badges • ${data.submissions_count} submissions`;
      } else {
        document.getElementById('hackerrank-stats').innerText = 'Stats unavailable';
      }
    });

  // Codeforces – official API
  fetchData(`https://codeforces.com/api/user.info?handles=${'your_username'}`)
    .then(json => {
      if (json && json.result) {
        const u = json.result[0];
        document.getElementById('codeforces-stats').innerText =
          `Rating: ${u.rating} (${u.rank}), Solved: ${u.maxRating}`;
      } else {
        document.getElementById('codeforces-stats').innerText = 'Stats unavailable';
      }
    });

  // CodeChef – public profile scrape (example)
  fetchData(`https://competitive-coding-api.herokuapp.com/api/codechef/${'your_username'}`)
    .then(data => {
      if (data && data.rating) {
        document.getElementById('codechef-stats').innerText =
          `Rating: ${data.rating} • ${data.fully_solved} solved`;
      } else {
        document.getElementById('codechef-stats').innerText = 'Stats unavailable';
      }
    });
});
