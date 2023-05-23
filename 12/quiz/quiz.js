import playwright from 'playwright';
import fs from 'fs';

(async () => {
  const browser = await playwright.chromium.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto('https://www.melon.com/chart/');

  const songs = await page.evaluate(() => {
    const songElements1 = document.querySelectorAll(
      '#lst50 > td:nth-child(6) > div > div > div.ellipsis.rank01 > span > a'
    );
    const songElements2 = document.querySelectorAll(
      '#lst50 > td:nth-child(6) > div > div > div.ellipsis.rank01 > span > a'
    );
    const rankElements1 = document.querySelectorAll(
      '#lst50 > td:nth-child(2) > div > span.rank'
    );
    const rankElements2 = document.querySelectorAll(
      '#lst100 > td:nth-child(2) > div > span.rank'
    );
    const songElements = Array.from(songElements1).concat(
      Array.from(songElements2)
    );
    const rankElements = Array.from(rankElements1).concat(
      Array.from(rankElements2)
    );

    const songsData = [];

    for (let i = 0; i < songElements.length; i++) {
      const songTitle = songElements[i].innerText;
      const rank = rankElements[i].innerText;
      songsData.push({ rank, songTitle });
    }

    return songsData;
  });

  const totalRankTitle = JSON.stringify(songs, null, 2);

  console.log(totalRankTitle);
  fs.writeFileSync('melon.json', totalRankTitle, 'utf-8');

  await browser.close();
})();
