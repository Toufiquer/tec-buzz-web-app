/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: WebApp, July, 2026
|-----------------------------------------
*/
const tools = [
  {
    name: "Wappalyzer",
    url: "https://chromewebstore.google.com/detail/wappalyzer-technology-pro/gppongmhjkpfnbhagpmjfkannfbllamg?hl=en",
  },
  {
    name: "Meta Pixel Helper",
    url: "https://chromewebstore.google.com/detail/meta-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc",
  },
  {
    name: "Tag Assistant Helper",
    url: "https://chromewebstore.google.com/detail/tag-assistant/kejbdjndbnbjgmefkgdddjlbokphdefk?hl=en",
  },
  {
    name: "Datalayer Checker",
    url: "https://chromewebstore.google.com/detail/datalayer-checker/ffljdddodmkedhkcjhpmdajhjdbkogke?hl=en",
  },
];

const Page = () => {
  return (
    <main>
      <h1>Tools</h1>
      <ol>
        {tools.map((tool) => (
          <li key={tool.name}>
            <a href={tool.url} target="_blank" rel="noopener noreferrer">
              {tool.name}
            </a>
          </li>
        ))}
      </ol>
    </main>
  );
};

export default Page;
