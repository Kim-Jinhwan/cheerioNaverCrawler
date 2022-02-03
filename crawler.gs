function scraper() {
    const sheet = SpreadsheetApp.getActiveSheet();
    const content = UrlFetchApp.fetch("https://search.naver.com/search.naver?where=view&sm=tab_jum&query=키워드").getContentText();
    const $ = Cheerio.load(content);
    const titles = [];
    const date = new Date();
    titles.push(date);
    const arr = $('._more_contents_event_base > ul > li').toArray();
    arr.forEach((li) => {
      const title = $(li).find(".api_txt_lines.total_tit._cross_trigger").text();
      Logger.log(title);
      titles.push(title);
    });
    sheet.appendRow(titles);
}
